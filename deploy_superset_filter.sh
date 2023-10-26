#!/bin/bash
# superset服务，更新静态资源 
# 将打包好的 static.tar.gz 文件解压并替换当前安装路径下的 static目录
# 然后重启superset服务. 注意 conda 激活环境 需要测试是否成功 不成功则需手动重启superset服务

# Step 1: copy the static.tar.gz to superset deployment machine
echo "Step 1: Please confirm that path /tmp already has ./static.tar.gz file, if not, copy your static.tar.gz to there..."

# Step 2: Find the location of the Superset static assets
echo "Step 2: Locating the Superset static assets directory..."
assets_location=$(find / -name 'assets' 2>/dev/null | grep "static" | tail -n 1)
if [ -z "$assets_location" ]; then
  echo "Error: Unable to locate Superset static assets directory."
  exit 1
fi
echo "assets_location: " $assets_location

# Step 3: Navigate to the Superset installation directory
echo "Step 3: Navigating to the Superset installation directory..."
superset_directory=$(dirname $(dirname "$assets_location"))
cd "$superset_directory"
current_directory=$(pwd)
echo "curPath: " $(pwd)

if [[ "$current_directory" != *"/superset" ]]; then
  echo "Error: Not in the Superset installation directory."
  exit 1
fi

# Step 4: Backup old resources
echo "Step 4: Backing up old resources..."
echo "curPathList: " $(ls -alrt | grep "static")
mv static static_back

# Step 5: Upload and unpack new resources
echo "Step 5: Uploading and unpacking new resources..."
rm -f static.tar.gz
cp /tmp/static.tar.gz .
rm -rf static
tar -zxvf static.tar.gz

# Step 6: Restart Superset service
echo "Step 6: Restarting Superset service..."

## Activate the 'superset' conda environment
conda activate superset

## Check if the activation was successful
if [ $? -ne 0 ]; then
  echo "Failed to activate the 'superset' environment."
  exit 1
fi

## Kill the gunicorn processes
ps -ef | awk '/gunicorn/ && !/awk/{print $2}' | xargs kill -9

## Check if the process termination was successful
if [ $? -ne 0 ]; then
  echo "Failed to kill the gunicorn processes."
  exit 1
fi

## Start gunicorn
gunicorn -w 5 -t 120 -b 10.10.10.111:8089 "superset.app:create_app()" --daemon

## Deactivate the conda environment
conda deactivate

echo "Deployment completed successfully."
