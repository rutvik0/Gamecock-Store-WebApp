(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"6i10":function(t,e,i){"use strict";i.d(e,"a",(function(){return n}));const n={bubbles:{dur:1e3,circles:9,fn:(t,e,i)=>{const n=`${t*e/i-t}ms`,o=2*Math.PI*e/i;return{r:5,style:{top:`${9*Math.sin(o)}px`,left:`${9*Math.cos(o)}px`,"animation-delay":n}}}},circles:{dur:1e3,circles:8,fn:(t,e,i)=>{const n=e/i,o=`${t*n-t}ms`,r=2*Math.PI*n;return{r:5,style:{top:`${9*Math.sin(r)}px`,left:`${9*Math.cos(r)}px`,"animation-delay":o}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(t,e)=>({r:6,style:{left:`${9-9*e}px`,"animation-delay":-110*e+"ms"}})},lines:{dur:1e3,lines:12,fn:(t,e,i)=>({y1:17,y2:29,style:{transform:`rotate(${30*e+(e<6?180:-180)}deg)`,"animation-delay":`${t*e/i-t}ms`}})},"lines-small":{dur:1e3,lines:12,fn:(t,e,i)=>({y1:12,y2:20,style:{transform:`rotate(${30*e+(e<6?180:-180)}deg)`,"animation-delay":`${t*e/i-t}ms`}})}}},KwJk:function(t,e,i){"use strict";i.d(e,"a",(function(){return o})),i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return n})),i.d(e,"d",(function(){return s}));const n=(t,e)=>null!==e.closest(t),o=t=>"string"==typeof t&&t.length>0?{"ion-color":!0,[`ion-color-${t}`]:!0}:void 0,r=t=>{const e={};return(t=>void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(t=>null!=t).map(t=>t.trim()).filter(t=>""!==t):[])(t).forEach(t=>e[t]=!0),e},c=/^[a-z][a-z0-9+\-.]*:/,s=async(t,e,i)=>{if(null!=t&&"#"!==t[0]&&!c.test(t)){const n=document.querySelector("ion-router");if(n)return null!=e&&e.preventDefault(),n.push(t,i)}return!1}},NqGI:function(t,e,i){"use strict";i.d(e,"a",(function(){return n})),i.d(e,"b",(function(){return o}));const n=async(t,e,i,n,o)=>{if(t)return t.attachViewToDom(e,i,o,n);if("string"!=typeof i&&!(i instanceof HTMLElement))throw new Error("framework delegate is missing");const r="string"==typeof i?e.ownerDocument&&e.ownerDocument.createElement(i):i;return n&&n.forEach(t=>r.classList.add(t)),o&&Object.assign(r,o),e.appendChild(r),r.componentOnReady&&await r.componentOnReady(),r},o=(t,e)=>{if(e){if(t)return t.removeViewFromDom(e.parentElement,e);e.remove()}return Promise.resolve()}},"Zr+e":function(t,e,i){"use strict";i.d(e,"a",(function(){return s}));var n=i("XNiG"),o=i("Osjz"),r=i("fXoL"),c=i("tyNb");let s=(()=>{class t{constructor(t){this.router=t,this.eventSubject=new n.a,this.usertype="visitor",this.db=o.firestore(),this.items=[],this.orders=[],this.cart=[];var e=this;this.db.collection("CartOrder").onSnapshot((function(t){e.orders=[],t.forEach((function(t){var i=t.data();e.orders.push({oid:i.oid,uid:i.uid,cart:i.cart,total:i.total,date:i.date,quantity:i.quantity,id:t.id})})),e.publishEvent({foo:"bar"})})),this.db.collection("items").onSnapshot((function(t){console.log("items list changed..."),e.items=[],t.forEach((function(t){var i=t.data();e.items.push({title:i.title,price:i.price,image:i.image,description:i.description,category:i.category,uid:i.uid,id:t.id})})),e.publishEvent({foo:"bar"}),console.log("Items reloaded")})),this.db.collection("cart").onSnapshot((function(t){console.log("cart changed..."),e.cart=[],t.forEach((function(t){var i=t.data();e.cart.push({cost:i.cost,quantity:i.quantity,title:i.title,image:i.image,uid:i.uid,id:t.id})})),e.publishEvent({foo:"bar"}),console.log("Cart reloaded")}))}publishEvent(t){this.eventSubject.next(t)}getObservable(){return this.eventSubject}setUsertype(t){var e=this;this.db.collection("CartOrder").where("uid","==",o.auth().currentUser.uid).onSnapshot((function(t){e.orders=[],t.forEach((function(t){var i=t.data();e.orders.push({oid:i.oid,uid:i.uid,cart:i.cart,total:i.total,date:i.date,quantity:i.quantity,id:t.id})})),e.publishEvent({foo:"bar"})})),this.usertype=t,console.log("usertype set as: "+t),"visitor"==this.usertype?this.db.collection("items").onSnapshot((function(t){console.log("items list changed..........."),e.items=[],t.forEach((function(t){var i=t.data();e.items.push({title:i.title,price:i.price,image:i.image,description:i.description,category:i.category,uid:i.uid,id:t.id})})),e.publishEvent({foo:"bar"}),console.log("Items reloaded")})):this.db.collection("items").where("uid","==",o.auth().currentUser.uid).onSnapshot((function(t){console.log("items list changed..........."),e.items=[],t.forEach((function(t){var i=t.data();e.items.push({title:i.title,price:i.price,image:i.image,description:i.description,category:i.category,uid:i.uid,id:t.id})})),e.publishEvent({foo:"bar"}),console.log("Items reloaded")})),this.db.collection("cart").where("uid","==",o.auth().currentUser.uid).onSnapshot((function(t){console.log("cart changed..."),e.cart=[],t.forEach((function(t){var i=t.data();e.cart.push({cost:i.cost,quantity:i.quantity,title:i.title,image:i.image,uid:i.uid,id:t.id})})),e.publishEvent({foo:"bar"}),console.log("Cart reloaded")}))}getUsertype(){return this.usertype}createItem(t,e,i,n,r){var c=null;null!=o.auth().currentUser?(c=o.auth().currentUser.uid,console.log(c," :****** uid")):console.log(" no user logged in, no item created"),o.firestore().collection("items").add({uid:c,title:t,price:e,category:i,description:r,image:n}).then((function(t){console.log("Document written with ID: ",t.id)})).catch((function(t){console.error("Error adding document: ",t)}))}deleteOrder(t){let e=this;o.firestore().collection("CartOrder").doc(t).delete().then((function(){e.router.navigate(["/tabs/tab2"])})).catch((function(t){console.log("error with removing doc")}))}deleteItem(t){let e=this;o.firestore().collection("items").doc(t).delete().then((function(){e.router.navigate(["/tabs/tab1"])})).catch((function(t){console.error("error with removing doc")}))}addToCart(t,e,i,n,r){o.firestore().collection("cart").add({cost:t,quantity:e,title:i,image:n,uid:r}).then((function(t){console.log("Document written with ID: ",t.id)})).catch((function(t){console.error("Error adding document: ",t)}))}deleteCart(t){let e=this;o.firestore().collection("cart").doc(t).delete().then((function(){e.router.navigate(["/tabs/tab3"])})).catch((function(t){console.error("error with removing doc")}))}placeOrder(t,e,i,n,r,c){o.firestore().collection("CartOrder").add({cart:t,oid:e,uid:i,total:n,date:r,quantity:c}).then((function(t){console.log("Document written with ID: ",t.id)})).catch((function(t){console.error("Error adding document: ",t)}))}updateProduct(t,e){let i=o.firestore();console.log(t),i.collection("items").doc(e).update(t)}}return t.\u0275fac=function(e){return new(e||t)(r.Qb(c.g))},t.\u0275prov=r.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},xgmX:function(t,e,i){"use strict";i.d(e,"a",(function(){return a})),i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return c})),i.d(e,"d",(function(){return s})),i.d(e,"e",(function(){return o}));const n={getEngine(){const t=window;return t.TapticEngine||t.Capacitor&&t.Capacitor.isPluginAvailable("Haptics")&&t.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(t){const e=this.getEngine();if(!e)return;const i=this.isCapacitor()?t.style.toUpperCase():t.style;e.impact({style:i})},notification(t){const e=this.getEngine();if(!e)return;const i=this.isCapacitor()?t.style.toUpperCase():t.style;e.notification({style:i})},selection(){this.impact({style:"light"})},selectionStart(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())}},o=()=>{n.selection()},r=()=>{n.selectionStart()},c=()=>{n.selectionChanged()},s=()=>{n.selectionEnd()},a=t=>{n.impact(t)}}}]);