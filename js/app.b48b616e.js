(function(e){function t(t){for(var r,a,c=t[0],s=t[1],l=t[2],d=0,f=[];d<c.length;d++)a=c[d],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&f.push(i[a][0]),i[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);u&&u(t);while(f.length)f.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,c=1;c<n.length;c++){var s=n[c];0!==i[s]&&(r=!1)}r&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},i={app:0},o=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var u=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0a12":function(e,t,n){},"39d4":function(e,t,n){"use strict";var r=n("0a12"),i=n.n(r);i.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",{staticClass:"tab"},[n("div",{staticClass:"tab-item",on:{click:function(t){return e.handleButtonClick(0)}}},[n("p",{class:{"--active":0===e.activeTab}},[e._v("editor")])]),n("div",{staticClass:"tab-item",on:{click:function(t){return e.handleButtonClick(1)}}},[n("p",{class:{"--active":1===e.activeTab}},[e._v("preview")])])]),0===e.activeTab?n("div",{staticClass:"editor"},[n("quill-editor",{ref:"myQuillEditor",attrs:{options:e.editorOption},on:{blur:function(t){return e.onEditorBlur(t)},focus:function(t){return e.onEditorFocus(t)},ready:function(t){return e.onEditorReady(t)},change:function(t){return e.textChange(t)}},model:{value:e.content,callback:function(t){e.content=t},expression:"content"}}),n("div",{staticClass:"image-wrapper"},[n("div",{staticClass:"image__inner"},[n("svg",{staticClass:"icon",staticStyle:{width:"18px",height:"18px"},attrs:{version:"1.1",id:"_x32_",xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",viewBox:"0 0 512 512","xml:space":"preserve",opacity:"1"}},[n("path",{staticClass:"st0",attrs:{d:"M0 47.702v416.596h512V47.702H0zm50.881 365.715V98.583h410.238v314.834H50.881z",fill:"#4b4b4b"}}),n("path",{staticClass:"st0",attrs:{d:"M203.438 215.101c19.575 0 35.501-15.926 35.501-35.503 0-19.575-15.926-35.501-35.501-35.501-19.577 0-35.503 15.926-35.503 35.501 0 19.577 15.926 35.503 35.503 35.503zM290.963 202.322c-7.238 0-13.989 3.715-18.055 9.942L231.38 275.85c-3.529 5.404-9.138 8.502-15.392 8.504-6.306 0-11.945-3.14-15.468-8.618-4.058-6.31-10.84-10.076-18.14-10.076-7.298 0-14.08 3.765-18.141 10.076L94.08 384.795h327.623L309.02 212.263c-4.068-6.226-10.817-9.941-18.057-9.941z",fill:"#4b4b4b"}})]),n("input",{attrs:{type:"file"},on:{change:e.onImageChange}})])])],1):e._e(),1===e.activeTab?n("div",{staticClass:"preview"},[n("div",{domProps:{innerHTML:e._s(e.content)}})]):e._e()])},o=[],a=(n("caad"),n("b0c0"),n("d3b7"),n("ac1f"),n("2532"),n("466d"),n("5319"),n("5cc6"),n("9a8c"),n("a975"),n("735e"),n("c1ac"),n("d139"),n("3a7b"),n("d5d6"),n("82f8"),n("e91f"),n("60bd"),n("5f96"),n("3280"),n("3fcc"),n("ca91"),n("25a1"),n("cd26"),n("3c5d"),n("2954"),n("649e"),n("219c"),n("170b"),n("b39a"),n("72f7"),n("96cf"),n("1da1")),c=n("7c8d"),s=n.n(c),l={data:function(){return{content:"",editorOption:{placeholder:"",modules:{toolbar:["bold",{align:"center"},{header:[1,2,3,4,5,6]},"underline","strike",{color:["#fff","#000","#FF0000"]},{background:["#fff","#000","#FF0000"]}],imageResize:!0}},editorIndex:0,activeTab:0}},methods:{handleButtonClick:function(e){this.activeTab=e},onImageChange:function(e){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function n(){var r,i,o,c,l,u;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(r=function(e){for(var t=atob(e.replace(/^.*,/,"")),n=new Uint8Array(t.length),r=0;r<t.length;r++)n[r]=t.charCodeAt(r);try{var i=new Blob([n.buffer],{type:"image/png"})}catch(o){return!1}return i},e.target.files[0]){n.next=3;break}return n.abrupt("return");case 3:if(i=/(.*)(?:\.([^.]+$))/,o=e.target.files[0].name.match(i)[2],c=["jpeg","jpg","png"],c.includes(o)){n.next=9;break}return alert("jpg/.jpeg/.png のファイル形式のみ保存できます。"),n.abrupt("return");case 9:try{l=e.target.files[0],new s.a(l,{quality:.1,maxWidth:600,maxHeight:600,success:function(e){var t=new FileReader;t.onload=function(e){u(e.target.result)},t.readAsDataURL(e)},error:function(e){alert("画像の読み込みに失敗しました"),console.log(e.message)}}),u=function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(n){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(i=r(n)["size"]/1024/1024,!(i>5)){e.next=4;break}throw alert("ファイルのサイズの上限は5MBまでです"),"ファイルのサイズの上限は5MBまでです";case 4:t.$refs.myQuillEditor.quill.insertEmbed(t.editorIndex,"image",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}catch(d){console.log(d),alert("画像の読み込みに失敗しました")}case 10:case"end":return n.stop()}}),n)})))()},textChange:function(){this.editor.getSelection()&&(this.editorIndex=this.editor.getSelection().index),console.log(this.editorIndex)},addImage:function(){console.log(event),this.$refs.myQuillEditor.quill.insertEmbed(this.editorIndex,"image")},onEditorBlur:function(e){console.log("editor blur!",e)},onEditorFocus:function(e){console.log("editor focus!",e),this.editor.getSelection()&&(this.editorIndex=this.editor.getSelection().index),console.log(this.editorIndex)},onEditorReady:function(e){console.log("editor ready!",e)},onEditorChange:function(e){var t=e.quill,n=e.html,r=e.text;console.log("editor change!",t,n,r),this.content=n;var i=t.getLength();console.log(i)},click:function(){console.log(this.content)}},computed:{editor:function(){return this.$refs.myQuillEditor.quill}},mounted:function(){console.log("this is current quill instance object",this.editor)}},u=l,d=(n("39d4"),n("2877")),f=Object(d["a"])(u,i,o,!1,null,"2974676c",null),p=f.exports,g=n("953d"),h=n.n(g),b=(n("a753"),n("8096"),n("14e1"),n("9339")),v=n.n(b),m=n("f318"),y=n.n(m);v.a.register("modules/imageResize",y.a),r["a"].config.productionTip=!1,r["a"].use(h.a),new r["a"]({render:function(e){return e(p)}}).$mount("#app")}});
//# sourceMappingURL=app.b48b616e.js.map