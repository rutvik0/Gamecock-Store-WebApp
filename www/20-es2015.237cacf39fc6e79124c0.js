(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"gp+k":function(t,e,o){"use strict";o.r(e),o.d(e,"AddProductPageModule",(function(){return h}));var i=o("ofXK"),r=o("3Pt+"),n=o("TEn/"),c=o("tyNb"),a=o("mrSG"),s=o("Osjz"),b=o("fXoL"),d=o("Zr+e"),l=o("a/9d"),u=o("FAH8");const m=[{path:"",component:(()=>{class t{constructor(t,e,o,i,r,n){this.router=t,this.formBuilder=e,this.itemService=o,this.toastController=i,this.camera=r,this.file=n,this.randomId=Math.random().toString(36).substr(2,5),this.addPicId="thumb_"+this.randomId,this.downloadURL=[]}ngOnInit(){this.new_item_form=this.formBuilder.group({title:new r.b("",r.l.required),price:new r.b("",r.l.required),category:new r.b("",r.l.required),description:new r.b("",r.l.required)})}createItem(t){var e=this;s.storage().ref().child(this.addPicId).getDownloadURL().then((function(o){var i=o;null==i&&(i="/assets/default.png"),e.itemService.createItem(t.title,t.price,t.category,i,t.description)})),this.new_item_form.reset(),this.goBack(),this.presentToast()}presentToast(){return Object(a.a)(this,void 0,void 0,(function*(){(yield this.toastController.create({color:"success",message:"Item Added Successfully",position:"top",duration:2e3})).present()}))}goBack(){this.router.navigate(["/tabs/tab1"])}pickImage(){return Object(a.a)(this,void 0,void 0,(function*(){try{const t={quality:50,destinationType:this.camera.DestinationType.DATA_URL,encodingType:this.camera.EncodingType.JPEG,mediaType:this.camera.MediaType.PICTURE},e=`data:image/jpeg;base64,${yield this.camera.getPicture(t)}`;s.storage().ref(this.randomId).putString(e,"data_url"),setTimeout(()=>{this.showImage()},2e3)}catch(t){console.error(t)}}))}showImage(){s.storage().ref().child(this.randomId).getDownloadURL().then((function(t){var e=t;document.querySelector("img").src=e}))}}return t.\u0275fac=function(e){return new(e||t)(b.Jb(c.g),b.Jb(r.a),b.Jb(d.a),b.Jb(n.L),b.Jb(l.a),b.Jb(u.a))},t.\u0275cmp=b.Db({type:t,selectors:[["app-add-product"]],decls:35,vars:2,consts:[["mode","ios"],["slot","start"],[1,"ion-padding"],["expand","block",3,"click"],["src","test","onerror","this.src = '/assets/default.png'"],[3,"formGroup","submit"],["color","primary","position","floating"],["type","text","formControlName","title","required",""],["type","number","formControlName","price","required",""],["color","primary","formControlName","category","placeholder","Select One"],["value","Toy"],["value","Food"],["value","Drink"],["formControlName","description"],["expand","block","type","submit",1,"submit-btn",3,"disabled","click"]],template:function(t,e){1&t&&(b.Mb(0,"ion-header"),b.Mb(1,"ion-toolbar",0),b.Mb(2,"ion-title"),b.hc(3,"Add New Product"),b.Lb(),b.Mb(4,"ion-buttons",1),b.Kb(5,"ion-back-button"),b.Lb(),b.Lb(),b.Lb(),b.Mb(6,"ion-content",2),b.Mb(7,"ion-button",3),b.Ub("click",(function(){return e.pickImage()})),b.hc(8,"Take Picture"),b.Lb(),b.Kb(9,"img",4),b.Mb(10,"form",5),b.Ub("submit",(function(){return e.createItem(e.new_item_form.value)})),b.Mb(11,"ion-item"),b.Mb(12,"ion-label",6),b.hc(13," Product Title "),b.Lb(),b.Kb(14,"ion-input",7),b.Lb(),b.Mb(15,"ion-item"),b.Mb(16,"ion-label",6),b.hc(17," Product Price (numbers only) "),b.Lb(),b.Kb(18,"ion-input",8),b.Lb(),b.Mb(19,"ion-item"),b.Mb(20,"ion-label"),b.hc(21,"Product Category"),b.Lb(),b.Mb(22,"ion-select",9),b.Mb(23,"ion-select-option",10),b.hc(24,"Toy"),b.Lb(),b.Mb(25,"ion-select-option",11),b.hc(26,"Food"),b.Lb(),b.Mb(27,"ion-select-option",12),b.hc(28,"Drink"),b.Lb(),b.Lb(),b.Lb(),b.Mb(29,"ion-item"),b.Mb(30,"ion-label",6),b.hc(31,"Product Description"),b.Lb(),b.Kb(32,"ion-textarea",13),b.Lb(),b.Mb(33,"ion-button",14),b.Ub("click",(function(){return e.goBack()})),b.hc(34,"Create"),b.Lb(),b.Lb(),b.Lb()),2&t&&(b.zb(10),b.bc("formGroup",e.new_item_form),b.zb(23),b.bc("disabled",!e.new_item_form.valid))},directives:[n.i,n.D,n.B,n.g,n.d,n.e,n.h,n.f,r.m,r.h,r.d,n.m,n.p,n.l,n.K,r.g,r.c,r.k,n.H,n.t,n.J,n.u,n.z],styles:[""]}),t})()}];let p=(()=>{class t{}return t.\u0275mod=b.Hb({type:t}),t.\u0275inj=b.Gb({factory:function(e){return new(e||t)},imports:[[c.i.forChild(m)],c.i]}),t})(),h=(()=>{class t{}return t.\u0275mod=b.Hb({type:t}),t.\u0275inj=b.Gb({factory:function(e){return new(e||t)},imports:[[i.b,r.e,n.E,r.j,p]]}),t})()}}]);