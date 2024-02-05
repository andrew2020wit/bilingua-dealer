"use strict";(self.webpackChunkangular_bilingua=self.webpackChunkangular_bilingua||[]).push([[907],{5709:(O,m,o)=>{o.d(m,{j:()=>x});var r=o(5619),l=o(8180),_=o(7772),n=o(5879),d=o(2e3),s=o(957);let x=(()=>{class c{constructor(i,p){this.dbService=i,this.infoService=p,this.examples$=new r.X([]),this.dbService.getAll(_.L.FavoriteExamples).pipe((0,l.q)(1)).subscribe(e=>{e?(e.sort((a,t)=>(a.timestamp||0)-(t.timestamp||0)),this.examples$.next(e)):this.examples$.next([])})}addExample(i){const p=Date.now(),e={...i,timestamp:p,showDetails:!1};this.dbService.add(_.L.FavoriteExamples,e).pipe((0,l.q)(1)).subscribe();const a=[...this.examples$.value,e];this.examples$.next(a),this.infoService.show("added: "+i.original)}removeExample(i){if(!i)return;this.dbService.delete(_.L.FavoriteExamples,i).pipe((0,l.q)(1)).subscribe();const p=this.examples$.value.filter(e=>e.timestamp!==i);this.examples$.next(p)}}return c.\u0275fac=function(i){return new(i||c)(n.LFG(d.ys),n.LFG(s.C))},c.\u0275prov=n.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"}),c})()},2907:(O,m,o)=>{o.r(m),o.d(m,{FavoriteExamplesComponent:()=>p});var r=o(6814),l=o(2296),_=o(4408),n=o(5879),d=o(5709);function s(e,a){if(1&e&&(n.TgZ(0,"div",17),n._uU(1),n.qZA()),2&e){const t=n.oxw(2).$implicit;n.xp6(1),n.hij(" Synonym: ",t.synonym," ")}}function x(e,a){if(1&e&&(n.TgZ(0,"div",18),n._uU(1),n.qZA()),2&e){const t=n.oxw(2).$implicit;n.xp6(1),n.hij(" Antonym: ",t.antonym," ")}}function c(e,a){if(1&e&&(n.TgZ(0,"div",19),n._uU(1),n.qZA()),2&e){const t=n.oxw(2).$implicit;n.xp6(1),n.hij(" ",t.translation," ")}}function g(e,a){if(1&e&&(n.TgZ(0,"div",12)(1,"div",13),n._uU(2),n.qZA(),n.YNc(3,s,2,1,"div",14),n.YNc(4,x,2,1,"div",15),n.YNc(5,c,2,1,"div",16),n.qZA()),2&e){const t=n.oxw().$implicit;n.xp6(2),n.hij(" ",t.definition," "),n.xp6(1),n.Q6J("ngIf",t.synonym),n.xp6(1),n.Q6J("ngIf",t.antonym),n.xp6(1),n.Q6J("ngIf",t.translation)}}function i(e,a){if(1&e){const t=n.EpF();n.TgZ(0,"div",4)(1,"div",5)(2,"span",6),n._uU(3),n.ALo(4,"date"),n.qZA(),n.TgZ(5,"button",7),n.NdJ("click",function(){const v=n.CHM(t).$implicit,P=n.oxw();return n.KtG(P.favoriteExamplesService.removeExample(v.timestamp||0))}),n._uU(6," Remove "),n.qZA(),n.TgZ(7,"span",8),n._uU(8),n.qZA(),n.TgZ(9,"span",9),n._uU(10),n.qZA()(),n.TgZ(11,"div",10),n.NdJ("click",function(){const v=n.CHM(t).$implicit;return n.KtG(v.showDetails=!v.showDetails)}),n._uU(12),n.qZA(),n.YNc(13,g,6,4,"div",11),n.qZA()}if(2&e){const t=a.$implicit;n.xp6(3),n.Oqu(n.lcZ(4,5,t.timestamp)),n.xp6(5),n.Oqu(t.partOfSpeech),n.xp6(2),n.Oqu(t.term),n.xp6(2),n.hij(" ",t.original," "),n.xp6(1),n.Q6J("ngIf",t.showDetails)}}let p=(()=>{class e{constructor(t){this.favoriteExamplesService=t}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(d.j))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-favorite-examples"]],standalone:!0,features:[n.jDz],decls:6,vars:3,consts:[[1,"header"],["mat-button","","color","primary","routerLink","/"],[1,"list"],["class","example",4,"ngFor","ngForOf"],[1,"example"],[1,"example-header"],[1,"time"],["mat-button","","color","warn",3,"click"],[1,"pos"],[1,"term"],[1,"original",3,"click"],["class","description",4,"ngIf"],[1,"description"],[1,"definition"],["class","synonym",4,"ngIf"],["class","antonym",4,"ngIf"],["class","translation",4,"ngIf"],[1,"synonym"],[1,"antonym"],[1,"translation"]],template:function(t,C){1&t&&(n.TgZ(0,"div",0)(1,"button",1),n._uU(2,"Go Home"),n.qZA()(),n.TgZ(3,"div",2),n.YNc(4,i,14,7,"div",3),n.ALo(5,"async"),n.qZA()),2&t&&(n.xp6(4),n.Q6J("ngForOf",n.lcZ(5,1,C.favoriteExamplesService.examples$)))},dependencies:[r.ez,r.sg,r.O5,r.Ov,r.uU,l.ot,l.lW,_.rH],styles:[".list[_ngcontent-%COMP%]{padding:var(--padding-main);max-width:800px;margin:auto}.list[_ngcontent-%COMP%]   .example[_ngcontent-%COMP%]{padding:var(--padding-small)}.list[_ngcontent-%COMP%]   .example[_ngcontent-%COMP%]   .example-header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:var(--padding-main)}.list[_ngcontent-%COMP%]   .example[_ngcontent-%COMP%]   .example-header[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%]{color:gray}.list[_ngcontent-%COMP%]   .example[_ngcontent-%COMP%]   .example-header[_ngcontent-%COMP%]   .pos[_ngcontent-%COMP%]{color:green}.list[_ngcontent-%COMP%]   .example[_ngcontent-%COMP%]   .example-header[_ngcontent-%COMP%]   .term[_ngcontent-%COMP%]{font-weight:700}.list[_ngcontent-%COMP%]   .example[_ngcontent-%COMP%]   .original[_ngcontent-%COMP%]{cursor:pointer;margin-top:var(--padding-small);font-size:22px}.list[_ngcontent-%COMP%]   .example[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{font-size:22px;padding-left:var(--padding-main)}.list[_ngcontent-%COMP%]   .example[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   .definition[_ngcontent-%COMP%]{color:#00008b}.list[_ngcontent-%COMP%]   .example[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   .synonym[_ngcontent-%COMP%]{color:green}.list[_ngcontent-%COMP%]   .example[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   .antonym[_ngcontent-%COMP%]{color:red}.list[_ngcontent-%COMP%]   .example[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   .translation[_ngcontent-%COMP%]{color:gray}"]}),e})()},957:(O,m,o)=>{o.d(m,{C:()=>_});var r=o(5879),l=o(2939);let _=(()=>{class n{constructor(s){this.snackBar=s}show(s){this.snackBar.open(s,"",{duration:1e3,verticalPosition:"top",panelClass:"info-snack"})}error(s){this.snackBar.open(s,"",{duration:1e3,verticalPosition:"top",panelClass:"error-snack"})}}return n.\u0275fac=function(s){return new(s||n)(r.LFG(l.ux))},n.\u0275prov=r.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()}}]);