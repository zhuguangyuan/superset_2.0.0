/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import buildQueryObject from './buildQueryObject';
import DatasourceKey from './DatasourceKey';
import { QueryFieldAliases, QueryFormData } from './types/QueryFormData';
import { QueryContext, QueryObject } from './types/Query';
import { SetDataMaskHook } from '../chart';
import { JsonObject } from '../connection';

const WRAP_IN_ARRAY = (baseQueryObject: QueryObject) => [baseQueryObject];

export type BuildFinalQueryObjects = (
  baseQueryObject: QueryObject,
) => QueryObject[];

export default function buildQueryContext(
  formData: QueryFormData,
  options?:
    | {
        buildQuery?: BuildFinalQueryObjects;
        queryFields?: QueryFieldAliases;
        ownState?: JsonObject;
        hooks?: { setDataMask: SetDataMaskHook };
      }
    | BuildFinalQueryObjects,
): QueryContext {
  const filteredFormData = { ...formData }; // Create a copy of formData
  if (filteredFormData.adhoc_filters) {
    filteredFormData.adhoc_filters = filteredFormData.adhoc_filters.filter(
      (item) => item.isEnable
    );
  }

  const { queryFields, buildQuery = WRAP_IN_ARRAY } =
    typeof options === 'function'
      ? { buildQuery: options, queryFields: {} }
      : options || {};
  const queries = buildQuery(buildQueryObject(filteredFormData, queryFields));
  queries.forEach(query => {
    if (Array.isArray(query.post_processing)) {
      // eslint-disable-next-line no-param-reassign
      query.post_processing = query.post_processing.filter(Boolean);
    }
  });
  return {
    datasource: new DatasourceKey(filteredFormData.datasource).toObject(),
    force: filteredFormData.force || false,
    queries,
    form_data: filteredFormData,
    result_format: filteredFormData.result_format || 'json',
    result_type: filteredFormData.result_type || 'full',
  };
}
