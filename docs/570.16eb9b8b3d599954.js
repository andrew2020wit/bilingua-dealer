"use strict";(self.webpackChunkangular_bilingua=self.webpackChunkangular_bilingua||[]).push([[570],{1570:(U,g,o)=>{o.r(g),o.d(g,{CreateBilinguaComponent:()=>u});var l,A=o(7582),r=o(6223),_=o(1791),v=o(8180),m=o(6814),p=o(2296),h=o(5986),d=o(5195),f=o(2032),t=o(5879),T=o(463),O=o(4408),y=o(957),Z=o(1839),C=o(9157);const E=["fileInput"];function P(a,i){if(1&a&&(t.TgZ(0,"div",20)(1,"div",21)(2,"div",22),t._uU(3),t.qZA(),t.TgZ(4,"div",23),t._uU(5),t.qZA()(),t.TgZ(6,"div",21)(7,"div",22),t._uU(8),t.qZA(),t.TgZ(9,"div",23),t._uU(10),t.qZA()(),t.TgZ(11,"div",21)(12,"div",22),t._uU(13),t.qZA(),t.TgZ(14,"div",23),t._uU(15),t.qZA()(),t.TgZ(16,"div",21)(17,"div",22),t._uU(18),t.qZA(),t.TgZ(19,"div",23),t._uU(20),t.qZA()()()),2&a){const n=t.oxw();t.xp6(3),t.Oqu(n.originalArray[0]),t.xp6(2),t.Oqu(n.translationArray[0]),t.xp6(3),t.Oqu(n.originalArray[10]),t.xp6(2),t.Oqu(n.translationArray[10]),t.xp6(3),t.Oqu(n.originalArray[100]),t.xp6(2),t.Oqu(n.translationArray[100]),t.xp6(3),t.Oqu(n.originalArray.at(-1)),t.xp6(2),t.Oqu(n.translationArray.at(-1))}}function M(a,i){1&a&&(t.TgZ(0,"div",24),t._uU(1," Both texts must have the same lines number "),t.qZA())}let u=((l=class{constructor(i,n,e,s,c){this.bookService=i,this.router=n,this.cd=e,this.info=s,this.loader=c,this.originalArray=[],this.translationArray=[],this.form=new r.cw({original:new r.NI("",[r.kI.required]),translation:new r.NI("",[r.kI.required]),title:new r.NI("",[r.kI.required])}),this.withoutTranslationCheckBox=new r.NI(!1),this.withoutTranslation=!1}ngOnInit(){this.initWithoutTranslationCheckBox()}openPlainTextFile(){this.fileInput.nativeElement.click()}check(){this.originalArray=this.getArrayFromText(this.form.controls.original.value||""),this.translationArray=this.getArrayFromText(this.form.controls.translation.value||"")}getArrayFromText(i){return i?i.split("\n").map(n=>n.trim().replaceAll("`","'")).filter(n=>n):[]}splitOriginalText(){let i=this.form.controls.original.value;if(!i)return;i=i.replaceAll('"',"`"),i=i.replaceAll("'","`"),i=i.replaceAll(". ",".\n"),i=i.replaceAll("! ","!\n"),i=i.replaceAll("? ","?\n");const n=i.split("\n").map(e=>e.replaceAll(/\s+/g," ").trim()).filter(e=>!!e&&"."!==e);this.form.controls.original.setValue(n.join("\n")),this.check(),this.copy(),this.cd.detectChanges()}removeEmptyLines(){let i=this.form.controls.original.value;if(!i)return;const n=i.split("\n").map(e=>e.replaceAll(/\s+/g," ").trim()).filter(e=>!!e);this.form.controls.original.setValue(n.join("\n")),this.check(),this.copy(),this.cd.detectChanges()}copy(){this.form.controls.original.value&&navigator.clipboard.writeText(this.form.controls.original.value).then(()=>this.info.show("Copied!"))}create(){this.loader.topOn(),this.check(),this.form.controls.title.value?this.originalArray.length?this.withoutTranslation||this.originalArray.length===this.translationArray.length?this.bookService.create$(this.form.controls.title.value,[...this.originalArray],this.withoutTranslation?null:[...this.translationArray]).pipe((0,v.q)(1)).subscribe({next:i=>{this.loader.topOff(),this.router.navigate(["/book",i[0].id])},error:i=>{this.loader.topOff(),console.error(i),this.info.error("saveFragments")}}):this.info.error("this.originalArray.length !== this.translationArray.length"):this.info.error("originalArray is empty"):this.info.error("title is empty")}initWithoutTranslationCheckBox(){this.withoutTranslationCheckBox.valueChanges.pipe((0,_.t)(this)).subscribe(i=>{this.withoutTranslation=!!i,i?this.form.controls.translation.removeValidators([r.kI.required]):this.form.controls.translation.setValidators([r.kI.required]),this.form.controls.translation.updateValueAndValidity(),this.cd.detectChanges()})}readFile(i){console.log("readFile");const n=i?.target?.files[0];if(n){const e=new FileReader;e.onload=s=>{const c=s?.target?.result;console.log("result",c),c&&this.form.controls.original.setValue(c)},e.readAsText(n)}}}).\u0275fac=function(i){return new(i||l)(t.Y36(T.Z),t.Y36(O.F0),t.Y36(t.sBO),t.Y36(y.C),t.Y36(Z.D))},l.\u0275cmp=t.Xpm({type:l,selectors:[["app-create-bilingua"]],viewQuery:function(i,n){if(1&i&&t.Gf(E,5),2&i){let e;t.iGM(e=t.CRH())&&(n.fileInput=e.first)}},standalone:!0,features:[t.jDz],decls:47,vars:14,consts:[[1,"component-content"],[1,"header"],[1,"go-home"],["mat-button","","color","primary","routerLink","/"],[1,"title"],[1,"space"],[1,"tools"],["mat-button","","color","primary",3,"click"],["mat-button","","color","primary",3,"disabled","click"],[3,"formControl"],["class","control-block",4,"ngIf"],["class","error",4,"ngIf"],[1,"lines"],["appearance","outline",1,"book-title"],["matInput","",3,"formControl"],[1,"main"],["appearance","outline",1,"original"],["appearance","outline",1,"translation"],["type","file",1,"hidden-file-input",3,"change"],["fileInput",""],[1,"control-block"],[1,"control-row"],[1,"original"],[1,"translation"],[1,"error"]],template:function(i,n){1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"button",3),t._uU(4,"go Home"),t.qZA()(),t.TgZ(5,"div",4)(6,"h1"),t._uU(7,"Create bilingua"),t.qZA()(),t._UZ(8,"div",5),t.qZA(),t.TgZ(9,"div",6)(10,"button",7),t.NdJ("click",function(){return n.openPlainTextFile()}),t._uU(11," Open original text book (only plain text) "),t.qZA()(),t.TgZ(12,"div",6)(13,"button",7),t.NdJ("click",function(){return n.check()}),t._uU(14," Check "),t.qZA(),t.TgZ(15,"button",8),t.NdJ("click",function(){return n.create()}),t._uU(16," Create Bilingua "),t.qZA(),t.TgZ(17,"mat-checkbox",9),t._uU(18," Without translation "),t.qZA()(),t.TgZ(19,"div",6)(20,"button",8),t.NdJ("click",function(){return n.splitOriginalText()}),t._uU(21," Split original text "),t.qZA(),t.TgZ(22,"button",8),t.NdJ("click",function(){return n.removeEmptyLines()}),t._uU(23," Remove empty lines "),t.qZA(),t.TgZ(24,"button",8),t.NdJ("click",function(){return n.copy()}),t._uU(25," Copy original text "),t.qZA()(),t.YNc(26,P,21,8,"div",10),t.YNc(27,M,2,0,"div",11),t.TgZ(28,"mat-card",12),t._uU(29),t.qZA(),t.TgZ(30,"mat-form-field",13)(31,"mat-label"),t._uU(32,"Books Title"),t.qZA(),t._UZ(33,"input",14),t.qZA(),t.TgZ(34,"div",15)(35,"mat-form-field",16)(36,"mat-label"),t._uU(37,"Original text"),t.qZA(),t.TgZ(38,"textarea",14),t._uU(39," "),t.qZA()(),t.TgZ(40,"mat-form-field",17)(41,"mat-label"),t._uU(42,"Translation text"),t.qZA(),t.TgZ(43,"textarea",14),t._uU(44," "),t.qZA()()()(),t.TgZ(45,"input",18,19),t.NdJ("change",function(s){return n.readFile(s)}),t.qZA()),2&i&&(t.xp6(15),t.Q6J("disabled",n.form.invalid),t.xp6(2),t.Q6J("formControl",n.withoutTranslationCheckBox),t.xp6(3),t.Q6J("disabled",!(null!=n.form.controls.original.value&&n.form.controls.original.value.length)),t.xp6(2),t.Q6J("disabled",!(null!=n.form.controls.original.value&&n.form.controls.original.value.length)),t.xp6(2),t.Q6J("disabled",!(null!=n.form.controls.original.value&&n.form.controls.original.value.length)),t.xp6(2),t.Q6J("ngIf",n.form.valid),t.xp6(1),t.Q6J("ngIf",n.originalArray.length!==n.translationArray.length),t.xp6(1),t.ekj("error",n.originalArray.length!==n.translationArray.length),t.xp6(1),t.AsE(" Lines: ",n.originalArray.length," | ",n.translationArray.length," "),t.xp6(4),t.Q6J("formControl",n.form.controls.title),t.xp6(5),t.Q6J("formControl",n.form.controls.original),t.xp6(5),t.Q6J("formControl",n.form.controls.translation))},dependencies:[m.ez,m.O5,r.u5,r.Fj,r.JJ,p.ot,p.lW,h.p9,h.oG,d.QW,d.a8,f.c,f.Nt,C.KE,C.hX,r.UX,r.oH],styles:[".component-content[_ngcontent-%COMP%]{padding:var(--padding-main)}.component-content[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:var(--padding-large)}.component-content[_ngcontent-%COMP%]   .book-title[_ngcontent-%COMP%]{display:flex;width:100%}.component-content[_ngcontent-%COMP%]   .control-row[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 2fr}.component-content[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%]{color:red}.component-content[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;gap:8px}.component-content[_ngcontent-%COMP%]   .lines[_ngcontent-%COMP%]{padding:var(--padding-small);margin:16px 0}.component-content[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{min-height:800px}.component-content[_ngcontent-%COMP%]   .space[_ngcontent-%COMP%]{flex:1}.hidden-file-input[_ngcontent-%COMP%]{display:none}"],changeDetection:0}),l);u=(0,A.gn)([(0,_.c)()],u)}}]);