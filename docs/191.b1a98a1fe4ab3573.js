"use strict";(self.webpackChunkangular_bilingua=self.webpackChunkangular_bilingua||[]).push([[191],{4191:(O,m,i)=>{i.r(m),i.d(m,{HomeComponent:()=>F});var f=i(5933),p=i(9662),d=i(6814),c=i(2296),k=i(4408),u=i(8180),C=i(5195),t=i(5879),_=i(463),v=i(1839),M=i(957),P=i(9026),x=i(7398);let y=(()=>{class e{constructor(o){this.bookService=o,this.datePipe=new d.uU("en")}import(o){const n=JSON.parse(o);if(n.book?.title&&n.book?.content?.[0]?.original)return this.bookService.import$(n);console.error("!bilinguaJson.book?.title || !bilinguaJson.book?.content?.[0]?.original")}export(o){(0,P.$)(this.bookService.getTitle$(o),this.bookService.getContent$(o),this.bookService.getHeaders$(o),this.bookService.getMarkedItems$(o),this.bookService.getFragments$(o)).pipe((0,u.q)(1),(0,x.U)(n=>({id:n[0].id,title:n[0].title,description:n[0].description,content:n[1].content,headers:n[2]?.headers||[],markedItems:n[3]?.markedItems||[],fragments:n[4]?.fragments||[]}))).subscribe(n=>{const r={...n},a=JSON.stringify({jsonContentDescription:"Bilingua book",book:r});this.download(a,r.title)})}download(o,n){const s=document.createElement("a"),a=new Blob([o],{type:"text/plain"}),h=this.datePipe.transform(new Date,"yyyy-MM-dd");s.href=URL.createObjectURL(a),s.download=n+`.${h}.bilingua.json`,s.click(),s.remove()}}return e.\u0275fac=function(o){return new(o||e)(t.LFG(_.Z))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const w=["fileInput"],S=function(e){return["/edit-book-header",e]},Z=function(e){return["/book",e]};function I(e,l){if(1&e){const o=t.EpF();t.TgZ(0,"div",11)(1,"div",12)(2,"button",13),t.NdJ("click",function(){const s=t.CHM(o).$implicit,a=t.oxw(2);return t.KtG(a.delete(s.id))}),t._uU(3,"Delete"),t.qZA(),t.TgZ(4,"button",14),t.NdJ("click",function(){const s=t.CHM(o).$implicit,a=t.oxw(2);return t.KtG(a.export(s))}),t._uU(5,"Export"),t.qZA(),t.TgZ(6,"button",15),t._uU(7,"Edit Title"),t.qZA()(),t.TgZ(8,"button",16),t._uU(9),t.qZA()()}if(2&e){const o=l.$implicit;t.xp6(6),t.Q6J("routerLink",t.VKq(3,S,o.id)),t.xp6(2),t.Q6J("routerLink",t.VKq(5,Z,o.id)),t.xp6(1),t.hij(" ",o.title," ")}}function B(e,l){if(1&e&&(t.TgZ(0,"mat-card",7)(1,"div",8)(2,"div",9),t.YNc(3,I,10,7,"div",10),t.qZA()()()),2&e){const o=t.oxw();t.xp6(3),t.Q6J("ngForOf",o.booksTitles)}}let A=(()=>{class e{constructor(o,n,r,s,a){this.bookService=o,this.loader=n,this.infoService=r,this.cd=s,this.exportImportService=a,this.booksTitles=[]}ngOnInit(){this.loader.topOn(),this.cd.detectChanges(),this.setTitles()}setTitles(){this.loader.topOn(),this.bookService.getAllTitles$().pipe((0,u.q)(1)).subscribe({next:o=>{this.booksTitles=o,this.booksTitles.sort((n,r)=>(r.lastOpenedTime||0)-(n.lastOpenedTime||0)),this.cd.detectChanges(),this.loader.topOff()},error:o=>{this.loader.topOff(),console.error(o)}})}readFile(o){const n=o?.target?.files[0];if(n){const r=new FileReader;r.onload=s=>{const a=s?.target?.result;if(a){const h=this.exportImportService.import(a);h&&(this.loader.start(),h.pipe((0,u.q)(1)).subscribe(()=>{this.setTitles(),this.loader.stop()}))}},r.readAsText(n)}}delete(o){this.loader.topOn(),this.bookService.delete$(o).pipe((0,u.q)(1)).subscribe({next:()=>{this.infoService.show("Book deleted"),this.setTitles(),this.loader.topOff()},error:n=>{this.infoService.error("Book not deleted"),console.error(n),this.loader.topOff()}})}export(o){this.exportImportService.export(o.id)}importJsonFile(){this.fileInput.nativeElement.click()}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(_.Z),t.Y36(v.D),t.Y36(M.C),t.Y36(t.sBO),t.Y36(y))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-books"]],viewQuery:function(o,n){if(1&o&&t.Gf(w,5),2&o){let r;t.iGM(r=t.CRH())&&(n.fileInput=r.first)}},standalone:!0,features:[t.jDz],decls:11,vars:1,consts:[["class","books-block",4,"ngIf"],[1,"create-import-block"],["mat-button","","color","primary","routerLink","/create",1,"link-item"],["mat-button","","color","primary",1,"link-item",3,"click"],[1,"copyright"],["type","file","accept",".json",1,"hidden-file-input",3,"change"],["fileInput",""],[1,"books-block"],[1,"list-wrapper"],[1,"list"],["class","list-item",4,"ngFor","ngForOf"],[1,"list-item"],[1,"buttons"],["mat-button","","color","warn",3,"click"],["mat-button","","color","primary",3,"click"],["mat-button","","color","primary",3,"routerLink"],["mat-button","","color","primary",1,"title",3,"routerLink"]],template:function(o,n){1&o&&(t.YNc(0,B,4,1,"mat-card",0),t.TgZ(1,"mat-card")(2,"div",1)(3,"button",2),t._uU(4,"Create Bilingua"),t.qZA(),t.TgZ(5,"button",3),t.NdJ("click",function(){return n.importJsonFile()}),t._uU(6,"Import book from json-file"),t.qZA()(),t.TgZ(7,"div",4),t._uU(8," Copyright (c) 2023 Andrii Faurash "),t.qZA()(),t.TgZ(9,"input",5,6),t.NdJ("change",function(s){return n.readFile(s)}),t.qZA()),2&o&&t.Q6J("ngIf",null==n.booksTitles?null:n.booksTitles.length)},dependencies:[d.ez,d.sg,d.O5,C.QW,C.a8,k.rH,c.ot,c.lW],styles:["[_nghost-%COMP%]{width:100%}[_nghost-%COMP%]   .books-block[_ngcontent-%COMP%], [_nghost-%COMP%]   .import-block[_ngcontent-%COMP%], [_nghost-%COMP%]   .create-import-block[_ngcontent-%COMP%]{padding:var(--padding-main);margin-top:var(--padding-main)}[_nghost-%COMP%]   h2[_ngcontent-%COMP%]{width:100%;text-align:center}[_nghost-%COMP%]   .books-block[_ngcontent-%COMP%]   .list-wrapper[_ngcontent-%COMP%]{display:flex;justify-content:center}[_nghost-%COMP%]   .books-block[_ngcontent-%COMP%]   .list-wrapper[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]{width:-moz-fit-content;width:fit-content}@media (max-width: 600px){[_nghost-%COMP%]   .books-block[_ngcontent-%COMP%]   .list-wrapper[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}}[_nghost-%COMP%]   .books-block[_ngcontent-%COMP%]   .list-wrapper[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]{display:flex;gap:8px;width:-moz-fit-content;width:fit-content;margin:var(--padding-small)}@media (max-width: 600px){[_nghost-%COMP%]   .books-block[_ngcontent-%COMP%]   .list-wrapper[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]{flex-direction:column-reverse;align-items:center}}[_nghost-%COMP%]   .books-block[_ngcontent-%COMP%]   .list-wrapper[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{justify-content:start}[_nghost-%COMP%]   .books-block[_ngcontent-%COMP%]   .list-wrapper[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:-moz-fit-content;width:fit-content}[_nghost-%COMP%]   .create-import-block[_ngcontent-%COMP%]{display:flex;justify-content:center;width:100%;box-sizing:border-box}[_nghost-%COMP%]   mat-card[_ngcontent-%COMP%]{margin-top:var(--padding-main)}[_nghost-%COMP%]   .hidden-file-input[_ngcontent-%COMP%]{display:none}[_nghost-%COMP%]   .copyright[_ngcontent-%COMP%]{padding:var(--padding-main);width:100%;box-sizing:border-box;text-align:center;font-size:10px;color:gray}"]}),e})(),F=(()=>{class e{constructor(){this.appVersion="0.908",this.RoutesEnum=f.X,this.appTitle=p.x}goToHomeSite(){window.open("https://github.com/andrew2020wit/bilingua-dealer","_blank")}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-home"]],standalone:!0,features:[t.jDz],decls:8,vars:3,consts:[[1,"home-header"],["mat-button","","color","primary",3,"click"],[1,"app-title"],["mat-button","","color","primary",3,"routerLink"],[1,"books"]],template:function(o,n){1&o&&(t.TgZ(0,"div",0)(1,"button",1),t.NdJ("click",function(){return n.goToHomeSite()}),t._uU(2," About "),t.qZA(),t.TgZ(3,"div",2),t._uU(4),t.qZA(),t.TgZ(5,"button",3),t._uU(6," Settings "),t.qZA()(),t._UZ(7,"app-books",4)),2&o&&(t.xp6(4),t.AsE(" ",n.appTitle," (v ",n.appVersion,") "),t.xp6(1),t.Q6J("routerLink","/"+n.RoutesEnum.Settings))},dependencies:[d.ez,c.ot,c.lW,k.rH,A],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;align-items:center;padding:var(--padding-main)}[_nghost-%COMP%]   .home-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;width:100%}[_nghost-%COMP%]   .home-header[_ngcontent-%COMP%]   .app-title[_ngcontent-%COMP%]{font-size:large;font-weight:500}"]}),e})()},957:(O,m,i)=>{i.d(m,{C:()=>b});var g=i(5879),f=i(2939);let b=(()=>{class p{constructor(c){this.snackBar=c}show(c){this.snackBar.open(c,"",{duration:1e3,verticalPosition:"top",panelClass:"info-snack"})}error(c){this.snackBar.open(c,"",{duration:1e3,verticalPosition:"top",panelClass:"error-snack"})}}return p.\u0275fac=function(c){return new(c||p)(g.LFG(f.ux))},p.\u0275prov=g.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"}),p})()}}]);