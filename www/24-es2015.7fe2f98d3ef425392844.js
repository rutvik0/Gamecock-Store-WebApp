(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{T9iC:function(e,t,o){"use strict";o.r(t),o.d(t,"SignupPageModule",(function(){return p}));var n=o("ofXK"),i=o("3Pt+"),s=o("TEn/"),r=o("tyNb"),c=o("mrSG"),a=o("Osjz"),l=o("fXoL");const u=[{path:"",component:(()=>{class e{constructor(e,t){this.router=e,this.toastController=t,this.user={email:"",password:"",type:!1},this.acc="Visitor",this.imgfile="/assets/white.png"}ngOnInit(){}presentToast(){return Object(c.a)(this,void 0,void 0,(function*(){(yield this.toastController.create({color:"success",message:"Account Created! Login to get started",position:"top",duration:2e3})).present()}))}signup(){console.log(this.user.email+"  "+this.user.password);var e=this.user.email,t=this.user.password;if(1==this.user.type)var o="owner";else o="visitor";var n=this;a.auth().createUserWithEmailAndPassword(e,t).catch((function(e){console.log(e);var t=e.code;console.log(e.message),t.length>0?console.log("Failed"):console.log("signup ok")})).then((function(e){var t=a.auth().currentUser;a.firestore().collection("usertype").add({uid:t.uid,usertype:o}).then((function(e){console.log("usetype written with ID: ",e.id)})).catch((function(e){console.error("Error adding document: ",e)})),console.log("finished creating account"),console.log(t.uid),n.presentToast(),n.router.navigate(["/login"])})),i.i.arguments.reset()}accType(){this.acc=0==this.user.type?"Owner":"Visitor"}}return e.\u0275fac=function(t){return new(t||e)(l.Jb(r.g),l.Jb(s.L))},e.\u0275cmp=l.Db({type:e,selectors:[["app-signup"]],decls:25,vars:5,consts:[["mode","ios"],["slot","start"],[1,"ion-padding"],[3,"src"],["color","primary","position","floating"],["type","text","required","",3,"ngModel","ngModelChange"],["color","primary"],[3,"ngModel","ngModelChange","click"],["expand","block","type","submit",1,"submit-btn",3,"click"]],template:function(e,t){1&e&&(l.Mb(0,"ion-header"),l.Mb(1,"ion-toolbar",0),l.Mb(2,"ion-title"),l.hc(3,"Signup"),l.Lb(),l.Mb(4,"ion-buttons",1),l.Kb(5,"ion-back-button"),l.Lb(),l.Lb(),l.Lb(),l.Mb(6,"ion-content",2),l.Kb(7,"ion-img",3),l.Mb(8,"ion-item"),l.Mb(9,"ion-label",4),l.hc(10,"Email"),l.Lb(),l.Mb(11,"ion-input",5),l.Ub("ngModelChange",(function(e){return t.user.email=e})),l.Lb(),l.Lb(),l.Mb(12,"ion-item"),l.Mb(13,"ion-label",4),l.hc(14,"Password"),l.Lb(),l.Mb(15,"ion-input",5),l.Ub("ngModelChange",(function(e){return t.user.password=e})),l.Lb(),l.Lb(),l.Mb(16,"ion-item"),l.Mb(17,"ion-label",6),l.hc(18," Seller Account?"),l.Lb(),l.Mb(19,"ion-toggle",7),l.Ub("ngModelChange",(function(e){return t.user.type=e}))("click",(function(){return t.accType()})),l.Lb(),l.Lb(),l.Mb(20,"ion-item"),l.Mb(21,"ion-label",6),l.hc(22),l.Lb(),l.Lb(),l.Mb(23,"ion-button",8),l.Ub("click",(function(){return t.signup()})),l.hc(24,"Sign up"),l.Lb(),l.Lb()),2&e&&(l.zb(7),l.bc("src",t.imgfile),l.zb(4),l.bc("ngModel",t.user.email),l.zb(4),l.bc("ngModel",t.user.password),l.zb(4),l.bc("ngModel",t.user.type),l.zb(3),l.ic(" Account type set to: ",t.acc," "))},directives:[s.i,s.D,s.B,s.g,s.d,s.e,s.h,s.k,s.m,s.p,s.l,s.K,i.k,i.g,i.i,s.C,s.b,s.f],styles:[""]}),e})()}];let b=(()=>{class e{}return e.\u0275mod=l.Hb({type:e}),e.\u0275inj=l.Gb({factory:function(t){return new(t||e)},imports:[[r.i.forChild(u)],r.i]}),e})(),p=(()=>{class e{}return e.\u0275mod=l.Hb({type:e}),e.\u0275inj=l.Gb({factory:function(t){return new(t||e)},imports:[[n.b,i.e,s.E,b]]}),e})()}}]);