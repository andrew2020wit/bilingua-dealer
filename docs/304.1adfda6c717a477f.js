"use strict";(self.webpackChunkangular_bilingua=self.webpackChunkangular_bilingua||[]).push([[304],{6878:(ne,A,u)=>{u.d(A,{E:()=>L});var d=u(5619),n=u(2572),R=u(8180);function x(E,C){const g=C.index>=0?C.index:E.length+C.index;if(E.slice(g,g+C.pattern.length)!==C.pattern)return null;const m=E.length-(E.slice(0,C.index).length+C.pattern.length);let _=E.slice(0,C.index)+C.replace;return m>0&&(_+=E.slice(-1*m)),_}var I=u(5879),N=u(463);let L=(()=>{class E{constructor(g){this.bookService=g,this.currentDictionaryState$=new d.X(null),this.minimalSearchPattern=2,this.maxNumberOfSearchResults=20,this.morphology={},this.dictionary={},this.morphologyReplaceRules=[],this.dictionaryIsEmpty=!0,this.morphologyIsEmpty=!0,this.searchTerm="",this.currentTerm="",this.terms=[],this.words=[],(0,n.a)([this.bookService.getMorphology$(),this.bookService.getDictionary$(),this.bookService.getMorphologyReplaceRules$()]).pipe((0,R.q)(1)).subscribe(([m,_,y])=>{m?.morphology?(this.morphology=m.morphology,this.morphologyIsEmpty=!1):(this.morphology={},this.morphologyIsEmpty=!0),this.morphologyReplaceRules=y?.morphologyReplaceRules?y.morphologyReplaceRules:[],_?.dictionary?(this.dictionary=_.dictionary,this.terms=Object.keys(this.dictionary),this.dictionaryIsEmpty=!1):(this.dictionary={},this.dictionaryIsEmpty=!0),this.setDictionaryState(null)})}searchTerms(g){return g.length<this.minimalSearchPattern?null:this.terms.filter(m=>m.startsWith(g.toLowerCase())).slice(0,this.maxNumberOfSearchResults)}setTerm(g){this.searchTerm=g,this.currentTerm=g.trim().toLowerCase(),this.words=[],this.setDictionaryState(null),this.morphologyReplaceRules.forEach(_=>{const y=x(this.currentTerm,_);y&&this.getTerm(y)&&this.words.push(y)});let m=this.getTerm(this.currentTerm);if(m)this.setDictionaryState(m);else{if(!this.morphologyIsEmpty){const _=this.morphology[this.currentTerm];if(_?.o&&(m=this.getTerm(_.o),m))return void this.setDictionaryState(m)}for(let _=0;_<this.morphologyReplaceRules.length;_++){const y=x(this.currentTerm,this.morphologyReplaceRules[_]);if(!y)continue;const S=this.getTerm(y);if(S)return this.currentTerm=y,void this.setDictionaryState(S)}}}setDictionaryState(g){g||(this.words=[]),this.currentDictionaryState$.next({currentDictionaryTerm:g,dictionaryIsEmpty:this.dictionaryIsEmpty,searchTerm:this.searchTerm,words:this.words})}getTerm(g){if(!g||this.dictionaryIsEmpty)return null;const m=this.dictionary[g]||null;return m?.articles?.length?m:null}}return E.\u0275fac=function(g){return new(g||E)(I.LFG(N.Z))},E.\u0275prov=I.Yz7({token:E,factory:E.\u0275fac,providedIn:"root"}),E})()},5709:(ne,A,u)=>{u.d(A,{j:()=>E});var d=u(5619),n=u(8180),R=u(2096),x=u(7772),I=u(5879),N=u(2e3),L=u(957);let E=(()=>{class C{constructor(m,_){this.dbService=m,this.infoService=_,this.examples$=new d.X([]),this.sort=(y,S)=>(y.toDoTimestamp||0)-(S.toDoTimestamp||0),this.dbService.getAll(x.L.FavoriteExamples).pipe((0,n.q)(1)).subscribe(y=>{y.forEach(S=>S.showDetails=!1),y?(y.sort(this.sort),this.examples$.next(y)):this.examples$.next([])})}deleteAll(){return this.dbService.clear(x.L.FavoriteExamples)}import(m){const _=JSON.parse(m)?.favoriteExamples;return _?.length?this.dbService.bulkAdd(x.L.FavoriteExamples,_).pipe((0,n.q)(1)):(console.error("!examples?.length"),this.infoService.error("!examples?.length"),(0,R.of)([]))}addExample(m){const _=Date.now(),y={...m,timestamp:_,showDetails:!1};this.dbService.add(x.L.FavoriteExamples,y).pipe((0,n.q)(1)).subscribe();const S=[y,...this.examples$.value];this.examples$.next(S),this.infoService.show("added: "+m.original)}update(m){if(!m?.timestamp||!m.toDoTimestamp)return;const _=this.examples$.value,y=_.find(S=>S.timestamp===m.timestamp);y&&(y.toDoTimestamp=m.toDoTimestamp,y.updateTimestamp=Date.now(),this.dbService.update(x.L.FavoriteExamples,y).pipe((0,n.q)(1)).subscribe(),_.sort(this.sort),this.examples$.next(_))}removeExample(m){if(!m)return;this.dbService.delete(x.L.FavoriteExamples,m).pipe((0,n.q)(1)).subscribe();const _=this.examples$.value.filter(y=>y.timestamp!==m);this.examples$.next(_)}}return C.\u0275fac=function(m){return new(m||C)(I.LFG(N.ys),I.LFG(L.C))},C.\u0275prov=I.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})()},8304:(ne,A,u)=>{u.d(A,{Z:()=>Y});var C,d=u(7582),n=u(5879),R=u(6814),x=u(1791),I=u(2296),N=u(1175),L=u(6878),E=u(5709);const g=["topMarker"];function m(l,h){1&l&&(n.TgZ(0,"div",8),n._uU(1," dictionaryIsEmpty\n"),n.qZA())}function _(l,h){if(1&l){const a=n.EpF();n.TgZ(0,"div",11),n.NdJ("click",function(){const M=n.CHM(a).$implicit,F=n.oxw(2);return n.KtG(F.selectPartOfSpeech(M))}),n._uU(1),n.qZA()}if(2&l){const a=h.$implicit,v=n.oxw(2);n.ekj("selected",v.selectedPartsOfSpeech.includes(a)),n.xp6(1),n.hij(" ",a," ")}}function y(l,h){if(1&l&&(n.TgZ(0,"div",9),n.YNc(1,_,2,3,"div",10),n.qZA()),2&l){const a=n.oxw();n.xp6(1),n.Q6J("ngForOf",a.partsOfSpeech)}}function S(l,h){1&l&&(n.TgZ(0,"span"),n._uU(1," => "),n.qZA())}function re(l,h){if(1&l&&(n.TgZ(0,"span"),n._uU(1),n.YNc(2,S,2,0,"span",5),n.qZA()),2&l){const a=n.oxw();n.xp6(1),n.hij("",a.searchTerm," "),n.xp6(1),n.Q6J("ngIf",null==a.dictionaryTerm?null:a.dictionaryTerm.term)}}function se(l,h){if(1&l&&(n.TgZ(0,"span",18),n._uU(1),n.qZA()),2&l){const a=n.oxw(2).$implicit;n.xp6(1),n.hij(" ",a.transcription," ")}}function J(l,h){if(1&l&&(n.TgZ(0,"span",19),n._uU(1),n.qZA()),2&l){const a=n.oxw(2).$implicit;n.xp6(1),n.hij(" ",a.dictionaryName," ")}}function $(l,h){if(1&l&&(n.TgZ(0,"div",27),n._uU(1),n.qZA()),2&l){const a=n.oxw().$implicit;n.xp6(1),n.hij(" ",a.lexicalUnit," ")}}function w(l,h){if(1&l&&(n.TgZ(0,"div",28),n._uU(1),n.qZA()),2&l){const a=n.oxw().$implicit;n.xp6(1),n.hij(" Synonym: ",a.synonym," ")}}function ge(l,h){if(1&l&&(n.TgZ(0,"div",29),n._uU(1),n.qZA()),2&l){const a=n.oxw().$implicit;n.xp6(1),n.hij(" Antonym: ",a.antonym," ")}}function oe(l,h){if(1&l){const a=n.EpF();n.TgZ(0,"div",33)(1,"div",34),n.NdJ("dblclick",function(){n.CHM(a);const b=n.oxw(5);return n.KtG(b.clickOnWord.emit())}),n.TgZ(2,"button",35),n.NdJ("click",function(b){const F=n.CHM(a).$implicit,z=n.oxw(2).$implicit,le=n.oxw(2).$implicit;return n.oxw().addExample(F,z,le),n.KtG(b.stopPropagation())}),n._UZ(3,"mat-icon",36),n.qZA(),n.TgZ(4,"span"),n._uU(5),n.qZA()(),n.TgZ(6,"div",37),n._uU(7),n.qZA()()}if(2&l){const a=h.$implicit;n.xp6(5),n.hij(" ",a.original," "),n.xp6(2),n.Oqu(a.translation)}}function ie(l,h){if(1&l&&(n.TgZ(0,"div",30)(1,"div",31),n.YNc(2,oe,8,2,"div",32),n.qZA()()),2&l){const a=n.oxw().$implicit;n.xp6(2),n.Q6J("ngForOf",a.examples)}}function ae(l,h){if(1&l){const a=n.EpF();n.TgZ(0,"div",20),n.YNc(1,$,2,1,"div",21),n.TgZ(2,"div",22),n.NdJ("click",function(){const M=n.CHM(a).$implicit;return n.KtG(M.showDetails=!M.showDetails)}),n.TgZ(3,"span",23),n.NdJ("dblclick",function(){n.CHM(a);const b=n.oxw(3);return n.KtG(b.clickOnWord.emit())}),n._uU(4),n.qZA()(),n.YNc(5,w,2,1,"div",24),n.YNc(6,ge,2,1,"div",25),n.YNc(7,ie,3,1,"div",26),n.qZA()}if(2&l){const a=h.$implicit;n.xp6(1),n.Q6J("ngIf",a.lexicalUnit),n.xp6(1),n.ekj("has-examples",a.examples),n.xp6(2),n.hij(" ",a.definition," "),n.xp6(1),n.Q6J("ngIf",a.synonym),n.xp6(1),n.Q6J("ngIf",a.antonym),n.xp6(1),n.Q6J("ngIf",a.showDetails)}}function ce(l,h){if(1&l){const a=n.EpF();n.ynx(0),n.TgZ(1,"div",13),n.YNc(2,se,2,1,"span",14),n.TgZ(3,"span",11),n.NdJ("click",function(){n.CHM(a);const b=n.oxw().$implicit,M=n.oxw();return n.KtG(M.selectPartOfSpeech(b.partOfSpeech))}),n._uU(4),n.qZA(),n.YNc(5,J,2,1,"span",15),n.qZA(),n.TgZ(6,"div",16),n.YNc(7,ae,8,7,"div",17),n.qZA(),n.BQk()}if(2&l){const a=n.oxw().$implicit,v=n.oxw();n.xp6(2),n.Q6J("ngIf",a.transcription),n.xp6(1),n.ekj("selected",v.selectedPartsOfSpeech.includes(a.partOfSpeech)),n.xp6(1),n.hij(" ",a.partOfSpeech," "),n.xp6(1),n.Q6J("ngIf",a.dictionaryName),n.xp6(2),n.Q6J("ngForOf",a.definitions)}}function K(l,h){if(1&l&&(n.TgZ(0,"div",12),n.YNc(1,ce,8,6,"ng-container",5),n.qZA()),2&l){const a=h.$implicit,v=n.oxw();n.xp6(1),n.Q6J("ngIf",!v.selectedPartsOfSpeech.length||v.selectedPartsOfSpeech.includes(a.partOfSpeech))}}function B(l,h){if(1&l){const a=n.EpF();n.TgZ(0,"div",41),n.NdJ("dblclick",function(){n.CHM(a);const b=n.oxw(2);return n.KtG(b.clickOnWord.emit())}),n._uU(1),n.qZA()}if(2&l){const a=h.$implicit;n.xp6(1),n.hij(" ",a," ")}}function O(l,h){if(1&l&&(n.TgZ(0,"div",38)(1,"div",39),n._uU(2,"See also: "),n.qZA(),n.YNc(3,B,2,1,"div",40),n.qZA()),2&l){const a=n.oxw();n.xp6(3),n.Q6J("ngForOf",a.words)}}let Y=((C=class{set term(h){this.dictionaryService.setTerm(h)}constructor(h,a,v){this.cdr=h,this.dictionaryService=a,this.favoriteExamplesService=v,this.clickOnWord=new n.vpe,this.searchTerm="",this.dictionaryIsEmpty=!1,this.dictionaryTerm=null,this.partsOfSpeech=[],this.selectedPartsOfSpeech=[],this.words=[]}selectPartOfSpeech(h){this.selectedPartsOfSpeech.includes(h)?this.selectedPartsOfSpeech=this.selectedPartsOfSpeech.filter(a=>a!==h):this.selectedPartsOfSpeech.push(h)}ngOnInit(){this.dictionaryService.currentDictionaryState$.pipe((0,x.t)(this)).subscribe(h=>{this.searchTerm=h?.searchTerm||"",this.dictionaryTerm=h?.currentDictionaryTerm||null,this.dictionaryIsEmpty=!!h?.dictionaryIsEmpty,this.words=h?.words||[],this.dictionaryTerm?.term&&(this.words=this.words.filter(a=>a!==this.dictionaryTerm?.term)),this.setTerm(this.dictionaryTerm)})}addExample(h,a,v){this.favoriteExamplesService.addExample({definition:a.definition,original:h.original,translation:h.translation||"",synonym:a.synonym||"",antonym:a.antonym||"",partOfSpeech:v.partOfSpeech,term:this.dictionaryTerm?.term||"",transcription:v.transcription||""})}setTerm(h){if(this.selectedPartsOfSpeech=[],this.dictionaryTerm=h,!h)return this.partsOfSpeech=[],void this.cdr.detectChanges();const a=h.articles.map(v=>v.partOfSpeech?.toLowerCase()?.trim()||"").filter(v=>!!v);this.partsOfSpeech=[...new Set(a)],this.topMarker?.nativeElement?.scrollIntoView(),this.cdr.detectChanges()}}).\u0275fac=function(h){return new(h||C)(n.Y36(n.sBO),n.Y36(L.E),n.Y36(E.j))},C.\u0275cmp=n.Xpm({type:C,selectors:[["app-dictionary"]],viewQuery:function(h,a){if(1&h&&n.Gf(g,5),2&h){let v;n.iGM(v=n.CRH())&&(a.topMarker=v.first)}},inputs:{term:"term"},outputs:{clickOnWord:"clickOnWord"},standalone:!0,features:[n.jDz],decls:9,vars:6,consts:[[1,"top-marker"],["topMarker",""],["class","empty-dictionary",4,"ngIf"],["class","parts-of-speech",4,"ngIf"],[1,"header"],[4,"ngIf"],["class","article",4,"ngFor","ngForOf"],["class","words",4,"ngIf"],[1,"empty-dictionary"],[1,"parts-of-speech"],["class","part-of-speech",3,"selected","click",4,"ngFor","ngForOf"],[1,"part-of-speech",3,"click"],[1,"article"],[1,"article-header"],["class","transcription",4,"ngIf"],["class","dictionary",4,"ngIf"],[1,"definitions"],["class","definition",4,"ngFor","ngForOf"],[1,"transcription"],[1,"dictionary"],[1,"definition"],["class","lex-unit",4,"ngIf"],[1,"definition",3,"click"],[3,"dblclick"],["class","synonym",4,"ngIf"],["class","antonym",4,"ngIf"],["class","details",4,"ngIf"],[1,"lex-unit"],[1,"synonym"],[1,"antonym"],[1,"details"],[1,"examples"],["class","example",4,"ngFor","ngForOf"],[1,"example"],[1,"original",3,"dblclick"],["mat-icon-button","","color","primary",3,"click"],["fontIcon","add",1,"icon"],[1,"translation"],[1,"words"],[1,"title"],["class","word",3,"dblclick",4,"ngFor","ngForOf"],[1,"word",3,"dblclick"]],template:function(h,a){if(1&h&&(n._UZ(0,"div",0,1),n.YNc(2,m,2,0,"div",2),n.YNc(3,y,2,1,"div",3),n.TgZ(4,"div",4),n.YNc(5,re,3,2,"span",5),n._uU(6),n.qZA(),n.YNc(7,K,2,1,"div",6),n.YNc(8,O,4,1,"div",7)),2&h){let v;n.xp6(2),n.Q6J("ngIf",a.dictionaryIsEmpty),n.xp6(1),n.Q6J("ngIf",(null==a.partsOfSpeech?null:a.partsOfSpeech.length)&&a.partsOfSpeech.length>1),n.xp6(2),n.Q6J("ngIf",a.searchTerm.trim().toLowerCase()!==(null==a.dictionaryTerm||null==a.dictionaryTerm.term||null==(v=a.dictionaryTerm.term.trim())?null:v.toLowerCase())),n.xp6(1),n.hij(" ",null==a.dictionaryTerm?null:a.dictionaryTerm.term,"\n"),n.xp6(1),n.Q6J("ngForOf",null==a.dictionaryTerm?null:a.dictionaryTerm.articles),n.xp6(1),n.Q6J("ngIf",a.words.length)}},dependencies:[R.ez,R.sg,R.O5,I.ot,I.RK,N.Ps,N.Hw],styles:["[_nghost-%COMP%]{display:block;padding:var(--padding-main);font-size:var(--dictionary-main-font-size)}.parts-of-speech[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.parts-of-speech[_ngcontent-%COMP%]   .part-of-speech[_ngcontent-%COMP%]{cursor:pointer;margin:4px}.parts-of-speech[_ngcontent-%COMP%]   .selected[_ngcontent-%COMP%]{outline:1px solid green}.header[_ngcontent-%COMP%]{font-size:var(--dictionary-header-font-size);font-weight:700}.has-examples[_ngcontent-%COMP%]{cursor:pointer;font-weight:500}.article[_ngcontent-%COMP%]{margin:16px 0}.article[_ngcontent-%COMP%]   .article-header[_ngcontent-%COMP%]{margin:var(--padding-main) 0;line-height:2}.article[_ngcontent-%COMP%]   .article-header[_ngcontent-%COMP%]   .transcription[_ngcontent-%COMP%]{color:#000;margin:4px;padding:4px;background-color:#f9e79f}.article[_ngcontent-%COMP%]   .article-header[_ngcontent-%COMP%]   .dictionary[_ngcontent-%COMP%]{color:#000;margin:4px;padding:4px;background-color:#94ff7d}.article[_ngcontent-%COMP%]   .definition[_ngcontent-%COMP%]{margin:8px 0}.article[_ngcontent-%COMP%]   .definition[_ngcontent-%COMP%]   .lex-unit[_ngcontent-%COMP%]{font-weight:700;font-size:1.2em}.article[_ngcontent-%COMP%]   .definition[_ngcontent-%COMP%]   .synonym[_ngcontent-%COMP%]{color:green;padding-left:var(--padding-small)}.article[_ngcontent-%COMP%]   .definition[_ngcontent-%COMP%]   .antonym[_ngcontent-%COMP%]{color:red;padding-left:var(--padding-small)}.article[_ngcontent-%COMP%]   .definition[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]{padding-left:var(--padding-small)}.article[_ngcontent-%COMP%]   .definition[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .examples[_ngcontent-%COMP%]{padding-left:var(--padding-small);margin:8px 0}.article[_ngcontent-%COMP%]   .definition[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .examples[_ngcontent-%COMP%]   .original[_ngcontent-%COMP%]{display:flex;align-items:center}.article[_ngcontent-%COMP%]   .definition[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .examples[_ngcontent-%COMP%]   .original[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{cursor:pointer}.article[_ngcontent-%COMP%]   .definition[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .examples[_ngcontent-%COMP%]   .translation[_ngcontent-%COMP%]{color:gray;padding-left:var(--padding-large)}.part-of-speech[_ngcontent-%COMP%]{font-weight:700;background-color:wheat;padding:4px;margin:4px 0;cursor:pointer}.words[_ngcontent-%COMP%]{display:flex;gap:8px}"],changeDetection:0}),C);Y=(0,d.gn)([(0,x.c)()],Y)},1175:(ne,A,u)=>{u.d(A,{Hw:()=>ct,Ps:()=>lt});var d=u(5879),n=u(3680),R=u(2495),x=u(6814),I=u(2096),N=u(8504),L=u(9315),E=u(7394),C=u(9397),g=u(7398),m=u(6306),_=u(4716),y=u(3020),S=u(8180),re=u(6328),se=u(2181);class J{}class w{constructor(t){this.normalizedNames=new Map,this.lazyUpdate=null,t?"string"==typeof t?this.lazyInit=()=>{this.headers=new Map,t.split("\n").forEach(e=>{const r=e.indexOf(":");if(r>0){const o=e.slice(0,r),i=o.toLowerCase(),c=e.slice(r+1).trim();this.maybeSetNormalizedName(o,i),this.headers.has(i)?this.headers.get(i).push(c):this.headers.set(i,[c])}})}:typeof Headers<"u"&&t instanceof Headers?(this.headers=new Map,t.forEach((e,r)=>{this.setHeaderEntries(r,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(t).forEach(([e,r])=>{this.setHeaderEntries(e,r)})}:this.headers=new Map}has(t){return this.init(),this.headers.has(t.toLowerCase())}get(t){this.init();const e=this.headers.get(t.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(t){return this.init(),this.headers.get(t.toLowerCase())||null}append(t,e){return this.clone({name:t,value:e,op:"a"})}set(t,e){return this.clone({name:t,value:e,op:"s"})}delete(t,e){return this.clone({name:t,value:e,op:"d"})}maybeSetNormalizedName(t,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,t)}init(){this.lazyInit&&(this.lazyInit instanceof w?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(t=>this.applyUpdate(t)),this.lazyUpdate=null))}copyFrom(t){t.init(),Array.from(t.headers.keys()).forEach(e=>{this.headers.set(e,t.headers.get(e)),this.normalizedNames.set(e,t.normalizedNames.get(e))})}clone(t){const e=new w;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof w?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([t]),e}applyUpdate(t){const e=t.name.toLowerCase();switch(t.op){case"a":case"s":let r=t.value;if("string"==typeof r&&(r=[r]),0===r.length)return;this.maybeSetNormalizedName(t.name,e);const o=("a"===t.op?this.headers.get(e):void 0)||[];o.push(...r),this.headers.set(e,o);break;case"d":const i=t.value;if(i){let c=this.headers.get(e);if(!c)return;c=c.filter(p=>-1===i.indexOf(p)),0===c.length?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,c)}else this.headers.delete(e),this.normalizedNames.delete(e)}}setHeaderEntries(t,e){const r=(Array.isArray(e)?e:[e]).map(i=>i.toString()),o=t.toLowerCase();this.headers.set(o,r),this.maybeSetNormalizedName(t,o)}forEach(t){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>t(this.normalizedNames.get(e),this.headers.get(e)))}}class oe{encodeKey(t){return K(t)}encodeValue(t){return K(t)}decodeKey(t){return decodeURIComponent(t)}decodeValue(t){return decodeURIComponent(t)}}const ae=/%(\d[a-f0-9])/gi,ce={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function K(s){return encodeURIComponent(s).replace(ae,(t,e)=>ce[e]??t)}function B(s){return`${s}`}class O{constructor(t={}){if(this.updates=null,this.cloneFrom=null,this.encoder=t.encoder||new oe,t.fromString){if(t.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=function ie(s,t){const e=new Map;return s.length>0&&s.replace(/^\?/,"").split("&").forEach(o=>{const i=o.indexOf("="),[c,p]=-1==i?[t.decodeKey(o),""]:[t.decodeKey(o.slice(0,i)),t.decodeValue(o.slice(i+1))],f=e.get(c)||[];f.push(p),e.set(c,f)}),e}(t.fromString,this.encoder)}else t.fromObject?(this.map=new Map,Object.keys(t.fromObject).forEach(e=>{const r=t.fromObject[e],o=Array.isArray(r)?r.map(B):[B(r)];this.map.set(e,o)})):this.map=null}has(t){return this.init(),this.map.has(t)}get(t){this.init();const e=this.map.get(t);return e?e[0]:null}getAll(t){return this.init(),this.map.get(t)||null}keys(){return this.init(),Array.from(this.map.keys())}append(t,e){return this.clone({param:t,value:e,op:"a"})}appendAll(t){const e=[];return Object.keys(t).forEach(r=>{const o=t[r];Array.isArray(o)?o.forEach(i=>{e.push({param:r,value:i,op:"a"})}):e.push({param:r,value:o,op:"a"})}),this.clone(e)}set(t,e){return this.clone({param:t,value:e,op:"s"})}delete(t,e){return this.clone({param:t,value:e,op:"d"})}toString(){return this.init(),this.keys().map(t=>{const e=this.encoder.encodeKey(t);return this.map.get(t).map(r=>e+"="+this.encoder.encodeValue(r)).join("&")}).filter(t=>""!==t).join("&")}clone(t){const e=new O({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(t),e}init(){null===this.map&&(this.map=new Map),null!==this.cloneFrom&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(t=>this.map.set(t,this.cloneFrom.map.get(t))),this.updates.forEach(t=>{switch(t.op){case"a":case"s":const e=("a"===t.op?this.map.get(t.param):void 0)||[];e.push(B(t.value)),this.map.set(t.param,e);break;case"d":if(void 0===t.value){this.map.delete(t.param);break}{let r=this.map.get(t.param)||[];const o=r.indexOf(B(t.value));-1!==o&&r.splice(o,1),r.length>0?this.map.set(t.param,r):this.map.delete(t.param)}}}),this.cloneFrom=this.updates=null)}}class l{constructor(){this.map=new Map}set(t,e){return this.map.set(t,e),this}get(t){return this.map.has(t)||this.map.set(t,t.defaultValue()),this.map.get(t)}delete(t){return this.map.delete(t),this}has(t){return this.map.has(t)}keys(){return this.map.keys()}}function a(s){return typeof ArrayBuffer<"u"&&s instanceof ArrayBuffer}function v(s){return typeof Blob<"u"&&s instanceof Blob}function b(s){return typeof FormData<"u"&&s instanceof FormData}class F{constructor(t,e,r,o){let i;if(this.url=e,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=t.toUpperCase(),function h(s){switch(s){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}(this.method)||o?(this.body=void 0!==r?r:null,i=o):i=r,i&&(this.reportProgress=!!i.reportProgress,this.withCredentials=!!i.withCredentials,i.responseType&&(this.responseType=i.responseType),i.headers&&(this.headers=i.headers),i.context&&(this.context=i.context),i.params&&(this.params=i.params)),this.headers||(this.headers=new w),this.context||(this.context=new l),this.params){const c=this.params.toString();if(0===c.length)this.urlWithParams=e;else{const p=e.indexOf("?");this.urlWithParams=e+(-1===p?"?":p<e.length-1?"&":"")+c}}else this.params=new O,this.urlWithParams=e}serializeBody(){return null===this.body?null:a(this.body)||v(this.body)||b(this.body)||function M(s){return typeof URLSearchParams<"u"&&s instanceof URLSearchParams}(this.body)||"string"==typeof this.body?this.body:this.body instanceof O?this.body.toString():"object"==typeof this.body||"boolean"==typeof this.body||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return null===this.body||b(this.body)?null:v(this.body)?this.body.type||null:a(this.body)?null:"string"==typeof this.body?"text/plain":this.body instanceof O?"application/x-www-form-urlencoded;charset=UTF-8":"object"==typeof this.body||"number"==typeof this.body||"boolean"==typeof this.body?"application/json":null}clone(t={}){const e=t.method||this.method,r=t.url||this.url,o=t.responseType||this.responseType,i=void 0!==t.body?t.body:this.body,c=void 0!==t.withCredentials?t.withCredentials:this.withCredentials,p=void 0!==t.reportProgress?t.reportProgress:this.reportProgress;let f=t.headers||this.headers,T=t.params||this.params;const D=t.context??this.context;return void 0!==t.setHeaders&&(f=Object.keys(t.setHeaders).reduce((q,P)=>q.set(P,t.setHeaders[P]),f)),t.setParams&&(T=Object.keys(t.setParams).reduce((q,P)=>q.set(P,t.setParams[P]),T)),new F(e,r,i,{params:T,headers:f,context:D,reportProgress:p,responseType:o,withCredentials:c})}}var z=function(s){return s[s.Sent=0]="Sent",s[s.UploadProgress=1]="UploadProgress",s[s.ResponseHeader=2]="ResponseHeader",s[s.DownloadProgress=3]="DownloadProgress",s[s.Response=4]="Response",s[s.User=5]="User",s}(z||{});class le{constructor(t,e=200,r="OK"){this.headers=t.headers||new w,this.status=void 0!==t.status?t.status:e,this.statusText=t.statusText||r,this.url=t.url||null,this.ok=this.status>=200&&this.status<300}}class Z extends le{constructor(t={}){super(t),this.type=z.Response,this.body=void 0!==t.body?t.body:null}clone(t={}){return new Z({body:void 0!==t.body?t.body:this.body,headers:t.headers||this.headers,status:void 0!==t.status?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0})}}function he(s,t){return{body:t,headers:s.headers,context:s.context,observe:s.observe,params:s.params,reportProgress:s.reportProgress,responseType:s.responseType,withCredentials:s.withCredentials}}let ue=(()=>{class s{constructor(e){this.handler=e}request(e,r,o={}){let i;if(e instanceof F)i=e;else{let f,T;f=o.headers instanceof w?o.headers:new w(o.headers),o.params&&(T=o.params instanceof O?o.params:new O({fromObject:o.params})),i=new F(e,r,void 0!==o.body?o.body:null,{headers:f,context:o.context,params:T,reportProgress:o.reportProgress,responseType:o.responseType||"json",withCredentials:o.withCredentials})}const c=(0,I.of)(i).pipe((0,re.b)(f=>this.handler.handle(f)));if(e instanceof F||"events"===o.observe)return c;const p=c.pipe((0,se.h)(f=>f instanceof Z));switch(o.observe||"body"){case"body":switch(i.responseType){case"arraybuffer":return p.pipe((0,g.U)(f=>{if(null!==f.body&&!(f.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return f.body}));case"blob":return p.pipe((0,g.U)(f=>{if(null!==f.body&&!(f.body instanceof Blob))throw new Error("Response is not a Blob.");return f.body}));case"text":return p.pipe((0,g.U)(f=>{if(null!==f.body&&"string"!=typeof f.body)throw new Error("Response is not a string.");return f.body}));default:return p.pipe((0,g.U)(f=>f.body))}case"response":return p;default:throw new Error(`Unreachable: unhandled observe type ${o.observe}}`)}}delete(e,r={}){return this.request("DELETE",e,r)}get(e,r={}){return this.request("GET",e,r)}head(e,r={}){return this.request("HEAD",e,r)}jsonp(e,r){return this.request("JSONP",e,{params:(new O).append(r,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,r={}){return this.request("OPTIONS",e,r)}patch(e,r,o={}){return this.request("PATCH",e,he(o,r))}post(e,r,o={}){return this.request("POST",e,he(o,r))}put(e,r,o={}){return this.request("PUT",e,he(o,r))}}return s.\u0275fac=function(e){return new(e||s)(d.LFG(J))},s.\u0275prov=d.Yz7({token:s,factory:s.\u0275fac}),s})();var Se=u(6593);const Ge=["*"];let Q;function W(s){return function Ve(){if(void 0===Q&&(Q=null,typeof window<"u")){const s=window;void 0!==s.trustedTypes&&(Q=s.trustedTypes.createPolicy("angular#components",{createHTML:t=>t}))}return Q}()?.createHTML(s)||s}function be(s){return Error(`Unable to find icon with the name "${s}"`)}function we(s){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${s}".`)}function Oe(s){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${s}".`)}class j{constructor(t,e,r){this.url=t,this.svgText=e,this.options=r}}let ee=(()=>{class s{constructor(e,r,o,i){this._httpClient=e,this._sanitizer=r,this._errorHandler=i,this._svgIconConfigs=new Map,this._iconSetConfigs=new Map,this._cachedIconsByUrl=new Map,this._inProgressUrlFetches=new Map,this._fontCssClassesByAlias=new Map,this._resolvers=[],this._defaultFontSetClass=["material-icons","mat-ligature-font"],this._document=o}addSvgIcon(e,r,o){return this.addSvgIconInNamespace("",e,r,o)}addSvgIconLiteral(e,r,o){return this.addSvgIconLiteralInNamespace("",e,r,o)}addSvgIconInNamespace(e,r,o,i){return this._addSvgIconConfig(e,r,new j(o,null,i))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,r,o,i){const c=this._sanitizer.sanitize(d.q3G.HTML,o);if(!c)throw Oe(o);const p=W(c);return this._addSvgIconConfig(e,r,new j("",p,i))}addSvgIconSet(e,r){return this.addSvgIconSetInNamespace("",e,r)}addSvgIconSetLiteral(e,r){return this.addSvgIconSetLiteralInNamespace("",e,r)}addSvgIconSetInNamespace(e,r,o){return this._addSvgIconSetConfig(e,new j(r,null,o))}addSvgIconSetLiteralInNamespace(e,r,o){const i=this._sanitizer.sanitize(d.q3G.HTML,r);if(!i)throw Oe(r);const c=W(i);return this._addSvgIconSetConfig(e,new j("",c,o))}registerFontClassAlias(e,r=e){return this._fontCssClassesByAlias.set(e,r),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(e){const r=this._sanitizer.sanitize(d.q3G.RESOURCE_URL,e);if(!r)throw we(e);const o=this._cachedIconsByUrl.get(r);return o?(0,I.of)(te(o)):this._loadSvgIconFromConfig(new j(e,null)).pipe((0,C.b)(i=>this._cachedIconsByUrl.set(r,i)),(0,g.U)(i=>te(i)))}getNamedSvgIcon(e,r=""){const o=Pe(r,e);let i=this._svgIconConfigs.get(o);if(i)return this._getSvgFromConfig(i);if(i=this._getIconConfigFromResolvers(r,e),i)return this._svgIconConfigs.set(o,i),this._getSvgFromConfig(i);const c=this._iconSetConfigs.get(r);return c?this._getSvgFromIconSetConfigs(e,c):(0,N._)(be(o))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?(0,I.of)(te(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe((0,g.U)(r=>te(r)))}_getSvgFromIconSetConfigs(e,r){const o=this._extractIconWithNameFromAnySet(e,r);if(o)return(0,I.of)(o);const i=r.filter(c=>!c.svgText).map(c=>this._loadSvgIconSetFromConfig(c).pipe((0,m.K)(p=>{const T=`Loading icon set URL: ${this._sanitizer.sanitize(d.q3G.RESOURCE_URL,c.url)} failed: ${p.message}`;return this._errorHandler.handleError(new Error(T)),(0,I.of)(null)})));return(0,L.D)(i).pipe((0,g.U)(()=>{const c=this._extractIconWithNameFromAnySet(e,r);if(!c)throw be(e);return c}))}_extractIconWithNameFromAnySet(e,r){for(let o=r.length-1;o>=0;o--){const i=r[o];if(i.svgText&&i.svgText.toString().indexOf(e)>-1){const c=this._svgElementFromConfig(i),p=this._extractSvgIconFromSet(c,e,i.options);if(p)return p}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe((0,C.b)(r=>e.svgText=r),(0,g.U)(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?(0,I.of)(null):this._fetchIcon(e).pipe((0,C.b)(r=>e.svgText=r))}_extractSvgIconFromSet(e,r,o){const i=e.querySelector(`[id="${r}"]`);if(!i)return null;const c=i.cloneNode(!0);if(c.removeAttribute("id"),"svg"===c.nodeName.toLowerCase())return this._setSvgAttributes(c,o);if("symbol"===c.nodeName.toLowerCase())return this._setSvgAttributes(this._toSvgElement(c),o);const p=this._svgElementFromString(W("<svg></svg>"));return p.appendChild(c),this._setSvgAttributes(p,o)}_svgElementFromString(e){const r=this._document.createElement("DIV");r.innerHTML=e;const o=r.querySelector("svg");if(!o)throw Error("<svg> tag not found");return o}_toSvgElement(e){const r=this._svgElementFromString(W("<svg></svg>")),o=e.attributes;for(let i=0;i<o.length;i++){const{name:c,value:p}=o[i];"id"!==c&&r.setAttribute(c,p)}for(let i=0;i<e.childNodes.length;i++)e.childNodes[i].nodeType===this._document.ELEMENT_NODE&&r.appendChild(e.childNodes[i].cloneNode(!0));return r}_setSvgAttributes(e,r){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),r&&r.viewBox&&e.setAttribute("viewBox",r.viewBox),e}_fetchIcon(e){const{url:r,options:o}=e,i=o?.withCredentials??!1;if(!this._httpClient)throw function Qe(){return Error("Could not find HttpClient provider for use with Angular Material icons. Please include the HttpClientModule from @angular/common/http in your app imports.")}();if(null==r)throw Error(`Cannot fetch icon from URL "${r}".`);const c=this._sanitizer.sanitize(d.q3G.RESOURCE_URL,r);if(!c)throw we(r);const p=this._inProgressUrlFetches.get(c);if(p)return p;const f=this._httpClient.get(c,{responseType:"text",withCredentials:i}).pipe((0,g.U)(T=>W(T)),(0,_.x)(()=>this._inProgressUrlFetches.delete(c)),(0,y.B)());return this._inProgressUrlFetches.set(c,f),f}_addSvgIconConfig(e,r,o){return this._svgIconConfigs.set(Pe(e,r),o),this}_addSvgIconSetConfig(e,r){const o=this._iconSetConfigs.get(e);return o?o.push(r):this._iconSetConfigs.set(e,[r]),this}_svgElementFromConfig(e){if(!e.svgElement){const r=this._svgElementFromString(e.svgText);this._setSvgAttributes(r,e.options),e.svgElement=r}return e.svgElement}_getIconConfigFromResolvers(e,r){for(let o=0;o<this._resolvers.length;o++){const i=this._resolvers[o](r,e);if(i)return tt(i)?new j(i.url,null,i.options):new j(i,null)}}}return s.\u0275fac=function(e){return new(e||s)(d.LFG(ue,8),d.LFG(Se.H7),d.LFG(x.K0,8),d.LFG(d.qLn))},s.\u0275prov=d.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})();function te(s){return s.cloneNode(!0)}function Pe(s,t){return s+":"+t}function tt(s){return!(!s.url||!s.options)}const nt=(0,n.pj)(class{constructor(s){this._elementRef=s}}),rt=new d.OlP("MAT_ICON_DEFAULT_OPTIONS"),st=new d.OlP("mat-icon-location",{providedIn:"root",factory:function ot(){const s=(0,d.f3M)(x.K0),t=s?s.location:null;return{getPathname:()=>t?t.pathname+t.search:""}}}),Re=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],it=Re.map(s=>`[${s}]`).join(", "),at=/^url\(['"]?#(.*?)['"]?\)$/;let ct=(()=>{class s extends nt{get inline(){return this._inline}set inline(e){this._inline=(0,R.Ig)(e)}get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}get fontSet(){return this._fontSet}set fontSet(e){const r=this._cleanupFontValue(e);r!==this._fontSet&&(this._fontSet=r,this._updateFontIconClasses())}get fontIcon(){return this._fontIcon}set fontIcon(e){const r=this._cleanupFontValue(e);r!==this._fontIcon&&(this._fontIcon=r,this._updateFontIconClasses())}constructor(e,r,o,i,c,p){super(e),this._iconRegistry=r,this._location=i,this._errorHandler=c,this._inline=!1,this._previousFontSetClass=[],this._currentIconFetch=E.w0.EMPTY,p&&(p.color&&(this.color=this.defaultColor=p.color),p.fontSet&&(this.fontSet=p.fontSet)),o||e.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(e){if(!e)return["",""];const r=e.split(":");switch(r.length){case 1:return["",r[0]];case 2:return r;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){const e=this._elementsWithExternalReferences;if(e&&e.size){const r=this._location.getPathname();r!==this._previousPath&&(this._previousPath=r,this._prependPathToReferences(r))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();const r=this._location.getPathname();this._previousPath=r,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(r),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){const e=this._elementRef.nativeElement;let r=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();r--;){const o=e.childNodes[r];(1!==o.nodeType||"svg"===o.nodeName.toLowerCase())&&o.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;const e=this._elementRef.nativeElement,r=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(o=>o.length>0);this._previousFontSetClass.forEach(o=>e.classList.remove(o)),r.forEach(o=>e.classList.add(o)),this._previousFontSetClass=r,this.fontIcon!==this._previousFontIconClass&&!r.includes("mat-ligature-font")&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return"string"==typeof e?e.trim().split(" ")[0]:e}_prependPathToReferences(e){const r=this._elementsWithExternalReferences;r&&r.forEach((o,i)=>{o.forEach(c=>{i.setAttribute(c.name,`url('${e}#${c.value}')`)})})}_cacheChildrenWithExternalReferences(e){const r=e.querySelectorAll(it),o=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let i=0;i<r.length;i++)Re.forEach(c=>{const p=r[i],f=p.getAttribute(c),T=f?f.match(at):null;if(T){let D=o.get(p);D||(D=[],o.set(p,D)),D.push({name:c,value:T[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){const[r,o]=this._splitIconName(e);r&&(this._svgNamespace=r),o&&(this._svgName=o),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(o,r).pipe((0,S.q)(1)).subscribe(i=>this._setSvgElement(i),i=>{this._errorHandler.handleError(new Error(`Error retrieving icon ${r}:${o}! ${i.message}`))})}}}return s.\u0275fac=function(e){return new(e||s)(d.Y36(d.SBq),d.Y36(ee),d.$8M("aria-hidden"),d.Y36(st),d.Y36(d.qLn),d.Y36(rt,8))},s.\u0275cmp=d.Xpm({type:s,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:8,hostBindings:function(e,r){2&e&&(d.uIk("data-mat-icon-type",r._usingFontIcon()?"font":"svg")("data-mat-icon-name",r._svgName||r.fontIcon)("data-mat-icon-namespace",r._svgNamespace||r.fontSet)("fontIcon",r._usingFontIcon()?r.fontIcon:null),d.ekj("mat-icon-inline",r.inline)("mat-icon-no-color","primary"!==r.color&&"accent"!==r.color&&"warn"!==r.color))},inputs:{color:"color",inline:"inline",svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],features:[d.qOj],ngContentSelectors:Ge,decls:1,vars:0,template:function(e,r){1&e&&(d.F$t(),d.Hsn(0))},styles:[".mat-icon{-webkit-user-select:none;user-select:none;background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px;overflow:hidden}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}.mat-icon.mat-ligature-font[fontIcon]::before{content:attr(fontIcon)}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1, 1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}"],encapsulation:2,changeDetection:0}),s})(),lt=(()=>{class s{}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=d.oAB({type:s}),s.\u0275inj=d.cJS({imports:[n.BQ,n.BQ]}),s})()}}]);