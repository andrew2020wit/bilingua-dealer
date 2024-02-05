"use strict";(self.webpackChunkangular_bilingua=self.webpackChunkangular_bilingua||[]).push([[304],{6878:(Q,F,h)=>{h.d(F,{E:()=>H});var d=h(5619),r=h(2572),R=h(8180);function x(E,T){const _=T.index>=0?T.index:E.length+T.index;if(E.slice(_,_+T.pattern.length)!==T.pattern)return null;const v=E.length-(E.slice(0,T.index).length+T.pattern.length);let C=E.slice(0,T.index)+T.replace;return v>0&&(C+=E.slice(-1*v)),C}var S=h(5879),b=h(463);let H=(()=>{class E{constructor(_){this.bookService=_,this.currentDictionaryState$=new d.X(null),this.minimalSearchPattern=2,this.maxNumberOfSearchResults=20,this.morphology={},this.dictionary={},this.morphologyReplaceRules=[],this.dictionaryIsEmpty=!0,this.morphologyIsEmpty=!0,this.searchTerm="",this.currentTerm="",this.terms=[],(0,r.a)([this.bookService.getMorphology$(),this.bookService.getDictionary$(),this.bookService.getMorphologyReplaceRules$()]).pipe((0,R.q)(1)).subscribe(([v,C,M])=>{v?.morphology?(this.morphology=v.morphology,this.morphologyIsEmpty=!1):(this.morphology={},this.morphologyIsEmpty=!0),this.morphologyReplaceRules=M?.morphologyReplaceRules?M.morphologyReplaceRules:[],C?.dictionary?(this.dictionary=C.dictionary,this.terms=Object.keys(this.dictionary),this.dictionaryIsEmpty=!1):(this.dictionary={},this.dictionaryIsEmpty=!0),this.setDictionaryState(null)})}searchTerms(_){return _.length<this.minimalSearchPattern?null:this.terms.filter(v=>v.startsWith(_.toLowerCase())).slice(0,this.maxNumberOfSearchResults)}setTerm(_){this.searchTerm=_,this.currentTerm=_.trim().toLowerCase(),this.setDictionaryState(null);let v=this.getTerm(this.currentTerm);if(v)this.setDictionaryState(v);else{if(!this.morphologyIsEmpty){const C=this.morphology[this.currentTerm];if(C?.o&&(v=this.getTerm(C.o),v))return void this.setDictionaryState(v)}for(let C=0;C<this.morphologyReplaceRules.length;C++){const M=x(this.currentTerm,this.morphologyReplaceRules[C]);if(!M)continue;const A=this.getTerm(M);if(A)return this.currentTerm=M,void this.setDictionaryState(A)}}}setDictionaryState(_){this.currentDictionaryState$.next({currentDictionaryTerm:_,dictionaryIsEmpty:this.dictionaryIsEmpty,searchTerm:this.searchTerm})}getTerm(_){if(!_||this.dictionaryIsEmpty)return null;const v=this.dictionary[_]||null;return v?.articles?.length?v:null}}return E.\u0275fac=function(_){return new(_||E)(S.LFG(b.Z))},E.\u0275prov=S.Yz7({token:E,factory:E.\u0275fac,providedIn:"root"}),E})()},5709:(Q,F,h)=>{h.d(F,{j:()=>H});var d=h(5619),r=h(8180),R=h(7772),x=h(5879),S=h(2e3),b=h(957);let H=(()=>{class E{constructor(_,v){this.dbService=_,this.infoService=v,this.examples$=new d.X([]),this.dbService.getAll(R.L.FavoriteExamples).pipe((0,r.q)(1)).subscribe(C=>{C?(C.sort((M,A)=>(M.timestamp||0)-(A.timestamp||0)),this.examples$.next(C)):this.examples$.next([])})}addExample(_){const v=Date.now(),C={..._,timestamp:v,showDetails:!1};this.dbService.add(R.L.FavoriteExamples,C).pipe((0,r.q)(1)).subscribe();const M=[...this.examples$.value,C];this.examples$.next(M),this.infoService.show("added: "+_.original)}removeExample(_){if(!_)return;this.dbService.delete(R.L.FavoriteExamples,_).pipe((0,r.q)(1)).subscribe();const v=this.examples$.value.filter(C=>C.timestamp!==_);this.examples$.next(v)}}return E.\u0275fac=function(_){return new(_||E)(x.LFG(S.ys),x.LFG(b.C))},E.\u0275prov=x.Yz7({token:E,factory:E.\u0275fac,providedIn:"root"}),E})()},8304:(Q,F,h)=>{h.d(F,{Z:()=>k});var T,d=h(7582),r=h(5879),R=h(6814),x=h(1791),S=h(2296),b=h(1175),H=h(6878),E=h(5709);const _=["topMarker"];function v(u,p){1&u&&(r.TgZ(0,"div",7),r._uU(1," dictionaryIsEmpty\n"),r.qZA())}function C(u,p){if(1&u){const c=r.EpF();r.TgZ(0,"div",10),r.NdJ("click",function(){const l=r.CHM(c).$implicit,f=r.oxw(2);return r.KtG(f.selectPartOfSpeech(l))}),r._uU(1),r.qZA()}if(2&u){const c=p.$implicit,y=r.oxw(2);r.ekj("selected",y.selectedPartsOfSpeech.includes(c)),r.xp6(1),r.hij(" ",c," ")}}function M(u,p){if(1&u&&(r.TgZ(0,"div",8),r.YNc(1,C,2,3,"div",9),r.qZA()),2&u){const c=r.oxw();r.xp6(1),r.Q6J("ngForOf",c.partsOfSpeech)}}function A(u,p){1&u&&(r.TgZ(0,"span"),r._uU(1," => "),r.qZA())}function z(u,p){if(1&u&&(r.TgZ(0,"span"),r._uU(1),r.YNc(2,A,2,0,"span",5),r.qZA()),2&u){const c=r.oxw();r.xp6(1),r.hij("",c.searchTerm," "),r.xp6(1),r.Q6J("ngIf",null==c.dictionaryTerm?null:c.dictionaryTerm.term)}}function W(u,p){if(1&u&&(r.TgZ(0,"span",17),r._uU(1),r.qZA()),2&u){const c=r.oxw(2).$implicit;r.xp6(1),r.hij(" ",c.transcription," ")}}function J(u,p){if(1&u&&(r.TgZ(0,"span",18),r._uU(1),r.qZA()),2&u){const c=r.oxw(2).$implicit;r.xp6(1),r.hij(" ",c.dictionaryName," ")}}function j(u,p){if(1&u&&(r.TgZ(0,"div",26),r._uU(1),r.qZA()),2&u){const c=r.oxw().$implicit;r.xp6(1),r.hij(" ",c.lexicalUnit," ")}}function D(u,p){if(1&u&&(r.TgZ(0,"div",27),r._uU(1),r.qZA()),2&u){const c=r.oxw().$implicit;r.xp6(1),r.hij(" Synonym: ",c.synonym," ")}}function se(u,p){if(1&u&&(r.TgZ(0,"div",28),r._uU(1),r.qZA()),2&u){const c=r.oxw().$implicit;r.xp6(1),r.hij(" Antonym: ",c.antonym," ")}}function ee(u,p){if(1&u){const c=r.EpF();r.TgZ(0,"div",32)(1,"div",33),r.NdJ("dblclick",function(){r.CHM(c);const w=r.oxw(5);return r.KtG(w.clickOnWord.emit())}),r.TgZ(2,"button",34),r.NdJ("click",function(w){const f=r.CHM(c).$implicit,I=r.oxw(2).$implicit,O=r.oxw(2).$implicit;return r.oxw().addExample(f,I,O),r.KtG(w.stopPropagation())}),r._UZ(3,"mat-icon",35),r.qZA(),r.TgZ(4,"span"),r._uU(5),r.qZA()(),r.TgZ(6,"div",36),r._uU(7),r.qZA()()}if(2&u){const c=p.$implicit;r.xp6(5),r.hij(" ",c.original," "),r.xp6(2),r.Oqu(c.translation)}}function Z(u,p){if(1&u&&(r.TgZ(0,"div",29)(1,"div",30),r.YNc(2,ee,8,2,"div",31),r.qZA()()),2&u){const c=r.oxw().$implicit;r.xp6(2),r.Q6J("ngForOf",c.examples)}}function K(u,p){if(1&u){const c=r.EpF();r.TgZ(0,"div",19),r.YNc(1,j,2,1,"div",20),r.TgZ(2,"div",21),r.NdJ("click",function(){const l=r.CHM(c).$implicit;return r.KtG(l.showDetails=!l.showDetails)}),r.TgZ(3,"span",22),r.NdJ("dblclick",function(){r.CHM(c);const w=r.oxw(3);return r.KtG(w.clickOnWord.emit())}),r._uU(4),r.qZA()(),r.YNc(5,D,2,1,"div",23),r.YNc(6,se,2,1,"div",24),r.YNc(7,Z,3,1,"div",25),r.qZA()}if(2&u){const c=p.$implicit;r.xp6(1),r.Q6J("ngIf",c.lexicalUnit),r.xp6(1),r.ekj("has-examples",c.examples),r.xp6(2),r.hij(" ",c.definition," "),r.xp6(1),r.Q6J("ngIf",c.synonym),r.xp6(1),r.Q6J("ngIf",c.antonym),r.xp6(1),r.Q6J("ngIf",c.showDetails)}}function te(u,p){if(1&u){const c=r.EpF();r.ynx(0),r.TgZ(1,"div",12),r.YNc(2,W,2,1,"span",13),r.TgZ(3,"span",10),r.NdJ("click",function(){r.CHM(c);const w=r.oxw().$implicit,l=r.oxw();return r.KtG(l.selectPartOfSpeech(w.partOfSpeech))}),r._uU(4),r.qZA(),r.YNc(5,J,2,1,"span",14),r.qZA(),r.TgZ(6,"div",15),r.YNc(7,K,8,7,"div",16),r.qZA(),r.BQk()}if(2&u){const c=r.oxw().$implicit,y=r.oxw();r.xp6(2),r.Q6J("ngIf",c.transcription),r.xp6(1),r.ekj("selected",y.selectedPartsOfSpeech.includes(c.partOfSpeech)),r.xp6(1),r.hij(" ",c.partOfSpeech," "),r.xp6(1),r.Q6J("ngIf",c.dictionaryName),r.xp6(2),r.Q6J("ngForOf",c.definitions)}}function G(u,p){if(1&u&&(r.TgZ(0,"div",11),r.YNc(1,te,8,6,"ng-container",5),r.qZA()),2&u){const c=p.$implicit,y=r.oxw();r.xp6(1),r.Q6J("ngIf",!y.selectedPartsOfSpeech.length||y.selectedPartsOfSpeech.includes(c.partOfSpeech))}}let k=((T=class{set term(p){this.dictionaryService.setTerm(p)}constructor(p,c,y){this.cdr=p,this.dictionaryService=c,this.favoriteExamplesService=y,this.clickOnWord=new r.vpe,this.searchTerm="",this.dictionaryIsEmpty=!1,this.dictionaryTerm=null,this.partsOfSpeech=[],this.selectedPartsOfSpeech=[]}selectPartOfSpeech(p){this.selectedPartsOfSpeech.includes(p)?this.selectedPartsOfSpeech=this.selectedPartsOfSpeech.filter(c=>c!==p):this.selectedPartsOfSpeech.push(p)}ngOnInit(){this.dictionaryService.currentDictionaryState$.pipe((0,x.t)(this)).subscribe(p=>{this.searchTerm=p?.searchTerm||"",this.dictionaryTerm=p?.currentDictionaryTerm||null,this.dictionaryIsEmpty=!!p?.dictionaryIsEmpty,this.setTerm(this.dictionaryTerm)})}addExample(p,c,y){this.favoriteExamplesService.addExample({definition:c.definition,original:p.original,translation:p.translation||"",synonym:c.synonym||"",antonym:c.antonym||"",partOfSpeech:y.partOfSpeech,term:this.dictionaryTerm?.term||""})}setTerm(p){if(this.selectedPartsOfSpeech=[],this.dictionaryTerm=p,!p)return this.partsOfSpeech=[],void this.cdr.detectChanges();const c=p.articles.map(y=>y.partOfSpeech?.toLowerCase()?.trim()||"").filter(y=>!!y);this.partsOfSpeech=[...new Set(c)],this.topMarker?.nativeElement?.scrollIntoView(),this.cdr.detectChanges()}}).\u0275fac=function(p){return new(p||T)(r.Y36(r.sBO),r.Y36(H.E),r.Y36(E.j))},T.\u0275cmp=r.Xpm({type:T,selectors:[["app-dictionary"]],viewQuery:function(p,c){if(1&p&&r.Gf(_,5),2&p){let y;r.iGM(y=r.CRH())&&(c.topMarker=y.first)}},inputs:{term:"term"},outputs:{clickOnWord:"clickOnWord"},standalone:!0,features:[r.jDz],decls:8,vars:5,consts:[[1,"top-marker"],["topMarker",""],["class","empty-dictionary",4,"ngIf"],["class","parts-of-speech",4,"ngIf"],[1,"header"],[4,"ngIf"],["class","article",4,"ngFor","ngForOf"],[1,"empty-dictionary"],[1,"parts-of-speech"],["class","part-of-speech",3,"selected","click",4,"ngFor","ngForOf"],[1,"part-of-speech",3,"click"],[1,"article"],[1,"article-header"],["class","transcription",4,"ngIf"],["class","dictionary",4,"ngIf"],[1,"definitions"],["class","definition",4,"ngFor","ngForOf"],[1,"transcription"],[1,"dictionary"],[1,"definition"],["class","lex-unit",4,"ngIf"],[1,"definition",3,"click"],[3,"dblclick"],["class","synonym",4,"ngIf"],["class","antonym",4,"ngIf"],["class","details",4,"ngIf"],[1,"lex-unit"],[1,"synonym"],[1,"antonym"],[1,"details"],[1,"examples"],["class","example",4,"ngFor","ngForOf"],[1,"example"],[1,"original",3,"dblclick"],["mat-icon-button","","color","primary",3,"click"],["fontIcon","add",1,"icon"],[1,"translation"]],template:function(p,c){if(1&p&&(r._UZ(0,"div",0,1),r.YNc(2,v,2,0,"div",2),r.YNc(3,M,2,1,"div",3),r.TgZ(4,"div",4),r.YNc(5,z,3,2,"span",5),r._uU(6),r.qZA(),r.YNc(7,G,2,1,"div",6)),2&p){let y;r.xp6(2),r.Q6J("ngIf",c.dictionaryIsEmpty),r.xp6(1),r.Q6J("ngIf",(null==c.partsOfSpeech?null:c.partsOfSpeech.length)&&c.partsOfSpeech.length>1),r.xp6(2),r.Q6J("ngIf",c.searchTerm.trim().toLowerCase()!==(null==c.dictionaryTerm||null==c.dictionaryTerm.term||null==(y=c.dictionaryTerm.term.trim())?null:y.toLowerCase())),r.xp6(1),r.hij(" ",null==c.dictionaryTerm?null:c.dictionaryTerm.term,"\n"),r.xp6(1),r.Q6J("ngForOf",null==c.dictionaryTerm?null:c.dictionaryTerm.articles)}},dependencies:[R.ez,R.sg,R.O5,S.ot,S.RK,b.Ps,b.Hw],styles:["[_nghost-%COMP%]{display:block;padding:var(--padding-main);font-size:var(--dictionary-main-font-size)}.parts-of-speech[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.parts-of-speech[_ngcontent-%COMP%]   .part-of-speech[_ngcontent-%COMP%]{cursor:pointer;margin:4px}.parts-of-speech[_ngcontent-%COMP%]   .selected[_ngcontent-%COMP%]{outline:1px solid green}.header[_ngcontent-%COMP%]{font-size:var(--dictionary-header-font-size);font-weight:700}.has-examples[_ngcontent-%COMP%]{cursor:pointer;font-weight:500}.article[_ngcontent-%COMP%]{margin:16px 0}.article[_ngcontent-%COMP%]   .article-header[_ngcontent-%COMP%]{margin:var(--padding-main) 0;line-height:2}.article[_ngcontent-%COMP%]   .article-header[_ngcontent-%COMP%]   .transcription[_ngcontent-%COMP%]{color:#000;margin:4px;padding:4px;background-color:#f9e79f}.article[_ngcontent-%COMP%]   .article-header[_ngcontent-%COMP%]   .dictionary[_ngcontent-%COMP%]{color:#000;margin:4px;padding:4px;background-color:#94ff7d}.article[_ngcontent-%COMP%]   .definition[_ngcontent-%COMP%]{margin:8px 0}.article[_ngcontent-%COMP%]   .definition[_ngcontent-%COMP%]   .lex-unit[_ngcontent-%COMP%]{font-weight:700;font-size:1.2em}.article[_ngcontent-%COMP%]   .definition[_ngcontent-%COMP%]   .synonym[_ngcontent-%COMP%]{color:green;padding-left:var(--padding-small)}.article[_ngcontent-%COMP%]   .definition[_ngcontent-%COMP%]   .antonym[_ngcontent-%COMP%]{color:red;padding-left:var(--padding-small)}.article[_ngcontent-%COMP%]   .definition[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]{padding-left:var(--padding-small)}.article[_ngcontent-%COMP%]   .definition[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .examples[_ngcontent-%COMP%]{padding-left:var(--padding-small);margin:8px 0}.article[_ngcontent-%COMP%]   .definition[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .examples[_ngcontent-%COMP%]   .original[_ngcontent-%COMP%]{display:flex;align-items:center}.article[_ngcontent-%COMP%]   .definition[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .examples[_ngcontent-%COMP%]   .original[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{cursor:pointer}.article[_ngcontent-%COMP%]   .definition[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .examples[_ngcontent-%COMP%]   .translation[_ngcontent-%COMP%]{color:gray;padding-left:var(--padding-large)}.part-of-speech[_ngcontent-%COMP%]{font-weight:700;background-color:wheat;padding:4px;margin:4px 0;cursor:pointer}"],changeDetection:0}),T);k=(0,d.gn)([(0,x.c)()],k)},957:(Q,F,h)=>{h.d(F,{C:()=>R});var d=h(5879),r=h(2939);let R=(()=>{class x{constructor(b){this.snackBar=b}show(b){this.snackBar.open(b,"",{duration:1e3,verticalPosition:"top",panelClass:"info-snack"})}error(b){this.snackBar.open(b,"",{duration:1e3,verticalPosition:"top",panelClass:"error-snack"})}}return x.\u0275fac=function(b){return new(b||x)(d.LFG(r.ux))},x.\u0275prov=d.Yz7({token:x,factory:x.\u0275fac,providedIn:"root"}),x})()},1175:(Q,F,h)=>{h.d(F,{Hw:()=>ct,Ps:()=>lt});var d=h(5879),r=h(3680),R=h(2495),x=h(6814),S=h(2096),b=h(8504),H=h(9315),E=h(7394),T=h(9397),_=h(7398),v=h(6306),C=h(4716),M=h(3020),A=h(8180),z=h(6328),W=h(2181);class J{}class D{constructor(t){this.normalizedNames=new Map,this.lazyUpdate=null,t?"string"==typeof t?this.lazyInit=()=>{this.headers=new Map,t.split("\n").forEach(e=>{const n=e.indexOf(":");if(n>0){const s=e.slice(0,n),i=s.toLowerCase(),a=e.slice(n+1).trim();this.maybeSetNormalizedName(s,i),this.headers.has(i)?this.headers.get(i).push(a):this.headers.set(i,[a])}})}:typeof Headers<"u"&&t instanceof Headers?(this.headers=new Map,t.forEach((e,n)=>{this.setHeaderEntries(n,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(t).forEach(([e,n])=>{this.setHeaderEntries(e,n)})}:this.headers=new Map}has(t){return this.init(),this.headers.has(t.toLowerCase())}get(t){this.init();const e=this.headers.get(t.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(t){return this.init(),this.headers.get(t.toLowerCase())||null}append(t,e){return this.clone({name:t,value:e,op:"a"})}set(t,e){return this.clone({name:t,value:e,op:"s"})}delete(t,e){return this.clone({name:t,value:e,op:"d"})}maybeSetNormalizedName(t,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,t)}init(){this.lazyInit&&(this.lazyInit instanceof D?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(t=>this.applyUpdate(t)),this.lazyUpdate=null))}copyFrom(t){t.init(),Array.from(t.headers.keys()).forEach(e=>{this.headers.set(e,t.headers.get(e)),this.normalizedNames.set(e,t.normalizedNames.get(e))})}clone(t){const e=new D;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof D?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([t]),e}applyUpdate(t){const e=t.name.toLowerCase();switch(t.op){case"a":case"s":let n=t.value;if("string"==typeof n&&(n=[n]),0===n.length)return;this.maybeSetNormalizedName(t.name,e);const s=("a"===t.op?this.headers.get(e):void 0)||[];s.push(...n),this.headers.set(e,s);break;case"d":const i=t.value;if(i){let a=this.headers.get(e);if(!a)return;a=a.filter(m=>-1===i.indexOf(m)),0===a.length?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,a)}else this.headers.delete(e),this.normalizedNames.delete(e)}}setHeaderEntries(t,e){const n=(Array.isArray(e)?e:[e]).map(i=>i.toString()),s=t.toLowerCase();this.headers.set(s,n),this.maybeSetNormalizedName(t,s)}forEach(t){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>t(this.normalizedNames.get(e),this.headers.get(e)))}}class ee{encodeKey(t){return G(t)}encodeValue(t){return G(t)}decodeKey(t){return decodeURIComponent(t)}decodeValue(t){return decodeURIComponent(t)}}const K=/%(\d[a-f0-9])/gi,te={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function G(o){return encodeURIComponent(o).replace(K,(t,e)=>te[e]??t)}function k(o){return`${o}`}class u{constructor(t={}){if(this.updates=null,this.cloneFrom=null,this.encoder=t.encoder||new ee,t.fromString){if(t.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=function Z(o,t){const e=new Map;return o.length>0&&o.replace(/^\?/,"").split("&").forEach(s=>{const i=s.indexOf("="),[a,m]=-1==i?[t.decodeKey(s),""]:[t.decodeKey(s.slice(0,i)),t.decodeValue(s.slice(i+1))],g=e.get(a)||[];g.push(m),e.set(a,g)}),e}(t.fromString,this.encoder)}else t.fromObject?(this.map=new Map,Object.keys(t.fromObject).forEach(e=>{const n=t.fromObject[e],s=Array.isArray(n)?n.map(k):[k(n)];this.map.set(e,s)})):this.map=null}has(t){return this.init(),this.map.has(t)}get(t){this.init();const e=this.map.get(t);return e?e[0]:null}getAll(t){return this.init(),this.map.get(t)||null}keys(){return this.init(),Array.from(this.map.keys())}append(t,e){return this.clone({param:t,value:e,op:"a"})}appendAll(t){const e=[];return Object.keys(t).forEach(n=>{const s=t[n];Array.isArray(s)?s.forEach(i=>{e.push({param:n,value:i,op:"a"})}):e.push({param:n,value:s,op:"a"})}),this.clone(e)}set(t,e){return this.clone({param:t,value:e,op:"s"})}delete(t,e){return this.clone({param:t,value:e,op:"d"})}toString(){return this.init(),this.keys().map(t=>{const e=this.encoder.encodeKey(t);return this.map.get(t).map(n=>e+"="+this.encoder.encodeValue(n)).join("&")}).filter(t=>""!==t).join("&")}clone(t){const e=new u({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(t),e}init(){null===this.map&&(this.map=new Map),null!==this.cloneFrom&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(t=>this.map.set(t,this.cloneFrom.map.get(t))),this.updates.forEach(t=>{switch(t.op){case"a":case"s":const e=("a"===t.op?this.map.get(t.param):void 0)||[];e.push(k(t.value)),this.map.set(t.param,e);break;case"d":if(void 0===t.value){this.map.delete(t.param);break}{let n=this.map.get(t.param)||[];const s=n.indexOf(k(t.value));-1!==s&&n.splice(s,1),n.length>0?this.map.set(t.param,n):this.map.delete(t.param)}}}),this.cloneFrom=this.updates=null)}}class c{constructor(){this.map=new Map}set(t,e){return this.map.set(t,e),this}get(t){return this.map.has(t)||this.map.set(t,t.defaultValue()),this.map.get(t)}delete(t){return this.map.delete(t),this}has(t){return this.map.has(t)}keys(){return this.map.keys()}}function w(o){return typeof ArrayBuffer<"u"&&o instanceof ArrayBuffer}function l(o){return typeof Blob<"u"&&o instanceof Blob}function f(o){return typeof FormData<"u"&&o instanceof FormData}class O{constructor(t,e,n,s){let i;if(this.url=e,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=t.toUpperCase(),function y(o){switch(o){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}(this.method)||s?(this.body=void 0!==n?n:null,i=s):i=n,i&&(this.reportProgress=!!i.reportProgress,this.withCredentials=!!i.withCredentials,i.responseType&&(this.responseType=i.responseType),i.headers&&(this.headers=i.headers),i.context&&(this.context=i.context),i.params&&(this.params=i.params)),this.headers||(this.headers=new D),this.context||(this.context=new c),this.params){const a=this.params.toString();if(0===a.length)this.urlWithParams=e;else{const m=e.indexOf("?");this.urlWithParams=e+(-1===m?"?":m<e.length-1?"&":"")+a}}else this.params=new u,this.urlWithParams=e}serializeBody(){return null===this.body?null:w(this.body)||l(this.body)||f(this.body)||function I(o){return typeof URLSearchParams<"u"&&o instanceof URLSearchParams}(this.body)||"string"==typeof this.body?this.body:this.body instanceof u?this.body.toString():"object"==typeof this.body||"boolean"==typeof this.body||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return null===this.body||f(this.body)?null:l(this.body)?this.body.type||null:w(this.body)?null:"string"==typeof this.body?"text/plain":this.body instanceof u?"application/x-www-form-urlencoded;charset=UTF-8":"object"==typeof this.body||"number"==typeof this.body||"boolean"==typeof this.body?"application/json":null}clone(t={}){const e=t.method||this.method,n=t.url||this.url,s=t.responseType||this.responseType,i=void 0!==t.body?t.body:this.body,a=void 0!==t.withCredentials?t.withCredentials:this.withCredentials,m=void 0!==t.reportProgress?t.reportProgress:this.reportProgress;let g=t.headers||this.headers,P=t.params||this.params;const U=t.context??this.context;return void 0!==t.setHeaders&&(g=Object.keys(t.setHeaders).reduce((Y,N)=>Y.set(N,t.setHeaders[N]),g)),t.setParams&&(P=Object.keys(t.setParams).reduce((Y,N)=>Y.set(N,t.setParams[N]),P)),new O(e,n,i,{params:P,headers:g,context:U,reportProgress:m,responseType:s,withCredentials:a})}}var L=function(o){return o[o.Sent=0]="Sent",o[o.UploadProgress=1]="UploadProgress",o[o.ResponseHeader=2]="ResponseHeader",o[o.DownloadProgress=3]="DownloadProgress",o[o.Response=4]="Response",o[o.User=5]="User",o}(L||{});class ne{constructor(t,e=200,n="OK"){this.headers=t.headers||new D,this.status=void 0!==t.status?t.status:e,this.statusText=t.statusText||n,this.url=t.url||null,this.ok=this.status>=200&&this.status<300}}class re extends ne{constructor(t={}){super(t),this.type=L.Response,this.body=void 0!==t.body?t.body:null}clone(t={}){return new re({body:void 0!==t.body?t.body:this.body,headers:t.headers||this.headers,status:void 0!==t.status?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0})}}function he(o,t){return{body:t,headers:o.headers,context:o.context,observe:o.observe,params:o.params,reportProgress:o.reportProgress,responseType:o.responseType,withCredentials:o.withCredentials}}let pe=(()=>{class o{constructor(e){this.handler=e}request(e,n,s={}){let i;if(e instanceof O)i=e;else{let g,P;g=s.headers instanceof D?s.headers:new D(s.headers),s.params&&(P=s.params instanceof u?s.params:new u({fromObject:s.params})),i=new O(e,n,void 0!==s.body?s.body:null,{headers:g,context:s.context,params:P,reportProgress:s.reportProgress,responseType:s.responseType||"json",withCredentials:s.withCredentials})}const a=(0,S.of)(i).pipe((0,z.b)(g=>this.handler.handle(g)));if(e instanceof O||"events"===s.observe)return a;const m=a.pipe((0,W.h)(g=>g instanceof re));switch(s.observe||"body"){case"body":switch(i.responseType){case"arraybuffer":return m.pipe((0,_.U)(g=>{if(null!==g.body&&!(g.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return g.body}));case"blob":return m.pipe((0,_.U)(g=>{if(null!==g.body&&!(g.body instanceof Blob))throw new Error("Response is not a Blob.");return g.body}));case"text":return m.pipe((0,_.U)(g=>{if(null!==g.body&&"string"!=typeof g.body)throw new Error("Response is not a string.");return g.body}));default:return m.pipe((0,_.U)(g=>g.body))}case"response":return m;default:throw new Error(`Unreachable: unhandled observe type ${s.observe}}`)}}delete(e,n={}){return this.request("DELETE",e,n)}get(e,n={}){return this.request("GET",e,n)}head(e,n={}){return this.request("HEAD",e,n)}jsonp(e,n){return this.request("JSONP",e,{params:(new u).append(n,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,n={}){return this.request("OPTIONS",e,n)}patch(e,n,s={}){return this.request("PATCH",e,he(s,n))}post(e,n,s={}){return this.request("POST",e,he(s,n))}put(e,n,s={}){return this.request("PUT",e,he(s,n))}}return o.\u0275fac=function(e){return new(e||o)(d.LFG(J))},o.\u0275prov=d.Yz7({token:o,factory:o.\u0275fac}),o})();var Se=h(6593);const Ye=["*"];let ce;function oe(o){return function Ve(){if(void 0===ce&&(ce=null,typeof window<"u")){const o=window;void 0!==o.trustedTypes&&(ce=o.trustedTypes.createPolicy("angular#components",{createHTML:t=>t}))}return ce}()?.createHTML(o)||o}function be(o){return Error(`Unable to find icon with the name "${o}"`)}function Oe(o){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${o}".`)}function Pe(o){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${o}".`)}class ${constructor(t,e,n){this.url=t,this.svgText=e,this.options=n}}let le=(()=>{class o{constructor(e,n,s,i){this._httpClient=e,this._sanitizer=n,this._errorHandler=i,this._svgIconConfigs=new Map,this._iconSetConfigs=new Map,this._cachedIconsByUrl=new Map,this._inProgressUrlFetches=new Map,this._fontCssClassesByAlias=new Map,this._resolvers=[],this._defaultFontSetClass=["material-icons","mat-ligature-font"],this._document=s}addSvgIcon(e,n,s){return this.addSvgIconInNamespace("",e,n,s)}addSvgIconLiteral(e,n,s){return this.addSvgIconLiteralInNamespace("",e,n,s)}addSvgIconInNamespace(e,n,s,i){return this._addSvgIconConfig(e,n,new $(s,null,i))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,n,s,i){const a=this._sanitizer.sanitize(d.q3G.HTML,s);if(!a)throw Pe(s);const m=oe(a);return this._addSvgIconConfig(e,n,new $("",m,i))}addSvgIconSet(e,n){return this.addSvgIconSetInNamespace("",e,n)}addSvgIconSetLiteral(e,n){return this.addSvgIconSetLiteralInNamespace("",e,n)}addSvgIconSetInNamespace(e,n,s){return this._addSvgIconSetConfig(e,new $(n,null,s))}addSvgIconSetLiteralInNamespace(e,n,s){const i=this._sanitizer.sanitize(d.q3G.HTML,n);if(!i)throw Pe(n);const a=oe(i);return this._addSvgIconSetConfig(e,new $("",a,s))}registerFontClassAlias(e,n=e){return this._fontCssClassesByAlias.set(e,n),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(e){const n=this._sanitizer.sanitize(d.q3G.RESOURCE_URL,e);if(!n)throw Oe(e);const s=this._cachedIconsByUrl.get(n);return s?(0,S.of)(de(s)):this._loadSvgIconFromConfig(new $(e,null)).pipe((0,T.b)(i=>this._cachedIconsByUrl.set(n,i)),(0,_.U)(i=>de(i)))}getNamedSvgIcon(e,n=""){const s=Me(n,e);let i=this._svgIconConfigs.get(s);if(i)return this._getSvgFromConfig(i);if(i=this._getIconConfigFromResolvers(n,e),i)return this._svgIconConfigs.set(s,i),this._getSvgFromConfig(i);const a=this._iconSetConfigs.get(n);return a?this._getSvgFromIconSetConfigs(e,a):(0,b._)(be(s))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?(0,S.of)(de(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe((0,_.U)(n=>de(n)))}_getSvgFromIconSetConfigs(e,n){const s=this._extractIconWithNameFromAnySet(e,n);if(s)return(0,S.of)(s);const i=n.filter(a=>!a.svgText).map(a=>this._loadSvgIconSetFromConfig(a).pipe((0,v.K)(m=>{const P=`Loading icon set URL: ${this._sanitizer.sanitize(d.q3G.RESOURCE_URL,a.url)} failed: ${m.message}`;return this._errorHandler.handleError(new Error(P)),(0,S.of)(null)})));return(0,H.D)(i).pipe((0,_.U)(()=>{const a=this._extractIconWithNameFromAnySet(e,n);if(!a)throw be(e);return a}))}_extractIconWithNameFromAnySet(e,n){for(let s=n.length-1;s>=0;s--){const i=n[s];if(i.svgText&&i.svgText.toString().indexOf(e)>-1){const a=this._svgElementFromConfig(i),m=this._extractSvgIconFromSet(a,e,i.options);if(m)return m}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe((0,T.b)(n=>e.svgText=n),(0,_.U)(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?(0,S.of)(null):this._fetchIcon(e).pipe((0,T.b)(n=>e.svgText=n))}_extractSvgIconFromSet(e,n,s){const i=e.querySelector(`[id="${n}"]`);if(!i)return null;const a=i.cloneNode(!0);if(a.removeAttribute("id"),"svg"===a.nodeName.toLowerCase())return this._setSvgAttributes(a,s);if("symbol"===a.nodeName.toLowerCase())return this._setSvgAttributes(this._toSvgElement(a),s);const m=this._svgElementFromString(oe("<svg></svg>"));return m.appendChild(a),this._setSvgAttributes(m,s)}_svgElementFromString(e){const n=this._document.createElement("DIV");n.innerHTML=e;const s=n.querySelector("svg");if(!s)throw Error("<svg> tag not found");return s}_toSvgElement(e){const n=this._svgElementFromString(oe("<svg></svg>")),s=e.attributes;for(let i=0;i<s.length;i++){const{name:a,value:m}=s[i];"id"!==a&&n.setAttribute(a,m)}for(let i=0;i<e.childNodes.length;i++)e.childNodes[i].nodeType===this._document.ELEMENT_NODE&&n.appendChild(e.childNodes[i].cloneNode(!0));return n}_setSvgAttributes(e,n){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),n&&n.viewBox&&e.setAttribute("viewBox",n.viewBox),e}_fetchIcon(e){const{url:n,options:s}=e,i=s?.withCredentials??!1;if(!this._httpClient)throw function Qe(){return Error("Could not find HttpClient provider for use with Angular Material icons. Please include the HttpClientModule from @angular/common/http in your app imports.")}();if(null==n)throw Error(`Cannot fetch icon from URL "${n}".`);const a=this._sanitizer.sanitize(d.q3G.RESOURCE_URL,n);if(!a)throw Oe(n);const m=this._inProgressUrlFetches.get(a);if(m)return m;const g=this._httpClient.get(a,{responseType:"text",withCredentials:i}).pipe((0,_.U)(P=>oe(P)),(0,C.x)(()=>this._inProgressUrlFetches.delete(a)),(0,M.B)());return this._inProgressUrlFetches.set(a,g),g}_addSvgIconConfig(e,n,s){return this._svgIconConfigs.set(Me(e,n),s),this}_addSvgIconSetConfig(e,n){const s=this._iconSetConfigs.get(e);return s?s.push(n):this._iconSetConfigs.set(e,[n]),this}_svgElementFromConfig(e){if(!e.svgElement){const n=this._svgElementFromString(e.svgText);this._setSvgAttributes(n,e.options),e.svgElement=n}return e.svgElement}_getIconConfigFromResolvers(e,n){for(let s=0;s<this._resolvers.length;s++){const i=this._resolvers[s](n,e);if(i)return tt(i)?new $(i.url,null,i.options):new $(i,null)}}}return o.\u0275fac=function(e){return new(e||o)(d.LFG(pe,8),d.LFG(Se.H7),d.LFG(x.K0,8),d.LFG(d.qLn))},o.\u0275prov=d.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();function de(o){return o.cloneNode(!0)}function Me(o,t){return o+":"+t}function tt(o){return!(!o.url||!o.options)}const nt=(0,r.pj)(class{constructor(o){this._elementRef=o}}),rt=new d.OlP("MAT_ICON_DEFAULT_OPTIONS"),ot=new d.OlP("mat-icon-location",{providedIn:"root",factory:function st(){const o=(0,d.f3M)(x.K0),t=o?o.location:null;return{getPathname:()=>t?t.pathname+t.search:""}}}),Re=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],it=Re.map(o=>`[${o}]`).join(", "),at=/^url\(['"]?#(.*?)['"]?\)$/;let ct=(()=>{class o extends nt{get inline(){return this._inline}set inline(e){this._inline=(0,R.Ig)(e)}get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}get fontSet(){return this._fontSet}set fontSet(e){const n=this._cleanupFontValue(e);n!==this._fontSet&&(this._fontSet=n,this._updateFontIconClasses())}get fontIcon(){return this._fontIcon}set fontIcon(e){const n=this._cleanupFontValue(e);n!==this._fontIcon&&(this._fontIcon=n,this._updateFontIconClasses())}constructor(e,n,s,i,a,m){super(e),this._iconRegistry=n,this._location=i,this._errorHandler=a,this._inline=!1,this._previousFontSetClass=[],this._currentIconFetch=E.w0.EMPTY,m&&(m.color&&(this.color=this.defaultColor=m.color),m.fontSet&&(this.fontSet=m.fontSet)),s||e.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(e){if(!e)return["",""];const n=e.split(":");switch(n.length){case 1:return["",n[0]];case 2:return n;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){const e=this._elementsWithExternalReferences;if(e&&e.size){const n=this._location.getPathname();n!==this._previousPath&&(this._previousPath=n,this._prependPathToReferences(n))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();const n=this._location.getPathname();this._previousPath=n,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(n),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){const e=this._elementRef.nativeElement;let n=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();n--;){const s=e.childNodes[n];(1!==s.nodeType||"svg"===s.nodeName.toLowerCase())&&s.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;const e=this._elementRef.nativeElement,n=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(s=>s.length>0);this._previousFontSetClass.forEach(s=>e.classList.remove(s)),n.forEach(s=>e.classList.add(s)),this._previousFontSetClass=n,this.fontIcon!==this._previousFontIconClass&&!n.includes("mat-ligature-font")&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return"string"==typeof e?e.trim().split(" ")[0]:e}_prependPathToReferences(e){const n=this._elementsWithExternalReferences;n&&n.forEach((s,i)=>{s.forEach(a=>{i.setAttribute(a.name,`url('${e}#${a.value}')`)})})}_cacheChildrenWithExternalReferences(e){const n=e.querySelectorAll(it),s=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let i=0;i<n.length;i++)Re.forEach(a=>{const m=n[i],g=m.getAttribute(a),P=g?g.match(at):null;if(P){let U=s.get(m);U||(U=[],s.set(m,U)),U.push({name:a,value:P[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){const[n,s]=this._splitIconName(e);n&&(this._svgNamespace=n),s&&(this._svgName=s),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(s,n).pipe((0,A.q)(1)).subscribe(i=>this._setSvgElement(i),i=>{this._errorHandler.handleError(new Error(`Error retrieving icon ${n}:${s}! ${i.message}`))})}}}return o.\u0275fac=function(e){return new(e||o)(d.Y36(d.SBq),d.Y36(le),d.$8M("aria-hidden"),d.Y36(ot),d.Y36(d.qLn),d.Y36(rt,8))},o.\u0275cmp=d.Xpm({type:o,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:8,hostBindings:function(e,n){2&e&&(d.uIk("data-mat-icon-type",n._usingFontIcon()?"font":"svg")("data-mat-icon-name",n._svgName||n.fontIcon)("data-mat-icon-namespace",n._svgNamespace||n.fontSet)("fontIcon",n._usingFontIcon()?n.fontIcon:null),d.ekj("mat-icon-inline",n.inline)("mat-icon-no-color","primary"!==n.color&&"accent"!==n.color&&"warn"!==n.color))},inputs:{color:"color",inline:"inline",svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],features:[d.qOj],ngContentSelectors:Ye,decls:1,vars:0,template:function(e,n){1&e&&(d.F$t(),d.Hsn(0))},styles:[".mat-icon{-webkit-user-select:none;user-select:none;background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px;overflow:hidden}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}.mat-icon.mat-ligature-font[fontIcon]::before{content:attr(fontIcon)}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1, 1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}"],encapsulation:2,changeDetection:0}),o})(),lt=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=d.oAB({type:o}),o.\u0275inj=d.cJS({imports:[r.BQ,r.BQ]}),o})()},1791:(Q,F,h)=>{h.d(F,{c:()=>ee,t:()=>y});var d=h(8645),r=h(7394),R=h(7715),x=h(6232),S=h(5879),b=h(1631),H=h(9773);const E=S.GuJ,_=Symbol("__destroy"),v=Symbol("__decoratorApplied");function C(l){return"string"==typeof l?Symbol(`__destroy__${l}`):_}function A(l,f){l[f]||(l[f]=new d.x)}function z(l,f){l[f]&&(l[f].next(),l[f].complete(),l[f]=null)}function W(l){l instanceof r.w0&&l.unsubscribe()}function j(l,f){return function(){if(l&&l.call(this),z(this,C()),f.arrayName&&function J(l){Array.isArray(l)&&l.forEach(W)}(this[f.arrayName]),f.checkProperties)for(const I in this)f.blackList?.includes(I)||W(this[I])}}function ee(l={}){return f=>{!function T(l){return!!l[E]}(f)?function D(l,f){l.prototype.ngOnDestroy=j(l.prototype.ngOnDestroy,f)}(f,l):function se(l,f){const I=l.\u0275pipe;I.onDestroy=j(I.onDestroy,f)}(f,l),function M(l){l.prototype[v]=!0}(f)}}const Z=7,K=Symbol("CheckerHasBeenSet");function k(l){const f=S.dqk.Zone;return f&&"function"==typeof f.root?.run?f.root.run(l):l()}const p=!1;function y(l,f){return I=>{const O=C(f);"string"==typeof f?function c(l,f,I){const O=l[f];if(p&&"function"!=typeof O)throw new Error(`${l.constructor.name} is using untilDestroyed but doesn't implement ${f}`);A(l,I),l[f]=function(){O.apply(this,arguments),z(this,I),l[f]=O}}(l,f,O):(p&&function w(l){const f=Object.getPrototypeOf(l);if(!(v in f))throw new Error("untilDestroyed operator cannot be used inside directives or components or providers that are not decorated with UntilDestroy decorator")}(l),A(l,O));const L=l[O];return p&&function te(l,f){l[K]||function G(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha||typeof process<"u"&&"[object process]"===Object.prototype.toString.call(process)}()||(k(()=>(0,R.D)(Promise.resolve()).pipe((0,b.z)(()=>{let I;try{I=(0,S.EEQ)(l)}catch{I=null}const O=I?.lView;if(null==O)return x.E;const L=O[Z]||(O[Z]=[]),ne=new d.x;return L.push(function(){k(()=>{ne.next(),ne.complete()})}),ne}),(0,b.z)(()=>Promise.resolve())).subscribe(()=>{(f.observed??f.observers.length>0)&&console.warn(function u(l){return`\n  The ${l.constructor.name} still has subscriptions that haven't been unsubscribed.\n  This may happen if the class extends another class decorated with @UntilDestroy().\n  The child class implements its own ngOnDestroy() method but doesn't call super.ngOnDestroy().\n  Let's look at the following example:\n  @UntilDestroy()\n  @Directive()\n  export abstract class BaseDirective {}\n  @Component({ template: '' })\n  export class ConcreteComponent extends BaseDirective implements OnDestroy {\n    constructor() {\n      super();\n      someObservable$.pipe(untilDestroyed(this)).subscribe();\n    }\n    ngOnDestroy(): void {\n      // Some logic here...\n    }\n  }\n  The BaseDirective.ngOnDestroy() will not be called since Angular will call ngOnDestroy()\n  on the ConcreteComponent, but not on the BaseDirective.\n  One of the solutions is to declare an empty ngOnDestroy method on the BaseDirective:\n  @UntilDestroy()\n  @Directive()\n  export abstract class BaseDirective {\n    ngOnDestroy(): void {}\n  }\n  @Component({ template: '' })\n  export class ConcreteComponent extends BaseDirective implements OnDestroy {\n    constructor() {\n      super();\n      someObservable$.pipe(untilDestroyed(this)).subscribe();\n    }\n    ngOnDestroy(): void {\n      // Some logic here...\n      super.ngOnDestroy();\n    }\n  }\n  `}(l))})),l[K]=!0)}(l,L),I.pipe((0,H.R)(L))}}}}]);