"use strict";(self.webpackChunkangular_bilingua=self.webpackChunkangular_bilingua||[]).push([[907],{5709:(E,d,i)=>{i.d(d,{j:()=>C});var r=i(5619),l=i(8180),x=i(4664),t=i(7772),p=i(5879),s=i(2e3),g=i(957);let C=(()=>{class _{constructor(o,c){this.dbService=o,this.infoService=c,this.examples$=new r.X([]),this.dbService.getAll(t.L.FavoriteExamples).pipe((0,l.q)(1)).subscribe(e=>{e?(e.sort((a,n)=>(n.timestamp||0)-(a.timestamp||0)),this.examples$.next(e)):this.examples$.next([])})}addExample(o){const c=Date.now(),e={...o,timestamp:c,showDetails:!1};this.dbService.add(t.L.FavoriteExamples,e).pipe((0,l.q)(1)).subscribe();const a=[e,...this.examples$.value];this.examples$.next(a),this.infoService.show("added: "+o.original)}update(o){if(!o?.timestamp)return;const c=Date.now(),e={...o,timestamp:c,showDetails:!1};this.dbService.delete(t.L.FavoriteExamples,o.timestamp).pipe((0,x.w)(()=>this.dbService.add(t.L.FavoriteExamples,e)),(0,l.q)(1)).subscribe();const a=this.examples$.value.filter(n=>n.timestamp!==c);this.examples$.next([e,...a])}removeExample(o){if(!o)return;this.dbService.delete(t.L.FavoriteExamples,o).pipe((0,l.q)(1)).subscribe();const c=this.examples$.value.filter(e=>e.timestamp!==o);this.examples$.next(c)}}return _.\u0275fac=function(o){return new(o||_)(p.LFG(s.ys),p.LFG(g.C))},_.\u0275prov=p.Yz7({token:_,factory:_.\u0275fac,providedIn:"root"}),_})()},2907:(E,d,i)=>{i.r(d),i.d(d,{FavoriteExamplesComponent:()=>c});var r=i(6814),l=i(2296),x=i(4408),t=i(5879),p=i(5709);function s(e,a){if(1&e&&(t.TgZ(0,"div",19),t._uU(1),t.qZA()),2&e){const n=t.oxw(2).$implicit;t.xp6(1),t.hij(" ",n.transcription," ")}}function g(e,a){if(1&e&&(t.TgZ(0,"div",20),t._uU(1),t.qZA()),2&e){const n=t.oxw(2).$implicit;t.xp6(1),t.hij(" Synonym: ",n.synonym," ")}}function C(e,a){if(1&e&&(t.TgZ(0,"div",21),t._uU(1),t.qZA()),2&e){const n=t.oxw(2).$implicit;t.xp6(1),t.hij(" Antonym: ",n.antonym," ")}}function _(e,a){if(1&e&&(t.TgZ(0,"div",22),t._uU(1),t.qZA()),2&e){const n=t.oxw(2).$implicit;t.xp6(1),t.hij(" ",n.translation," ")}}function u(e,a){if(1&e&&(t.TgZ(0,"div",13),t.YNc(1,s,2,1,"div",14),t.TgZ(2,"div",15),t._uU(3),t.qZA(),t.YNc(4,g,2,1,"div",16),t.YNc(5,C,2,1,"div",17),t.YNc(6,_,2,1,"div",18),t.qZA()),2&e){const n=t.oxw().$implicit;t.xp6(1),t.Q6J("ngIf",n.transcription),t.xp6(2),t.hij(" ",n.definition," "),t.xp6(1),t.Q6J("ngIf",n.synonym),t.xp6(1),t.Q6J("ngIf",n.antonym),t.xp6(1),t.Q6J("ngIf",n.translation)}}function o(e,a){if(1&e){const n=t.EpF();t.TgZ(0,"div",4)(1,"div",5)(2,"span",6),t._uU(3),t.ALo(4,"date"),t.qZA(),t.TgZ(5,"button",7),t.NdJ("click",function(){const v=t.CHM(n).$implicit,O=t.oxw();return t.KtG(O.favoriteExamplesService.removeExample(v.timestamp||0))}),t._uU(6," Remove "),t.qZA(),t.TgZ(7,"button",8),t.NdJ("click",function(){const v=t.CHM(n).$implicit,O=t.oxw();return t.KtG(O.favoriteExamplesService.update(v))}),t._uU(8," Update "),t.qZA(),t.TgZ(9,"span",9),t._uU(10),t.qZA(),t.TgZ(11,"span",10),t._uU(12),t.qZA()(),t.TgZ(13,"div",11),t.NdJ("click",function(){const v=t.CHM(n).$implicit;return t.KtG(v.showDetails=!v.showDetails)}),t._uU(14),t.qZA(),t.YNc(15,u,7,5,"div",12),t.qZA()}if(2&e){const n=a.$implicit;t.xp6(3),t.Oqu(t.lcZ(4,5,n.timestamp)),t.xp6(7),t.Oqu(n.partOfSpeech),t.xp6(2),t.Oqu(n.term),t.xp6(2),t.hij(" ",n.original," "),t.xp6(1),t.Q6J("ngIf",n.showDetails)}}let c=(()=>{class e{constructor(n){this.favoriteExamplesService=n}trackBy(n,m){return m.timestamp}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(p.j))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-favorite-examples"]],standalone:!0,features:[t.jDz],decls:6,vars:4,consts:[[1,"header"],["mat-button","","color","primary","routerLink","/"],[1,"list"],["class","example",4,"ngFor","ngForOf","ngForTrackBy"],[1,"example"],[1,"example-header"],[1,"time"],["mat-button","","color","warn",3,"click"],["mat-button","","color","primary",3,"click"],[1,"pos"],[1,"term"],[1,"original",3,"click"],["class","description",4,"ngIf"],[1,"description"],["class","transcription",4,"ngIf"],[1,"definition"],["class","synonym",4,"ngIf"],["class","antonym",4,"ngIf"],["class","translation",4,"ngIf"],[1,"transcription"],[1,"synonym"],[1,"antonym"],[1,"translation"]],template:function(n,m){1&n&&(t.TgZ(0,"div",0)(1,"button",1),t._uU(2,"Go Home"),t.qZA()(),t.TgZ(3,"div",2),t.YNc(4,o,16,7,"div",3),t.ALo(5,"async"),t.qZA()),2&n&&(t.xp6(4),t.Q6J("ngForOf",t.lcZ(5,2,m.favoriteExamplesService.examples$))("ngForTrackBy",m.trackBy))},dependencies:[r.ez,r.sg,r.O5,r.Ov,r.uU,l.ot,l.lW,x.rH],styles:[".list[_ngcontent-%COMP%]{padding:var(--padding-main);max-width:800px;margin:auto}.list[_ngcontent-%COMP%]   .example[_ngcontent-%COMP%]{padding:var(--padding-small)}.list[_ngcontent-%COMP%]   .example[_ngcontent-%COMP%]   .example-header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:var(--padding-main)}.list[_ngcontent-%COMP%]   .example[_ngcontent-%COMP%]   .example-header[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%]{color:gray}.list[_ngcontent-%COMP%]   .example[_ngcontent-%COMP%]   .example-header[_ngcontent-%COMP%]   .pos[_ngcontent-%COMP%]{color:green}.list[_ngcontent-%COMP%]   .example[_ngcontent-%COMP%]   .example-header[_ngcontent-%COMP%]   .term[_ngcontent-%COMP%]{font-weight:700}.list[_ngcontent-%COMP%]   .example[_ngcontent-%COMP%]   .original[_ngcontent-%COMP%]{cursor:pointer;margin-top:var(--padding-small);font-size:22px}.list[_ngcontent-%COMP%]   .example[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{font-size:22px;padding-left:var(--padding-main)}.list[_ngcontent-%COMP%]   .example[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   .definition[_ngcontent-%COMP%]{color:#00008b}.list[_ngcontent-%COMP%]   .example[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   .synonym[_ngcontent-%COMP%]{color:green}.list[_ngcontent-%COMP%]   .example[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   .antonym[_ngcontent-%COMP%]{color:red}.list[_ngcontent-%COMP%]   .example[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   .translation[_ngcontent-%COMP%]{color:gray}"]}),e})()},957:(E,d,i)=>{i.d(d,{C:()=>x});var r=i(5879),l=i(2939);let x=(()=>{class t{constructor(s){this.snackBar=s}show(s){this.snackBar.open(s,"",{duration:1e3,verticalPosition:"top",panelClass:"info-snack"})}error(s){this.snackBar.open(s,"",{duration:1e3,verticalPosition:"top",panelClass:"error-snack"})}}return t.\u0275fac=function(s){return new(s||t)(r.LFG(l.ux))},t.\u0275prov=r.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);