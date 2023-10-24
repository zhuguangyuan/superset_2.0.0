"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[5378,6871,1261],{78918:(t,e,r)=>{r.d(e,{Z:()=>n});var o=r(95772),s=r(63803),i=r(61855);class n extends o.Z{get isComposite(){return!0}get isLoaded(){return super.isLoaded&&this.getSubLayers().every((t=>t.isLoaded))}getSubLayers(){return this.internalState&&this.internalState.subLayers||[]}initializeState(){}setState(t){super.setState(t),this.setNeedsUpdate()}getPickingInfo({info:t}){const{object:e}=t;return e&&e.__source&&e.__source.parent&&e.__source.parent.id===this.id?(t.object=e.__source.object,t.index=e.__source.index,t):t}renderLayers(){return null}filterSubLayer(t){return!0}shouldRenderSubLayer(t,e){const{_subLayerProps:r}=this.props;return e&&e.length||r&&r[t]}getSubLayerClass(t,e){const{_subLayerProps:r}=this.props;return r&&r[t]&&r[t].type||e}getSubLayerRow(t,e,r){return t.__source={parent:this,object:e,index:r},t}getSubLayerAccessor(t){if("function"==typeof t){const e={data:this.props.data,target:[]};return(r,o)=>r&&r.__source?(e.index=r.__source.index,t(r.__source.object,e)):t(r,o)}return t}getSubLayerProps(t={}){const{opacity:e,pickable:r,visible:o,parameters:s,getPolygonOffset:i,highlightedObjectIndex:n,autoHighlight:a,highlightColor:p,coordinateSystem:g,coordinateOrigin:l,wrapLongitude:c,positionFormat:u,modelMatrix:h,extensions:d,fetch:y,_subLayerProps:b}=this.props,f={opacity:e,pickable:r,visible:o,parameters:s,getPolygonOffset:i,highlightedObjectIndex:n,autoHighlight:a,highlightColor:p,coordinateSystem:g,coordinateOrigin:l,wrapLongitude:c,positionFormat:u,modelMatrix:h,extensions:d,fetch:y},m=b&&b[t.id],L=m&&m.updateTriggers,x=t.id||"sublayer";if(m){const e=this.constructor._propTypes,r=t.type?t.type._propTypes:{};for(const t in m){const o=r[t]||e[t];o&&"accessor"===o.type&&(m[t]=this.getSubLayerAccessor(m[t]))}}Object.assign(f,t,m),f.id="".concat(this.props.id,"-").concat(x),f.updateTriggers={all:this.props.updateTriggers.all,...t.updateTriggers,...L};for(const t of d){const e=t.getSubLayerProps.call(this,t);e&&Object.assign(f,e,{updateTriggers:Object.assign(f.updateTriggers,e.updateTriggers)})}return f}_updateAutoHighlight(t){for(const e of this.getSubLayers())e.updateAutoHighlight(t)}_getAttributeManager(){return null}_renderLayers(){let{subLayers:t}=this.internalState;const e=!t||this.needsUpdate();e&&(t=this.renderLayers(),t=(0,i.x)(t,Boolean),this.internalState.subLayers=t),(0,s.Z)("compositeLayer.renderLayers",this,e,t);for(const e of t)e.parent=this}}n.layerName="CompositeLayer"},36665:(t,e,r)=>{r.d(e,{Z:()=>u});var o=r(67294),s=r(45697),i=r.n(s),n=r(51995),a=r(67190),p=r(11965);const g=n.iK.div`
  ${({theme:t})=>`\n    font-size: ${t.typography.sizes.s}px;\n    position: absolute;\n    background: ${t.colors.grayscale.light5};\n    box-shadow: 0 0 ${t.gridUnit}px ${t.colors.grayscale.light2};\n    margin: ${6*t.gridUnit}px;\n    padding: ${3*t.gridUnit}px ${5*t.gridUnit}px;\n    outline: none;\n    overflow-y: scroll;\n    max-height: 200px;\n\n    & ul {\n      list-style: none;\n      padding-left: 0;\n      margin: 0;\n\n      & li a {\n        color: ${t.colors.grayscale.base};\n        text-decoration: none;\n\n        & span {\n          margin-right: ${3*t.gridUnit}px;\n        }\n      }\n    }\n  `}
`,l=" - ",c={categories:i().object,forceCategorical:i().bool,format:i().string,position:i().oneOf([null,"tl","tr","bl","br"]),showSingleCategory:i().func,toggleCategory:i().func};class u extends o.PureComponent{format(t){if(!this.props.format||this.props.forceCategorical)return t;const e=parseFloat(t);return(0,a.uf)(this.props.format,e)}formatCategoryLabel(t){if(!this.props.format)return t;if(t.includes(l)){const e=t.split(l);return this.format(e[0])+l+this.format(e[1])}return this.format(t)}render(){if(0===Object.keys(this.props.categories).length||null===this.props.position)return null;const t=Object.entries(this.props.categories).map((([t,e])=>{const r={color:`rgba(${e.color.join(", ")})`},o=e.enabled?"◼":"◻";return(0,p.tZ)("li",{key:t},(0,p.tZ)("a",{href:"#",onClick:()=>this.props.toggleCategory(t),onDoubleClick:()=>this.props.showSingleCategory(t)},(0,p.tZ)("span",{style:r},o)," ",this.formatCategoryLabel(t)))})),e={position:"absolute",["t"===this.props.position.charAt(0)?"top":"bottom"]:"0px",["r"===this.props.position.charAt(1)?"right":"left"]:"10px"};return(0,p.tZ)(g,{style:e},(0,p.tZ)("ul",null,t))}}u.propTypes=c,u.defaultProps={categories:{},forceCategorical:!1,format:null,position:"tr",showSingleCategory:()=>{},toggleCategory:()=>{}}}}]);
//# sourceMappingURL=64f6237479272e5c5c3a.chunk.js.map