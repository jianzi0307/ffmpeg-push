(function(e){function t(t){for(var r,a,c=t[0],s=t[1],l=t[2],u=0,f=[];u<c.length;u++)a=c[u],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&f.push(i[a][0]),i[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);d&&d(t);while(f.length)f.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,c=1;c<n.length;c++){var s=n[c];0!==i[s]&&(r=!1)}r&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},i={index:0},o=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var d=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0e1b":function(e,t,n){"use strict";n("bf5d")},1:function(e,t){},2:function(e,t){},"21fd":function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id="21fd"},3:function(e,t){},"56d7":function(e,t,n){"use strict";n.r(t);n("d052"),n("e07b"),n("0fec"),n("c838");var r=n("430a"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("router-view")},o=[],a=n("cba8"),c={},s=Object(a["a"])(c,i,o,!1,null,null,null),l=s.exports,d=n("a5e4"),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wsFlv"},[e.paramCheckedOk?n("div",[n(e.currentComponent,{tag:"component",style:{width:e.width+"px",height:e.height+"px"},attrs:{wsUri:e.wsUri,rtspUrl:e.hikCamera.getRtspUrl()}})],1):n("div",{staticClass:"empty",style:{width:e.width+"px",height:e.height+"px"}},[e._v("参数错误")])])},f=[],h=(n("6236"),n("4e2c"),n("e54e"),n("97ee")),p=n("b42e"),v=(n("3b32"),function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2?arguments[2]:void 0,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:8e3,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"main",a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"admin",c=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"Admin123",s=arguments.length>7&&void 0!==arguments[7]?arguments[7]:1;Object(h["a"])(this,e),this.channel=t,this.username=a,this.password=c,this.name=n,this.ipAddress=r,this.devChannel=s,this.port=i,this.protocol="HIKVISION",this.videoType="h264",this.streamType=o}return Object(p["a"])(e,[{key:"getRtspUrl",value:function(){var e=this.username,t=this.password,n=this.channel,r=this.ipAddress,i=this.port,o=this.videoType,a=this.streamType;return"rtsp://".concat(e,":").concat(t,"@").concat(r,":").concat(i,"/").concat(o,"/ch").concat(n,"/").concat(a,"/av_stream")}},{key:"getNvrTracksUrl",value:function(e,t){var n=this.username,r=this.password,i=this.channel,o=this.ipAddress,a=this.port;return"rtsp://".concat(n,":").concat(r,"@").concat(o,":").concat(a,"/Streaming/tracks/").concat(i,"01?starttime=").concat(e,"&endtime=").concat(t)}}]),e}()),m=v,y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("video",{ref:"video",attrs:{"object-fit":"fill",autoplay:"",muted:""},domProps:{muted:!0}})},b=[],g=n("33aa"),w=n.n(g),P=n("bdc9"),_=n.n(P),k={name:"ws-flv-player",props:{wsUri:{type:String,required:!0},rtspUrl:{type:String,required:!0}},data:function(){return{flvPlayer:null}},mounted:function(){var e=this;this.$nextTick((function(){e.createVideo()}))},beforeDestroy:function(){this.flvPlayer&&this.flvPlayer.destroy()},methods:{createVideo:function(){if(w.a.isSupported()){var e=this.$refs.video,t=this.wsUri,n=this.rtspUrl,r=_()(n);this.flvPlayer=w.a.createPlayer({type:"flv",enableWorker:!0,isLive:!0,hasAudio:!1,hasVideo:!0,stashInitialSize:128,enableStashBuffer:!1,url:"".concat(t,"/rtsp/").concat(r,"/?url=").concat(n)}),this.flvPlayer.attachMediaElement(e);try{this.flvPlayer.load(),this.flvPlayer.play()}catch(i){console.log(i)}}}}},E=k,S=(n("e32a"),Object(a["a"])(E,y,b,!1,null,"adc36c50",null)),x=S.exports,O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("video",{ref:"video",staticClass:"player",attrs:{"object-fit":"fill",autoplay:"",muted:""},domProps:{muted:!0}})},C=[],U=n("2ac3"),A=n.n(U),R=n("6184"),j=n.n(R),I=function(){function e(t,n,r){Object(h["a"])(this,e),this.wsUri=t,this.rtspUri=n,this.el=r}return Object(p["a"])(e,[{key:"start",value:function(){var e=this,t={remoteVideo:this.el};this.webRtcPeer=A.a.WebRtcPeer.WebRtcPeerRecvonly(t,(function(t){if(t)return console.error(t,"<<<这里报错了");e.webRtcPeer.generateOffer((function(t,n){e._onOffer(t,n)})),e.webRtcPeer.peerConnection.addEventListener("iceconnectionstatechange",(function(t){e.webRtcPeer&&e.webRtcPeer.peerConnection&&(console.log("oniceconnectionstatechange",t,"<<<<<"),console.log("oniceconnectionstatechange -> "+e.webRtcPeer.peerConnection.iceConnectionState),console.log("icegatheringstate -> "+e.webRtcPeer.peerConnection.iceGatheringState))}))}))}},{key:"stop",value:function(){this.webRtcPeer&&(this.webRtcPeer.dispose(),this.webRtcPeer=null),this.pipeline&&(this.pipeline.release(),this.pipeline=null)}},{key:"_onOffer",value:function(e,t){var n=this;if(e)return this._onError(e);j()(this.wsUri,(function(e,r){if(e)return n._onError(e);r.create("MediaPipeline",(function(e,r){n._createMediaPipeline(e,r,t)}))}))}},{key:"_createMediaPipeline",value:function(e,t,n){var r=this;if(e)return this._onError(e);this.pipeline=t,this.pipeline.create("PlayerEndpoint",{uri:this.rtspUri},(function(e,t){if(e)return r._onError(e);r.pipeline.create("WebRtcEndpoint",(function(e,i){if(e)return r._onError(e);r.setIceCandidateCallbacks(i,r.webRtcPeer,(function(e){if(e)return r._onError(e)})),i.processOffer(n,(function(e,t){if(e)return r._onError(e);i.gatherCandidates((function(e){if(e)return r._onError(e)})),r.webRtcPeer.processAnswer(t)})),t.connect(i,(function(e){if(e)return r._onError(e);console.log("PlayerEndpoint--\x3eWebRtcEndpoint connection established"),t.play((function(e){if(e)return r._onError(e);console.log("Player playing ...")}))}))}))}))}},{key:"setIceCandidateCallbacks",value:function(e,t,n){t.on("icecandidate",(function(t){console.log("Local icecandidate "+JSON.stringify(t)),t=j.a.register.complexTypes.IceCandidate(t),e.addIceCandidate(t,n)})),e.on("OnIceCandidate",(function(e){var r=e.candidate;console.log("Remote icecandidate "+JSON.stringify(r)),t.addIceCandidate(r,n)}))}},{key:"_onError",value:function(e){e&&(console.error(e,"<<< 报错了释放资源"),this.stop())}}]),e}(),$=I,M={name:"webrtc-player",props:{wsUri:{type:String,required:!0},rtspUrl:{type:String,required:!0}},data:function(){return{kurento:null}},mounted:function(){var e=this.$refs.video;this.kurento=new $(this.wsUri,this.rtspUrl,e),this.kurento.start()},beforeDestroy:function(){this.kurento.stop()}},T=M,N=(n("0e1b"),Object(a["a"])(T,O,C,!1,null,"72ee2596",null)),q=N.exports,V={name:"EndPoint",components:{"webrtc-player":q,"ws-flv-player":x},data:function(){return{hikCamera:void 0,width:320,height:180}},computed:{paramCheckedOk:function(){var e;return this.hikCamera&&(null===(e=this.hikCamera)||void 0===e?void 0:e.channel)>0&&this.hikCamera.ipAddress&&this.hikCamera.port>0},currentComponent:function(){var e=this.$qsParse(window.location.href.split("?")[1]);return"webrtc"===(null===e||void 0===e?void 0:e.mode)?"webrtc-player":"ws-flv-player"},wsUri:function(){var e=this.$qsParse(window.location.href.split("?")[1]),t=Object({NODE_ENV:"production",VUE_APP_ENV_MODE:"online",VUE_APP_KMS_URI:"ws://180.76.134.252:8888/kurento",VUE_APP_FFMPEG_URI:"ws://172.31.129.182:8889",BASE_URL:""}),n=(t.VUE_APP_FFMPEG_URI,t.VUE_APP_KMS_URI),r=window.location.host,i="ws://".concat(r);return"webrtc"===(null===e||void 0===e?void 0:e.mode)?n:i}},mounted:function(){var e=this.$qsParse(window.location.href.split("?")[1]);this.width=(null===e||void 0===e?void 0:e.width)||320,this.height=(null===e||void 0===e?void 0:e.height)||180;var t=e.channel,n=void 0===t?-1:t,r=e.name,i=void 0===r?"":r,o=e.ipAddress,a=void 0===o?"123.160.10.227":o,c=e.port,s=void 0===c?524:c,l=e.streamType,d=void 0===l?"sub":l,u=e.username,f=void 0===u?"admin":u,h=e.password,p=void 0===h?"Admin123":h,v=e.devChannel,y=void 0===v?1:v;this.hikCamera=new m(n,i,a,s,d,f,p,y),console.log(this.hikCamera.getRtspUrl(),"<hikCamera")}},F=V,D=(n("f0d4"),Object(a["a"])(F,u,f,!1,null,"9876c1c0",null)),K=D.exports,W=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{"font-size":"0%"}},[e._l(e.list,(function(e,t){return[n("NginxFlvPlayer",{key:t,style:{border:"solid 1px #ccc",backgroundColor:"black",width:"480px",height:"270px"},attrs:{domKey:t,liveIpAddr:"180.76.134.252",livePort:"9938",rtmpPort:"9909",liveApp:"live",liveStream:e}})]}))],2)},L=[],B=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("video",{attrs:{autoplay:"","object-fit":"fill",width:"100px",height:"100px",id:"video_"+e.domKey,muted:""},domProps:{muted:!0}})},J=[],z=(n("9188"),{name:"nginx-flv-player",props:{domKey:{type:[Number,String],required:!0},liveProtocol:{type:String,default:"http"},liveIpAddr:{type:String,required:!0},livePort:{type:[Number,String],required:!0},rtmpPort:{type:[Number,String],required:!0},liveApp:{type:[Number,String],required:!0},liveStream:{type:[String,Number],required:!0}},data:function(){return{flvPlayer:null}},mounted:function(){var e=this;this.$nextTick((function(){e.createVideo()}))},beforeDestroy:function(){this.destroy()},methods:{load:function(){this.flvPlayer&&this.flvPlayer.load()},play:function(){this.flvPlayer&&this.flvPlayer.play()},pause:function(){this.flvPlayer&&this.flvPlayer.destroy()},destroy:function(){this.flvPlayer&&this.flvPlayer.destroy()},createVideo:function(){if(w.a.isSupported()){var e=this.domKey,t=this.liveProtocol,n=this.liveIpAddr,r=this.livePort,i=this.rtmpPort,o=this.liveApp,a=this.liveStream,c=document.getElementById("video_".concat(e));this.flvPlayer=w.a.createPlayer({type:"flv",enableWorker:!0,isLive:!0,hasAudio:!1,hasVideo:!0,stashInitialSize:128,enableStashBuffer:!1,url:"".concat(t,"://").concat(n,":").concat(r,"/").concat(o,"?port=").concat(i,"&app=").concat(o,"&stream=").concat(a)}),this.flvPlayer.attachMediaElement(c),this.flvPlayer.load(),this.flvPlayer.play()}}}}),G=z,H=(n("9f2c"),Object(a["a"])(G,B,J,!1,null,"4ccb6cfe",null)),Q=H.exports,X={components:{NginxFlvPlayer:Q},data:function(){return{list:[101,102,103]}},mounted:function(){},methods:{}},Y=X,Z=Object(a["a"])(Y,W,L,!1,null,null,null),ee=Z.exports,te=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",[n("div",[e._v("flv测试")]),e._l(e.cameras,(function(e,t){return[n("iframe",{key:t,ref:"iframe"+t,refInFor:!0,staticStyle:{border:"solid 1px #ccc",margin:"0",float:"left",width:"320px",height:"180px"},attrs:{frameboder:"0",src:"/#/?mode=flv&channel="+e.channel+"&ipAddress="+e.ipAddress+"&port="+e.port+"&streamType=sub&width=320&height=180"}})]})),n("div",{staticStyle:{clear:"both"}}),n("div",[e._v("webrtc测试")]),e._l(e.cameras,(function(e,t){return[n("iframe",{key:t,ref:"iframe"+t,refInFor:!0,staticStyle:{border:"solid 1px #ccc",margin:"0",float:"left",width:"320px",height:"180px"},attrs:{frameboder:"0",src:"/#/?mode=webrtc&channel="+e.channel+"&ipAddress="+e.ipAddress+"&port="+e.port+"&streamType=sub&width=320&height=180"}})]})),n("div",{staticStyle:{clear:"both"}})],2),n("div")])},ne=[],re=(n("89a6"),n("f132"),n("e904"),{data:function(){return{mode:"webrtc",cameras:[]}},mounted:function(){var e=Array.from(Array(38),(function(e,t){return{channel:t+1,ipAddress:"123.160.10.227",port:524}}));this.cameras=this.getRandomArrayElements(e,3)},methods:{handleReload:function(e){for(var t in this.$refs)this.$refs[t][0].contentWindow.location.reload()},getRandomArrayElements:function(e,t){var n,r,i=e.slice(0),o=e.length,a=o-t;while(o-- >a)r=Math.floor((o+1)*Math.random()),n=i[r],i[r]=i[o],i[o]=n;return i.slice(a)}}}),ie=re,oe=Object(a["a"])(ie,te,ne,!1,null,null,null),ae=oe.exports;r["a"].use(d["a"]);var ce=[{path:"/",name:"endpoint",component:K},{path:"/nginxFlvTest",name:"nginxFlvTest",component:ee},{path:"/test",name:"test",component:ae}],se=new d["a"]({mode:"hash",base:"",routes:ce}),le=se,de=n("7c78");r["a"].prototype.$qsParse=de["parse"],r["a"].prototype.$qsStringify=de["stringify"],r["a"].config.productionTip=!1,new r["a"]({router:le,render:function(e){return e(l)}}).$mount("#app")},"7f0c":function(e,t,n){},"9f2c":function(e,t,n){"use strict";n("f498")},bf5d:function(e,t,n){},d6a8:function(e,t,n){},e32a:function(e,t,n){"use strict";n("7f0c")},f0d4:function(e,t,n){"use strict";n("d6a8")},f498:function(e,t,n){}});