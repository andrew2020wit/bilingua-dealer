"use strict";(self.webpackChunkangular_bilingua=self.webpackChunkangular_bilingua||[]).push([[190],{7190:(v,u,r)=>{r.r(u),r.d(u,{HomeComponent:()=>B});var _=r(5933),p=r(9662),d=r(6814),a=r(2296),C=r(4408),h=r(8180),f=r(5195),t=r(5879),b=r(1839),O=r(144);let M=(()=>{class n{constructor(o,e){this.loader=o,this.exportImportService=e,this.update=new t.vpe,this.RoutesEnum=_.X}readJSONFile(o){const e=o?.target?.files[0];if(!e)return;const s=new FileReader;s.onload=c=>{const i=c?.target?.result;if(!i)return;const m=this.exportImportService.importJsonText(i);m&&(this.loader.start(),m.pipe((0,h.q)(1)).subscribe(()=>{this.update.emit(),this.loader.stop()}))},s.readAsText(e)}readTxtFile(o){const e=o?.target?.files[0];if(!e)return;const s=new FileReader;s.onload=c=>{const i=c?.target?.result;if(!i)return;const m=this.exportImportService.importTextFile(i);m&&(this.loader.start(),m.pipe((0,h.q)(1)).subscribe(()=>{this.update.emit(),this.loader.stop()}))},s.readAsText(e)}}return n.\u0275fac=function(o){return new(o||n)(t.Y36(b.D),t.Y36(O.U))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-import-book"]],outputs:{update:"update"},standalone:!0,features:[t.jDz],decls:16,vars:1,consts:[[1,"create-import-block"],["mat-button","","color","primary",1,"link-item",3,"click"],["mat-button","","color","primary","routerLink","/create",1,"link-item"],["mat-button","","color","primary",1,"link-item",3,"routerLink"],[1,"copyright"],["type","file","accept",".json",1,"hidden-file-input",3,"change"],["jsonFileInput",""],["type","file","accept",".txt",1,"hidden-file-input",3,"change"],["textFileInput",""]],template:function(o,e){if(1&o){const s=t.EpF();t.TgZ(0,"mat-card")(1,"div",0)(2,"button",1),t.NdJ("click",function(){t.CHM(s);const i=t.MAs(15);return t.KtG(i.click())}),t._uU(3,"Open txt-file"),t.qZA(),t.TgZ(4,"button",2),t._uU(5,"Create Bilingua"),t.qZA(),t.TgZ(6,"button",1),t.NdJ("click",function(){t.CHM(s);const i=t.MAs(13);return t.KtG(i.click())}),t._uU(7,"Import book from json-file"),t.qZA(),t.TgZ(8,"button",3),t._uU(9,"Import Subtitles"),t.qZA()(),t.TgZ(10,"div",4),t._uU(11," Copyright (c) 2023 Andrii Faurash "),t.qZA()(),t.TgZ(12,"input",5,6),t.NdJ("change",function(i){return e.readJSONFile(i)}),t.qZA(),t.TgZ(14,"input",7,8),t.NdJ("change",function(i){return e.readTxtFile(i)}),t.qZA()}2&o&&(t.xp6(8),t.Q6J("routerLink","/"+e.RoutesEnum.SrtToJson))},dependencies:[d.ez,a.ot,a.lW,f.QW,f.a8,C.rH],styles:[".create-import-block[_ngcontent-%COMP%]{padding:var(--padding-main);margin-top:var(--padding-main)}.create-import-block[_ngcontent-%COMP%]{display:flex;justify-content:center;width:100%;box-sizing:border-box}.hidden-file-input[_ngcontent-%COMP%]{display:none}.copyright[_ngcontent-%COMP%]{padding:var(--padding-main);width:100%;box-sizing:border-box;text-align:center;font-size:10px;color:gray}mat-card[_ngcontent-%COMP%]{margin-top:var(--padding-main)}"],changeDetection:0}),n})();var T=r(463),P=r(957);const x=function(n){return["/edit-book-header",n]},y=function(n){return["/book",n]};function Z(n,l){if(1&n){const o=t.EpF();t.TgZ(0,"div",7)(1,"div",8)(2,"button",9),t.NdJ("click",function(){const c=t.CHM(o).$implicit,i=t.oxw(2);return t.KtG(i.delete(c.id))}),t._uU(3,"Delete"),t.qZA(),t.TgZ(4,"button",10),t.NdJ("click",function(){const c=t.CHM(o).$implicit,i=t.oxw(2);return t.KtG(i.export(c))}),t._uU(5,"Export"),t.qZA(),t.TgZ(6,"button",11),t._uU(7,"Edit Title"),t.qZA()(),t.TgZ(8,"button",12),t._uU(9),t.qZA()()}if(2&n){const o=l.$implicit;t.xp6(6),t.Q6J("routerLink",t.VKq(3,x,o.id)),t.xp6(2),t.Q6J("routerLink",t.VKq(5,y,o.id)),t.xp6(1),t.hij(" ",o.title," ")}}function w(n,l){if(1&n&&(t.TgZ(0,"mat-card",3)(1,"div",4)(2,"div",5),t.YNc(3,Z,10,7,"div",6),t.qZA()()()),2&n){const o=t.oxw();t.xp6(3),t.Q6J("ngForOf",o.booksTitles)}}function A(n,l){1&n&&(t.TgZ(0,"mat-card")(1,"div",13)(2,"button",14),t._uU(3,"Auto load demo-book"),t.qZA()()())}let I=(()=>{class n{constructor(o,e,s,c,i){this.bookService=o,this.loader=e,this.infoService=s,this.cd=c,this.exportImportService=i,this.booksTitles=[]}ngOnInit(){this.loader.topOn(),this.cd.detectChanges(),this.setTitles()}setTitles(){this.loader.topOn(),this.bookService.getAllTitles$().pipe((0,h.q)(1)).subscribe({next:o=>{this.booksTitles=o,this.booksTitles.sort((e,s)=>(s.lastOpenedTime||0)-(e.lastOpenedTime||0)),this.cd.detectChanges(),this.loader.topOff()},error:o=>{this.loader.topOff(),console.error(o)}})}delete(o){this.loader.topOn(),this.bookService.delete$(o).pipe((0,h.q)(1)).subscribe({next:()=>{this.infoService.show("Book deleted"),this.setTitles(),this.loader.topOff()},error:e=>{this.infoService.error("Book not deleted"),console.error(e),this.loader.topOff()}})}export(o){this.exportImportService.export(o.id)}update(){this.setTitles()}}return n.\u0275fac=function(o){return new(o||n)(t.Y36(T.Z),t.Y36(b.D),t.Y36(P.C),t.Y36(t.sBO),t.Y36(O.U))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-books"]],standalone:!0,features:[t.jDz],decls:3,vars:2,consts:[["class","books-block",4,"ngIf"],[4,"ngIf"],[3,"update"],[1,"books-block"],[1,"list-wrapper"],[1,"list"],["class","list-item",4,"ngFor","ngForOf"],[1,"list-item"],[1,"buttons"],["mat-button","","color","warn",3,"click"],["mat-button","","color","primary",3,"click"],["mat-button","","color","primary",3,"routerLink"],["mat-button","","color","primary",1,"title",3,"routerLink"],[1,"create-import-block"],["mat-button","","color","primary","routerLink","/auto-load-demo-book",1,"link-item"]],template:function(o,e){1&o&&(t.YNc(0,w,4,1,"mat-card",0),t.YNc(1,A,4,0,"mat-card",1),t.TgZ(2,"app-import-book",2),t.NdJ("update",function(){return e.update()}),t.qZA()),2&o&&(t.Q6J("ngIf",null==e.booksTitles?null:e.booksTitles.length),t.xp6(1),t.Q6J("ngIf",!(null!=e.booksTitles&&e.booksTitles.length)))},dependencies:[d.ez,d.sg,d.O5,f.QW,f.a8,C.rH,a.ot,a.lW,M],styles:["[_nghost-%COMP%]{width:100%}[_nghost-%COMP%]   .books-block[_ngcontent-%COMP%], [_nghost-%COMP%]   .import-block[_ngcontent-%COMP%]{padding:var(--padding-main);margin-top:var(--padding-main)}[_nghost-%COMP%]   h2[_ngcontent-%COMP%]{width:100%;text-align:center}[_nghost-%COMP%]   .books-block[_ngcontent-%COMP%]   .list-wrapper[_ngcontent-%COMP%]{display:flex;justify-content:center}[_nghost-%COMP%]   .books-block[_ngcontent-%COMP%]   .list-wrapper[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]{width:-moz-fit-content;width:fit-content}@media (max-width: 600px){[_nghost-%COMP%]   .books-block[_ngcontent-%COMP%]   .list-wrapper[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}}[_nghost-%COMP%]   .books-block[_ngcontent-%COMP%]   .list-wrapper[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]{display:flex;gap:8px;width:-moz-fit-content;width:fit-content;margin:var(--padding-small)}@media (max-width: 600px){[_nghost-%COMP%]   .books-block[_ngcontent-%COMP%]   .list-wrapper[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]{flex-direction:column-reverse;align-items:center}}[_nghost-%COMP%]   .books-block[_ngcontent-%COMP%]   .list-wrapper[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{justify-content:start}[_nghost-%COMP%]   .books-block[_ngcontent-%COMP%]   .list-wrapper[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:-moz-fit-content;width:fit-content}[_nghost-%COMP%]   mat-card[_ngcontent-%COMP%]{margin-top:var(--padding-main)}"]}),n})(),B=(()=>{class n{constructor(){this.appVersion="2.006",this.RoutesEnum=_.X,this.appTitle=p.x}goToHomeSite(){window.open("https://github.com/andrew2020wit/bilingua-dealer","_blank")}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-home"]],standalone:!0,features:[t.jDz],decls:8,vars:3,consts:[[1,"home-header"],["mat-button","","color","primary",3,"click"],[1,"app-title"],["mat-button","","color","primary",3,"routerLink"],[1,"books"]],template:function(o,e){1&o&&(t.TgZ(0,"div",0)(1,"button",1),t.NdJ("click",function(){return e.goToHomeSite()}),t._uU(2," About "),t.qZA(),t.TgZ(3,"div",2),t._uU(4),t.qZA(),t.TgZ(5,"button",3),t._uU(6," Settings "),t.qZA()(),t._UZ(7,"app-books",4)),2&o&&(t.xp6(4),t.AsE(" ",e.appTitle," (v ",e.appVersion,") "),t.xp6(1),t.Q6J("routerLink","/"+e.RoutesEnum.Settings))},dependencies:[d.ez,a.ot,a.lW,C.rH,I],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;align-items:center;padding:var(--padding-main)}[_nghost-%COMP%]   .home-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;width:100%}[_nghost-%COMP%]   .home-header[_ngcontent-%COMP%]   .app-title[_ngcontent-%COMP%]{font-size:large;font-weight:500}"]}),n})()},957:(v,u,r)=>{r.d(u,{C:()=>k});var g=r(5879),_=r(2939);let k=(()=>{class p{constructor(a){this.snackBar=a}show(a){this.snackBar.open(a,"",{duration:1e3,verticalPosition:"top",panelClass:"info-snack"})}error(a){this.snackBar.open(a,"",{duration:1e3,verticalPosition:"top",panelClass:"error-snack"})}}return p.\u0275fac=function(a){return new(a||p)(g.LFG(_.ux))},p.\u0275prov=g.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"}),p})()}}]);