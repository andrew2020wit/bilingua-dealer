"use strict";(self.webpackChunkangular_bilingua=self.webpackChunkangular_bilingua||[]).push([[698],{698:(b,u,r)=>{r.r(u),r.d(u,{SettingsComponent:()=>_});var m=r(6814),l=r(2296),y=r(4408),t=r(5879),g=r(5195),d=r(8180),h=r(1839),f=r(144);let v=(()=>{class a{constructor(e,n){this.loader=e,this.exportImportService=n,this.update=new t.vpe}readMorphologyReplaceRules(e){const n=e?.target?.files[0];if(!n)return;const i=new FileReader;i.onload=c=>{const o=c?.target?.result;if(!o)return;const p=this.exportImportService.importMorphologyReplaceRules(o);p&&(this.loader.start(),p.pipe((0,d.q)(1)).subscribe(()=>{this.loader.stop()}))},i.readAsText(n)}readMorphology(e){const n=e?.target?.files[0];if(!n)return;const i=new FileReader;i.onload=c=>{const o=c?.target?.result;if(!o)return;const p=this.exportImportService.importMorphology(o);p&&(this.loader.start(),p.pipe((0,d.q)(1)).subscribe(()=>{this.loader.stop()}))},i.readAsText(n)}readDictionary(e){const n=e?.target?.files[0];if(!n)return;const i=new FileReader;i.onload=c=>{const o=c?.target?.result;if(!o)return;const p=this.exportImportService.importDictionary(o);p&&(this.loader.start(),p.pipe((0,d.q)(1)).subscribe(()=>{this.loader.stop()}))},i.readAsText(n)}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(h.D),t.Y36(f.U))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-import-dictionary"]],outputs:{update:"update"},standalone:!0,features:[t.jDz],decls:16,vars:0,consts:[[1,"create-import-block"],["mat-button","","color","primary",1,"link-item",3,"click"],[1,"info"],["type","file","accept",".json",1,"hidden-file-input",3,"change"],["morphologyFileInput",""],["morphologyReplaceRulesFileInput",""],["dictionaryFileInput",""]],template:function(e,n){if(1&e){const i=t.EpF();t.TgZ(0,"mat-card")(1,"div",0)(2,"button",1),t.NdJ("click",function(){t.CHM(i);const o=t.MAs(11);return t.KtG(o.click())}),t._uU(3,"Import (replace) morphology"),t.qZA(),t.TgZ(4,"button",1),t.NdJ("click",function(){t.CHM(i);const o=t.MAs(13);return t.KtG(o.click())}),t._uU(5,"Import (replace) MorphologyReplaceRules"),t.qZA(),t.TgZ(6,"button",1),t.NdJ("click",function(){t.CHM(i);const o=t.MAs(15);return t.KtG(o.click())}),t._uU(7,"Import (replace) dictionary"),t.qZA()(),t.TgZ(8,"div",2),t._uU(9," You have to reload web-application to apply new dictionary. "),t.qZA()(),t.TgZ(10,"input",3,4),t.NdJ("change",function(o){return n.readMorphology(o)}),t.qZA(),t.TgZ(12,"input",3,5),t.NdJ("change",function(o){return n.readMorphologyReplaceRules(o)}),t.qZA(),t.TgZ(14,"input",3,6),t.NdJ("change",function(o){return n.readDictionary(o)}),t.qZA()}},dependencies:[m.ez,l.ot,l.lW,g.QW,g.a8],styles:[".create-import-block[_ngcontent-%COMP%]{padding:var(--padding-main);margin-top:var(--padding-main)}.create-import-block[_ngcontent-%COMP%]{display:flex;justify-content:center;width:100%;box-sizing:border-box}.hidden-file-input[_ngcontent-%COMP%]{display:none}.copyright[_ngcontent-%COMP%]{padding:var(--padding-main);width:100%;box-sizing:border-box;text-align:center;font-size:10px;color:gray}mat-card[_ngcontent-%COMP%]{margin-top:var(--padding-main)}.info[_ngcontent-%COMP%]{margin:auto;padding:var(--padding-small)}"],changeDetection:0}),a})();var C=r(5152),S=r(2969);let _=(()=>{class a{constructor(e,n){this.customStylesService=e,this.localStorageService=n,this.copyToClipboardState=this.localStorageService.copyToClipboard,this.showDictionarySate=this.localStorageService.showDictionary}copyToClipboard(e){this.localStorageService.copyToClipboard=e,this.copyToClipboardState=e}showDictionary(e){this.localStorageService.showDictionary=e,this.showDictionarySate=e}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(C.N),t.Y36(S.n))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-settings"]],standalone:!0,features:[t.jDz],decls:21,vars:2,consts:[[1,"component-content"],[1,"header"],["mat-button","","color","primary","routerLink","/"],[1,"title"],[1,"settings"],[1,"divider"],[1,"setting-item"],["mat-button","","color","primary",3,"click"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"button",2),t._uU(3," Go Home. "),t.qZA(),t.TgZ(4,"div",3),t._uU(5,"Settings"),t.qZA()(),t.TgZ(6,"div",4),t._UZ(7,"div",5),t.TgZ(8,"div",6)(9,"button",7),t.NdJ("click",function(){return n.customStylesService.resetAllStyles()}),t._uU(10," Reset all styles "),t.qZA()(),t._UZ(11,"div",5),t.TgZ(12,"div",6)(13,"button",7),t.NdJ("click",function(){return n.copyToClipboard(!n.copyToClipboardState)}),t._uU(14),t.qZA()(),t._UZ(15,"div",5),t.TgZ(16,"div",6)(17,"button",7),t.NdJ("click",function(){return n.showDictionary(!n.showDictionarySate)}),t._uU(18),t.qZA()(),t._UZ(19,"div",5)(20,"app-import-dictionary"),t.qZA()()),2&e&&(t.xp6(14),t.hij(" Copy to clipboard: ",n.copyToClipboardState," "),t.xp6(4),t.hij(" Show dictionary: ",n.showDictionarySate," "))},dependencies:[m.ez,l.ot,l.lW,y.rH,v],styles:[".component-content[_ngcontent-%COMP%]{padding:var(--padding-main)}.component-content[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:var(--padding-main)}.component-content[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:18px;font-weight:700}.component-content[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%]{width:100%;min-width:100%;border-top:1px dashed gray;margin:var(--padding-main) 0}.component-content[_ngcontent-%COMP%]   .settings[_ngcontent-%COMP%]   .setting-item[_ngcontent-%COMP%]{justify-content:center;display:flex}"]}),a})()}}]);