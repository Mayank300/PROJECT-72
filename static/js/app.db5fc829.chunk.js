(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{176:function(t,e,n){"use strict";n.d(e,"a",(function(){return Y}));var r=n(4),a=n.n(r),o=n(5),i=n.n(o),c=n(6),u=n.n(c),l=n(9),s=n.n(l),f=n(3),p=n.n(f),h=n(1),d=n.n(h),m=n(12),y=n(52),g=n(50),x=n(252),b=n(76),v=n(13),R=n(41),S=n(126),C=n(161),E=n(251),k=n(175).a.initializeApp({apiKey:"AIzaSyCLP52Pq_ef8JJihO4bFpAzkgihxfKaNXc",authDomain:"storyhub-6067b.firebaseapp.com",databaseURL:"https://storyhub-6067b.firebaseio.com",projectId:"storyhub-6067b",storageBucket:"storyhub-6067b.appspot.com",messagingSenderId:"610126553911",appId:"1:610126553911:web:c7526b69cec4be364ab0b2"}).firestore();function w(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=p()(t);if(e){var a=p()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return s()(this,n)}}var T={uri:"https://wallpapercave.com/wp/wp2297884.jpg"},I=function(t){u()(n,t);var e=w(n);function n(t){var r;return a()(this,n),(r=e.call(this,t)).submitStory=function(){k.collection("writestory").add({title:r.state.title,author:r.state.author,content:r.state.content}),r.setState({title:"",author:"",content:""})},r.state={title:"",author:"",content:""},r}return i()(n,[{key:"render",value:function(){var t=this;return d.a.createElement(v.a,{style:A.container},d.a.createElement(b.a,{source:T,style:A.image},d.a.createElement(C.a,{behavior:"padding",style:A.container},d.a.createElement(R.a,{style:A.headers},"WRITE STORY"),d.a.createElement(E.a,{placeholder:"Story Title",onChangeText:function(e){t.setState({title:e})},placeholderTextColor:"black",value:this.state.title,style:A.textInput}),d.a.createElement(E.a,{placeholder:"Author",onChangeText:function(e){t.setState({author:e})},placeholderTextColor:"black",value:this.state.author,style:A.textInput}),d.a.createElement(E.a,{placeholder:"Write your story",onChangeText:function(e){t.setState({content:e})},placeholderTextColor:"black",value:this.state.content,style:A.textInput,multiline:!0}),d.a.createElement(S.a,{onPress:this.submitStory},d.a.createElement(R.a,{style:A.buttonStyle},"SUBMIT")))))}}]),n}(d.a.Component),A=m.a.create({container:{flex:1,flexDirection:"column"},image:{flex:1,resizeMode:"cover",justifyContent:"center"},textInput:{width:500,marginLeft:"35%",marginBottom:"4%"},headers:{fontWeight:"bold",margin:"50px",fontSize:"40px",fontFamily:"Helvetica",border:"2px solid black",padding:"30px",textAlign:"center",width:"500px",marginLeft:"35%",borderRadius:"20px",color:"orange"},buttonStyle:{backgroundColor:"orange",padding:10,margin:10,width:120,height:50,borderRadius:"20px",textAlign:"center",justifyContent:"center",marginLeft:"45%",fontSize:"25px"}});function j(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=p()(t);if(e){var a=p()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return s()(this,n)}}var z={uri:"https://miro.medium.com/max/4574/1*b1T9PtMK3bxboKvnSctNmg.jpeg"},D=function(t){u()(n,t);var e=j(n);function n(){return a()(this,n),e.apply(this,arguments)}return i()(n,[{key:"render",value:function(){return d.a.createElement(v.a,null,d.a.createElement(b.a,{ImageBackground:!0,source:z,style:O.image},d.a.createElement(R.a,{style:O.headers},"READ STORY")))}}]),n}(d.a.Component),O=m.a.create({image:{flex:1,resizeMode:"cover",justifyContent:"center",height:"100vh"},headers:{fontWeight:"bold",marginTop:"15px",fontSize:"40px",fontFamily:"Helvetica",border:"4px solid black",padding:"20px",textAlign:"center",width:"500px",marginLeft:"670px",borderRadius:"20px",color:"pink"}});function L(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=p()(t);if(e){var a=p()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return s()(this,n)}}var P={uri:"https://mir-s3-cdn-cf.behance.net/project_modules/1400/3bf09552415479.59106033e0bf2.jpg"},B=function(t){u()(n,t);var e=L(n);function n(){return a()(this,n),e.apply(this,arguments)}return i()(n,[{key:"render",value:function(){return d.a.createElement(v.a,{style:W.container},d.a.createElement(b.a,{source:P,style:W.image},d.a.createElement(R.a,{style:W.headers},"PUBLISH YOUR STORY OR YOU CAN READ A STORY")))}}]),n}(d.a.Component),W=m.a.create({container:{flex:1,flexDirection:"column"},image:{flex:1,resizeMode:"cover",justifyContent:"center"},textInput:{width:500,marginLeft:"35%",marginBottom:"4%"},headers:{fontWeight:"bold",margin:"50px",fontSize:"50px",fontFamily:"Helvetica",border:"5px solid black",padding:"30px",textAlign:"center",width:"800px",marginLeft:"30%",borderRadius:"20px",color:"#07fff8"},buttonStyle:{backgroundColor:"orange",padding:10,margin:10,width:120,height:50,borderRadius:"20px",textAlign:"center",justifyContent:"center",marginLeft:"45%",fontSize:"25px"},buttonText:{fontSize:30},check:{fontSize:30}});function H(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=p()(t);if(e){var a=p()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return s()(this,n)}}var Y=function(t){u()(n,t);var e=H(n);function n(){return a()(this,n),e.apply(this,arguments)}return i()(n,[{key:"render",value:function(){return d.a.createElement(N,null)}}]),n}(d.a.Component),M=Object(x.a)({HomeScreen:{screen:B},WriteStory:{screen:I},ReadStory:{screen:D}},{defaultNavigationOptions:function(t){var e=t.navigation;return{tabBarIcon:function(){var t=e.state.routeName;return"HomeScreen"===t?d.a.createElement(y.a,{style:{width:32,height:32},source:n(235)}):"WriteStory"===t?d.a.createElement(y.a,{style:{width:32,height:32},source:n(236)}):"ReadStory"===t?d.a.createElement(y.a,{style:{width:32,height:32},source:n(237)}):void 0}}}}),N=Object(g.createAppContainer)(M);m.a.create({container:{flex:1,backgroundColor:"#fff",alignItems:"center",justifyContent:"center"}})},177:function(t,e,n){t.exports=n(239)},235:function(t,e,n){t.exports=n.p+"static/media/home.64ac6f4d.png"},236:function(t,e,n){t.exports=n.p+"static/media/write.85de73b4.png"},237:function(t,e,n){t.exports=n.p+"static/media/read.bab2041c.png"}},[[177,1,2]]]);
//# sourceMappingURL=app.db5fc829.chunk.js.map