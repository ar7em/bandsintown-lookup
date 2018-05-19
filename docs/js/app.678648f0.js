webpackJsonp([1],{0:function(n,t,e){n.exports=e("NHnr")},"4+hh":function(n,t){},AEMZ:function(n,t){},AnE8:function(n,t){},G3BA:function(n,t){},NHnr:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=e("/5sW"),a=e("Lgyv"),o=e.n(a),s=e("Biqn"),c=e.n(s),r=e("NYxO"),u={name:"Search",mounted:function(){this.$refs.input.$el.focus()},computed:c()({},Object(r["c"])({value:function(n){return n.artist},fetching:function(n){return n.infoFetching}})),methods:c()({},Object(r["b"])({requestInfo:"requestInfo"}))},d=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"Search"},[e("md-field",[e("label",[n._v("Artist's Name")]),e("md-input",{ref:"input",staticClass:"Search__input",attrs:{value:n.value},on:{input:n.requestInfo}})],1),e("div",{staticClass:"Search__spinner"},[e("div",{directives:[{name:"show",rawName:"v-show",value:n.fetching,expression:"fetching"}]},[e("md-progress-spinner",{attrs:{"md-mode":"indeterminate"}})],1)])],1)},f=[],v=e("XyMi");function l(n){e("AEMZ")}var m=!1,g=l,h="data-v-a3c4a748",p=null,_=Object(v["a"])(u,d,f,m,g,h,p),b=_.exports,F=e("xCiF"),I=e.n(F),E={name:"Info",computed:c()({},Object(r["c"])({info:function(n){var t=this;return this.setCover(""),I()(function(){return t.setCover(n.info.image_url)}),n.info},notFound:function(n){return n.artist&&!n.info.mbid&&!n.infoFetching}})),methods:{setCover:function(n){this.$refs&&this.$refs.bandImage&&(this.$refs.bandImage.src=n)}}},C=function(){var n=this,t=n.$createElement,e=n._self._c||t;return n.info.mbid?e("div",{staticClass:"Info"},[e("md-card",{staticClass:"Info__band"},[e("md-card-media-cover",[e("md-card-media",[e("img",{ref:"bandImage",staticClass:"Info__cover",attrs:{src:n.info.image_url,alt:"info.name"}})]),e("md-card-header",[e("md-card-header-text",[e("div",{staticClass:"md-title"},[n._v(n._s(n.info.name))])])],1),n.info.facebook_page_url?e("md-card-actions",{staticClass:"Info__actions"},[e("md-button",{staticClass:"md-dense md-raised md-primary",attrs:{href:n.info.facebook_page_url,target:"_blank"}},[n._v("\n          See on Facebook\n        ")])],1):n._e(),e("md-card-content",[n._t("events")],2)],1)],1)],1):e("div",[n.notFound?e("div",[n._v("\n    No information found\n  ")]):n._e()])},j=[];function x(n){e("epxQ")}var O=!1,w=x,A="data-v-a3d486ac",k=null,$=Object(v["a"])(E,C,j,O,w,A,k),S=$.exports,y={name:"Events",computed:c()({},Object(r["c"])({events:function(n){return n.events},fetching:function(n){return n.eventsFetching},notFound:function(n){return!(n.events.length||n.eventsFetching)}})),methods:{parseDate:function(n){return new Date(n).toLocaleDateString()}}},N=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[n.notFound?e("div",[n._v("\n    No events found\n  ")]):e("div",[n.fetching?e("div",[e("md-progress-spinner",{attrs:{"md-mode":"indeterminate","md-diameter":30}})],1):e("md-list",{staticClass:"md-triple-line"},[n._l(n.events,function(t,i){return[e("md-list-item",{key:t.id},[e("md-avatar",[e("md-icon",[n._v("place")])],1),e("div",{staticClass:"md-list-item-text"},[e("span",[n._v(n._s(t.venue.city)+", "+n._s(t.venue.country))]),e("span",[n._v(n._s(n.parseDate(t.datetime)))]),e("p",[n._v(n._s(t.venue.name))])])],1),i<n.events.length-1?e("md-divider",{key:"divider-"+t.id,staticClass:"md-inset"}):n._e()]})],2)],1)])},G=[],q=!1,M=null,D=null,T=null,B=Object(v["a"])(y,N,G,q,M,D,T),L=B.exports,Z={name:"app",components:{Search:b,Info:S,Events:L}},H=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"App"},[e("Search"),e("Info",[e("Events",{attrs:{slot:"events"},slot:"events"})],1)],1)},Q=[];function W(n){e("G3BA")}var X=!1,z=W,J=null,P=null,V=Object(v["a"])(Z,H,Q,X,z,J,P),Y=V.exports,K=(e("EuXz"),e("VjuZ"),e("424j")),R=e("mtWM"),U=e.n(R),nn=e("O4Lo"),tn=e.n(nn);i["default"].use(r["a"]);var en=U.a.CancelToken,an=function(){},on=function(){},sn=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return n.replace(/\//g,"%252F").replace(/\?/g,"%253F").replace(/\*/g,"%252A").replace(/"'/g,"%27C")},cn={plugins:[Object(K["a"])()],state:{artist:"",infoFetching:!1,eventsFetching:!1,info:{},events:[]},mutations:{changeArtist:function(n,t){n.artist=t},toggleInfoFetching:function(n,t){n.infoFetching=t},toggleEventsFetching:function(n,t){n.eventsFetching=t},changeInfo:function(n,t){n.info=t},changeEvents:function(n,t){n.events=t}},actions:{requestInfo:function(n,t){var e=n.dispatch,i=n.commit;if(i("changeArtist",t),!t)return an(),i("toggleInfoFetching",!1),void i("changeInfo",{});an(),on(),i("toggleInfoFetching",!0),e("debouncedGetInfo",t)},debouncedGetInfo:tn()(function(n,t){var e=n.commit,i=n.dispatch,a=n.state;return U.a.get("https://rest.bandsintown.com/artists/".concat(sn(t)),{params:{app_id:"bands24"},cancelToken:new en(function(n){an=n})}).then(function(n){a.infoFetching&&(e("changeInfo",n.data),e("changeEvents",[]),e("toggleEventsFetching",!0),i("debouncedGetEvents",n.data.name)),e("toggleInfoFetching",!1)}).catch(function(){e("toggleInfoFetching",!1)})},1e3),debouncedGetEvents:tn()(function(n,t){var e=n.commit,i=n.state;return U.a.get("https://rest.bandsintown.com/artists/".concat(sn(t),"/events"),{params:{app_id:"bands24"},cancelToken:new en(function(n){on=n})}).then(function(n){i.eventsFetching&&e("changeEvents",n.data),e("toggleEventsFetching",!1)}).catch(function(){e("toggleEventsFetching",!1)})},1e3)}},rn=new r["a"].Store(cn);e("4+hh"),e("AnE8");i["default"].config.productionTip=!1,i["default"].use(o.a),new i["default"]({store:rn,render:function(n){return n(Y)}}).$mount("#app")},epxQ:function(n,t){}},[0]);
//# sourceMappingURL=app.678648f0.js.map