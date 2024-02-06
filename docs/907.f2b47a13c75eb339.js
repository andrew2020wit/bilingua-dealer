"use strict";(self.webpackChunkangular_bilingua=self.webpackChunkangular_bilingua||[]).push([[907],{5709:(E,C,a)=>{a.d(C,{j:()=>M});var x=a(5619),g=a(8180),d=a(7772),v=a(5879),u=a(2e3),n=a(957);let M=(()=>{class p{constructor(l,_){this.dbService=l,this.infoService=_,this.examples$=new x.X([]),this.sort=(i,m)=>(i.toDoTimestamp||0)-(m.toDoTimestamp||0),this.dbService.getAll(d.L.FavoriteExamples).pipe((0,g.q)(1)).subscribe(i=>{i.forEach(m=>m.showDetails=!1),i?(i.sort(this.sort),this.examples$.next(i)):this.examples$.next([])})}addExample(l){const _=Date.now(),i={...l,timestamp:_,showDetails:!1};this.dbService.add(d.L.FavoriteExamples,i).pipe((0,g.q)(1)).subscribe();const m=[i,...this.examples$.value];this.examples$.next(m),this.infoService.show("added: "+l.original)}update(l){if(!l?.timestamp||!l.toDoTimestamp)return;const _=this.examples$.value,i=_.find(m=>m.timestamp===l.timestamp);i&&(i.toDoTimestamp=l.toDoTimestamp,i.updateTimestamp=Date.now(),this.dbService.update(d.L.FavoriteExamples,i).pipe((0,g.q)(1)).subscribe(),_.sort(this.sort),this.examples$.next(_))}removeExample(l){if(!l)return;this.dbService.delete(d.L.FavoriteExamples,l).pipe((0,g.q)(1)).subscribe();const _=this.examples$.value.filter(i=>i.timestamp!==l);this.examples$.next(_)}}return p.\u0275fac=function(l){return new(l||p)(v.LFG(u.ys),v.LFG(n.C))},p.\u0275prov=v.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"}),p})()},2907:(E,C,a)=>{a.r(C),a.d(C,{FavoriteExamplesComponent:()=>P});var x=a(6814),g=a(2296),d=a(4408),v=a(5986),u=a(6223),n=a(5879),M=a(5709);function p(e,r){if(1&e&&(n.TgZ(0,"div",22),n._uU(1),n.qZA()),2&e){const t=n.oxw(3).$implicit;n.xp6(1),n.hij(" ",t.transcription," ")}}function O(e,r){if(1&e&&(n.TgZ(0,"div",23),n._uU(1),n.qZA()),2&e){const t=n.oxw(3).$implicit;n.xp6(1),n.hij(" Synonym: ",t.synonym," ")}}function l(e,r){if(1&e&&(n.TgZ(0,"div",24),n._uU(1),n.qZA()),2&e){const t=n.oxw(3).$implicit;n.xp6(1),n.hij(" Antonym: ",t.antonym," ")}}function _(e,r){if(1&e&&(n.TgZ(0,"div",25),n._uU(1),n.qZA()),2&e){const t=n.oxw(3).$implicit;n.xp6(1),n.hij(" ",t.translation," ")}}function i(e,r){if(1&e&&(n.TgZ(0,"div",16),n.YNc(1,p,2,1,"div",17),n.TgZ(2,"div",18),n._uU(3),n.qZA(),n.YNc(4,O,2,1,"div",19),n.YNc(5,l,2,1,"div",20),n.YNc(6,_,2,1,"div",21),n.qZA()),2&e){const t=n.oxw(2).$implicit;n.xp6(1),n.Q6J("ngIf",t.transcription),n.xp6(2),n.hij(" ",t.definition," "),n.xp6(1),n.Q6J("ngIf",t.synonym),n.xp6(1),n.Q6J("ngIf",t.antonym),n.xp6(1),n.Q6J("ngIf",t.translation)}}function m(e,r){if(1&e){const t=n.EpF();n.TgZ(0,"div",7)(1,"div",8)(2,"span",9),n._uU(3),n.ALo(4,"date"),n.qZA(),n.TgZ(5,"button",10),n.NdJ("click",function(){n.CHM(t);const s=n.oxw().$implicit,c=n.oxw();return n.KtG(c.favoriteExamplesService.removeExample(s.timestamp||0))}),n._uU(6," Del "),n.qZA(),n.TgZ(7,"button",11),n.NdJ("click",function(){n.CHM(t);const s=n.oxw().$implicit,c=n.oxw();return n.KtG(c.setToDo(s,0))}),n._uU(8," 0 "),n.qZA(),n.TgZ(9,"button",11),n.NdJ("click",function(){n.CHM(t);const s=n.oxw().$implicit,c=n.oxw();return n.KtG(c.setToDo(s,3))}),n._uU(10," 3 "),n.qZA(),n.TgZ(11,"button",11),n.NdJ("click",function(){n.CHM(t);const s=n.oxw().$implicit,c=n.oxw();return n.KtG(c.setToDo(s,7))}),n._uU(12," 7 "),n.qZA(),n.TgZ(13,"button",11),n.NdJ("click",function(){n.CHM(t);const s=n.oxw().$implicit,c=n.oxw();return n.KtG(c.setToDo(s,30))}),n._uU(14," 30 "),n.qZA(),n.TgZ(15,"span",12),n._uU(16),n.qZA(),n.TgZ(17,"span",13),n._uU(18),n.qZA()(),n.TgZ(19,"div",14),n.NdJ("click",function(){n.CHM(t);const s=n.oxw().$implicit;return n.KtG(s.showDetails=!s.showDetails)}),n._uU(20),n.qZA(),n.YNc(21,i,7,5,"div",15),n.qZA()}if(2&e){const t=n.oxw().$implicit,o=n.oxw();n.ekj("old",t.toDoTimestamp&&t.updateTimestamp&&o.now-t.updateTimestamp>o.oldTime),n.xp6(3),n.Oqu(n.lcZ(4,7,t.toDoTimestamp)),n.xp6(13),n.Oqu(t.partOfSpeech),n.xp6(2),n.Oqu(t.term),n.xp6(2),n.hij(" ",t.original," "),n.xp6(1),n.Q6J("ngIf",t.showDetails)}}function f(e,r){if(1&e&&(n.ynx(0),n.YNc(1,m,22,9,"div",6),n.BQk()),2&e){const t=r.$implicit,o=n.oxw();n.xp6(1),n.Q6J("ngIf",o.showAll||(t.toDoTimestamp||0)<o.now)}}let P=(()=>{class e{constructor(t){this.favoriteExamplesService=t,this.showAll=!1,this.now=Date.now()+864e5,this.oldTime=2592e6,this.timerId=setInterval(()=>{this.now=Date.now()+864e5})}ngOnDestroy(){clearInterval(this.timerId)}trackBy(t,o){return o.timestamp}setToDo(t,o){t.toDoTimestamp=Date.now()+24*o*36e5,this.favoriteExamplesService.update(t)}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(M.j))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-favorite-examples"]],standalone:!0,features:[n.jDz],decls:10,vars:6,consts:[[1,"header"],["mat-button","","color","primary","routerLink","/"],[1,"example-number"],["color","primary",1,"checkbox",3,"ngModel","ngModelChange"],[1,"list"],[4,"ngFor","ngForOf","ngForTrackBy"],["class","example",3,"old",4,"ngIf"],[1,"example"],[1,"example-header"],[1,"time"],["mat-button","","color","warn",3,"click"],["mat-button","","color","primary",3,"click"],[1,"pos"],[1,"term"],[1,"original",3,"click"],["class","description",4,"ngIf"],[1,"description"],["class","transcription",4,"ngIf"],[1,"definition"],["class","synonym",4,"ngIf"],["class","antonym",4,"ngIf"],["class","translation",4,"ngIf"],[1,"transcription"],[1,"synonym"],[1,"antonym"],[1,"translation"]],template:function(t,o){1&t&&(n.TgZ(0,"div",0)(1,"button",1),n._uU(2,"Go Home"),n.qZA(),n.TgZ(3,"span",2),n._uU(4),n.qZA(),n.TgZ(5,"mat-checkbox",3),n.NdJ("ngModelChange",function(c){return o.showAll=c}),n._uU(6,"Show All"),n.qZA()(),n.TgZ(7,"div",4),n.YNc(8,f,2,1,"ng-container",5),n.ALo(9,"async"),n.qZA()),2&t&&(n.xp6(4),n.hij("Example number: ",(null==o.favoriteExamplesService.examples$||null==o.favoriteExamplesService.examples$.value?null:o.favoriteExamplesService.examples$.value.length)||0,""),n.xp6(1),n.Q6J("ngModel",o.showAll),n.xp6(3),n.Q6J("ngForOf",n.lcZ(9,4,o.favoriteExamplesService.examples$))("ngForTrackBy",o.trackBy))},dependencies:[x.ez,x.sg,x.O5,x.Ov,x.uU,g.ot,g.lW,d.rH,v.p9,v.oG,u.u5,u.JJ,u.On],styles:[".list[_ngcontent-%COMP%]{padding:var(--padding-main);max-width:800px;margin:auto}.list[_ngcontent-%COMP%]   .example[_ngcontent-%COMP%]{padding:var(--padding-small);outline:1px solid gray;margin:var(--padding-small)}.list[_ngcontent-%COMP%]   .example.old[_ngcontent-%COMP%]{outline:1px solid red}.list[_ngcontent-%COMP%]   .example[_ngcontent-%COMP%]   .example-header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:var(--padding-main)}.list[_ngcontent-%COMP%]   .example[_ngcontent-%COMP%]   .example-header[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%]{color:gray}.list[_ngcontent-%COMP%]   .example[_ngcontent-%COMP%]   .example-header[_ngcontent-%COMP%]   .pos[_ngcontent-%COMP%]{color:green}.list[_ngcontent-%COMP%]   .example[_ngcontent-%COMP%]   .example-header[_ngcontent-%COMP%]   .term[_ngcontent-%COMP%]{font-weight:700}.list[_ngcontent-%COMP%]   .example[_ngcontent-%COMP%]   .original[_ngcontent-%COMP%]{cursor:pointer;margin-top:var(--padding-small);font-size:22px}.list[_ngcontent-%COMP%]   .example[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{font-size:22px;padding-left:var(--padding-main)}.list[_ngcontent-%COMP%]   .example[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{margin:var(--padding-small) 0}.list[_ngcontent-%COMP%]   .example[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   .definition[_ngcontent-%COMP%]{color:#00008b}.list[_ngcontent-%COMP%]   .example[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   .synonym[_ngcontent-%COMP%]{color:green}.list[_ngcontent-%COMP%]   .example[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   .antonym[_ngcontent-%COMP%]{color:red}.list[_ngcontent-%COMP%]   .example[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   .translation[_ngcontent-%COMP%]{color:gray}"]}),e})()}}]);