"use strict";(self.webpackChunkangular_bilingua=self.webpackChunkangular_bilingua||[]).push([[284],{5284:(gt,T,s)=>{s.r(T),s.d(T,{DictionaryViewerComponent:()=>ct});var m=s(6814),P=s(2032),d=s(6223),e=s(5879),c=s(3680),w=s(9829),g=s(3651),_=s(4300),f=s(2495),E=s(2831),p=s(6825),F=s(7394),I=s(8645),B=s(4911),v=s(3019),x=s(2096),y=s(2438),h=s(6028),V=s(8484),O=s(9157),Y=s(7921),A=s(4664),b=s(8180),M=s(2181),H=s(7398),Z=s(9397),G=s(5177),N=s(9388);const U=["panel"];function W(n,a){if(1&n&&(e.TgZ(0,"div",0,1),e.Hsn(2),e.qZA()),2&n){const t=a.id,i=e.oxw();e.Q6J("id",i.id)("ngClass",i._classList)("@panelAnimation",i.isOpen?"visible":"hidden"),e.uIk("aria-label",i.ariaLabel||null)("aria-labelledby",i._getPanelAriaLabelledby(t))}}const K=["*"],z=(0,p.X$)("panelAnimation",[(0,p.SB)("void, hidden",(0,p.oB)({opacity:0,transform:"scaleY(0.8)"})),(0,p.eR)(":enter, hidden => visible",[(0,p.ru)([(0,p.jt)("0.03s linear",(0,p.oB)({opacity:1})),(0,p.jt)("0.12s cubic-bezier(0, 0, 0.2, 1)",(0,p.oB)({transform:"scaleY(1)"}))])]),(0,p.eR)(":leave, visible => hidden",[(0,p.jt)("0.075s linear",(0,p.oB)({opacity:0}))])]);let X=0;class j{constructor(a,t){this.source=a,this.option=t}}const J=(0,c.Kr)(class{}),D=new e.OlP("mat-autocomplete-default-options",{providedIn:"root",factory:function Q(){return{autoActiveFirstOption:!1,autoSelectActiveOption:!1,hideSingleSelectionIndicator:!1}}});let $=(()=>{class n extends J{get isOpen(){return this._isOpen&&this.showPanel}_setColor(t){this._color=t,this._setThemeClasses(this._classList)}get autoActiveFirstOption(){return this._autoActiveFirstOption}set autoActiveFirstOption(t){this._autoActiveFirstOption=(0,f.Ig)(t)}get autoSelectActiveOption(){return this._autoSelectActiveOption}set autoSelectActiveOption(t){this._autoSelectActiveOption=(0,f.Ig)(t)}set classList(t){this._classList=t&&t.length?(0,f.du)(t).reduce((i,o)=>(i[o]=!0,i),{}):{},this._setVisibilityClasses(this._classList),this._setThemeClasses(this._classList),this._elementRef.nativeElement.className=""}constructor(t,i,o,l){super(),this._changeDetectorRef=t,this._elementRef=i,this._defaults=o,this._activeOptionChanges=F.w0.EMPTY,this.showPanel=!1,this._isOpen=!1,this.displayWith=null,this.optionSelected=new e.vpe,this.opened=new e.vpe,this.closed=new e.vpe,this.optionActivated=new e.vpe,this._classList={},this.id="mat-autocomplete-"+X++,this.inertGroups=l?.SAFARI||!1,this._autoActiveFirstOption=!!o.autoActiveFirstOption,this._autoSelectActiveOption=!!o.autoSelectActiveOption}ngAfterContentInit(){this._keyManager=new _.s1(this.options).withWrap().skipPredicate(this._skipPredicate),this._activeOptionChanges=this._keyManager.change.subscribe(t=>{this.isOpen&&this.optionActivated.emit({source:this,option:this.options.toArray()[t]||null})}),this._setVisibility()}ngOnDestroy(){this._keyManager?.destroy(),this._activeOptionChanges.unsubscribe()}_setScrollTop(t){this.panel&&(this.panel.nativeElement.scrollTop=t)}_getScrollTop(){return this.panel?this.panel.nativeElement.scrollTop:0}_setVisibility(){this.showPanel=!!this.options.length,this._setVisibilityClasses(this._classList),this._changeDetectorRef.markForCheck()}_emitSelectEvent(t){const i=new j(this,t);this.optionSelected.emit(i)}_getPanelAriaLabelledby(t){return this.ariaLabel?null:this.ariaLabelledby?(t?t+" ":"")+this.ariaLabelledby:t}_setVisibilityClasses(t){t[this._visibleClass]=this.showPanel,t[this._hiddenClass]=!this.showPanel}_setThemeClasses(t){t["mat-primary"]="primary"===this._color,t["mat-warn"]="warn"===this._color,t["mat-accent"]="accent"===this._color}_skipPredicate(t){return t.disabled}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(e.sBO),e.Y36(e.SBq),e.Y36(D),e.Y36(E.t4))},n.\u0275dir=e.lG2({type:n,viewQuery:function(t,i){if(1&t&&(e.Gf(e.Rgc,7),e.Gf(U,5)),2&t){let o;e.iGM(o=e.CRH())&&(i.template=o.first),e.iGM(o=e.CRH())&&(i.panel=o.first)}},inputs:{ariaLabel:["aria-label","ariaLabel"],ariaLabelledby:["aria-labelledby","ariaLabelledby"],displayWith:"displayWith",autoActiveFirstOption:"autoActiveFirstOption",autoSelectActiveOption:"autoSelectActiveOption",panelWidth:"panelWidth",classList:["class","classList"]},outputs:{optionSelected:"optionSelected",opened:"opened",closed:"closed",optionActivated:"optionActivated"},features:[e.qOj]}),n})(),q=(()=>{class n extends ${constructor(){super(...arguments),this._visibleClass="mat-mdc-autocomplete-visible",this._hiddenClass="mat-mdc-autocomplete-hidden",this._hideSingleSelectionIndicator=this._defaults.hideSingleSelectionIndicator??!1}get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(t){this._hideSingleSelectionIndicator=(0,f.Ig)(t),this._syncParentProperties()}_syncParentProperties(){if(this.options)for(const t of this.options)t._changeDetectorRef.markForCheck()}_skipPredicate(t){return!1}}return n.\u0275fac=function(){let a;return function(i){return(a||(a=e.n5z(n)))(i||n)}}(),n.\u0275cmp=e.Xpm({type:n,selectors:[["mat-autocomplete"]],contentQueries:function(t,i,o){if(1&t&&(e.Suo(o,c.K7,5),e.Suo(o,c.ey,5)),2&t){let l;e.iGM(l=e.CRH())&&(i.optionGroups=l),e.iGM(l=e.CRH())&&(i.options=l)}},hostAttrs:["ngSkipHydration","",1,"mat-mdc-autocomplete"],inputs:{disableRipple:"disableRipple",hideSingleSelectionIndicator:"hideSingleSelectionIndicator"},exportAs:["matAutocomplete"],features:[e._Bn([{provide:c.HF,useExisting:n}]),e.qOj],ngContentSelectors:K,decls:1,vars:0,consts:[["role","listbox",1,"mat-mdc-autocomplete-panel","mdc-menu-surface","mdc-menu-surface--open",3,"id","ngClass"],["panel",""]],template:function(t,i){1&t&&(e.F$t(),e.YNc(0,W,3,5,"ng-template"))},dependencies:[m.mk],styles:["div.mat-mdc-autocomplete-panel{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);width:100%;max-height:256px;visibility:hidden;transform-origin:center top;overflow:auto;padding:8px 0;border-radius:4px;box-sizing:border-box;position:static;background-color:var(--mat-autocomplete-background-color)}.cdk-high-contrast-active div.mat-mdc-autocomplete-panel{outline:solid 1px}.cdk-overlay-pane:not(.mat-mdc-autocomplete-panel-above) div.mat-mdc-autocomplete-panel{border-top-left-radius:0;border-top-right-radius:0}.mat-mdc-autocomplete-panel-above div.mat-mdc-autocomplete-panel{border-bottom-left-radius:0;border-bottom-right-radius:0;transform-origin:center bottom}div.mat-mdc-autocomplete-panel.mat-mdc-autocomplete-visible{visibility:visible}div.mat-mdc-autocomplete-panel.mat-mdc-autocomplete-hidden{visibility:hidden}mat-autocomplete{display:none}"],encapsulation:2,data:{animation:[z]},changeDetection:0}),n})();const tt={provide:d.JU,useExisting:(0,e.Gpc)(()=>L),multi:!0},R=new e.OlP("mat-autocomplete-scroll-strategy"),it={provide:R,deps:[g.aV],useFactory:function et(n){return()=>n.scrollStrategies.reposition()}};let ot=(()=>{class n{get autocompleteDisabled(){return this._autocompleteDisabled}set autocompleteDisabled(t){this._autocompleteDisabled=(0,f.Ig)(t)}constructor(t,i,o,l,r,C,pt,ut,ht,dt,mt){this._element=t,this._overlay=i,this._viewContainerRef=o,this._zone=l,this._changeDetectorRef=r,this._dir=pt,this._formField=ut,this._document=ht,this._viewportRuler=dt,this._defaults=mt,this._componentDestroyed=!1,this._autocompleteDisabled=!1,this._manuallyFloatingLabel=!1,this._viewportSubscription=F.w0.EMPTY,this._canOpenOnNextFocus=!0,this._closeKeyEventStream=new I.x,this._windowBlurHandler=()=>{this._canOpenOnNextFocus=this._document.activeElement!==this._element.nativeElement||this.panelOpen},this._onChange=()=>{},this._onTouched=()=>{},this.position="auto",this.autocompleteAttribute="off",this._overlayAttached=!1,this.optionSelections=(0,B.P)(()=>{const u=this.autocomplete?this.autocomplete.options:null;return u?u.changes.pipe((0,Y.O)(u),(0,A.w)(()=>(0,v.T)(...u.map(ft=>ft.onSelectionChange)))):this._zone.onStable.pipe((0,b.q)(1),(0,A.w)(()=>this.optionSelections))}),this._handlePanelKeydown=u=>{(u.keyCode===h.hY&&!(0,h.Vb)(u)||u.keyCode===h.LH&&(0,h.Vb)(u,"altKey"))&&(this._pendingAutoselectedOption&&(this._updateNativeInputValue(this._valueBeforeAutoSelection??""),this._pendingAutoselectedOption=null),this._closeKeyEventStream.next(),this._resetActiveItem(),u.stopPropagation(),u.preventDefault())},this._trackedModal=null,this._scrollStrategy=C}ngAfterViewInit(){const t=this._getWindow();typeof t<"u"&&this._zone.runOutsideAngular(()=>t.addEventListener("blur",this._windowBlurHandler))}ngOnChanges(t){t.position&&this._positionStrategy&&(this._setStrategyPositions(this._positionStrategy),this.panelOpen&&this._overlayRef.updatePosition())}ngOnDestroy(){const t=this._getWindow();typeof t<"u"&&t.removeEventListener("blur",this._windowBlurHandler),this._viewportSubscription.unsubscribe(),this._componentDestroyed=!0,this._destroyPanel(),this._closeKeyEventStream.complete(),this._clearFromModal()}get panelOpen(){return this._overlayAttached&&this.autocomplete.showPanel}openPanel(){this._attachOverlay(),this._floatLabel()}closePanel(){this._resetLabel(),this._overlayAttached&&(this.panelOpen&&this._zone.run(()=>{this.autocomplete.closed.emit()}),this.autocomplete._isOpen=this._overlayAttached=!1,this._pendingAutoselectedOption=null,this._overlayRef&&this._overlayRef.hasAttached()&&(this._overlayRef.detach(),this._closingActionsSubscription.unsubscribe()),this._updatePanelState(),this._componentDestroyed||this._changeDetectorRef.detectChanges())}updatePosition(){this._overlayAttached&&this._overlayRef.updatePosition()}get panelClosingActions(){return(0,v.T)(this.optionSelections,this.autocomplete._keyManager.tabOut.pipe((0,M.h)(()=>this._overlayAttached)),this._closeKeyEventStream,this._getOutsideClickStream(),this._overlayRef?this._overlayRef.detachments().pipe((0,M.h)(()=>this._overlayAttached)):(0,x.of)()).pipe((0,H.U)(t=>t instanceof c.rN?t:null))}get activeOption(){return this.autocomplete&&this.autocomplete._keyManager?this.autocomplete._keyManager.activeItem:null}_getOutsideClickStream(){return(0,v.T)((0,y.R)(this._document,"click"),(0,y.R)(this._document,"auxclick"),(0,y.R)(this._document,"touchend")).pipe((0,M.h)(t=>{const i=(0,E.sA)(t),o=this._formField?this._formField._elementRef.nativeElement:null,l=this.connectedTo?this.connectedTo.elementRef.nativeElement:null;return this._overlayAttached&&i!==this._element.nativeElement&&this._document.activeElement!==this._element.nativeElement&&(!o||!o.contains(i))&&(!l||!l.contains(i))&&!!this._overlayRef&&!this._overlayRef.overlayElement.contains(i)}))}writeValue(t){Promise.resolve(null).then(()=>this._assignOptionValue(t))}registerOnChange(t){this._onChange=t}registerOnTouched(t){this._onTouched=t}setDisabledState(t){this._element.nativeElement.disabled=t}_handleKeydown(t){const i=t.keyCode,o=(0,h.Vb)(t);if(i===h.hY&&!o&&t.preventDefault(),this.activeOption&&i===h.K5&&this.panelOpen&&!o)this.activeOption._selectViaInteraction(),this._resetActiveItem(),t.preventDefault();else if(this.autocomplete){const l=this.autocomplete._keyManager.activeItem,r=i===h.LH||i===h.JH;i===h.Mf||r&&!o&&this.panelOpen?this.autocomplete._keyManager.onKeydown(t):r&&this._canOpen()&&this.openPanel(),(r||this.autocomplete._keyManager.activeItem!==l)&&(this._scrollToOption(this.autocomplete._keyManager.activeItemIndex||0),this.autocomplete.autoSelectActiveOption&&this.activeOption&&(this._pendingAutoselectedOption||(this._valueBeforeAutoSelection=this._element.nativeElement.value),this._pendingAutoselectedOption=this.activeOption,this._assignOptionValue(this.activeOption.value)))}}_handleInput(t){let i=t.target,o=i.value;"number"===i.type&&(o=""==o?null:parseFloat(o)),this._previousValue!==o&&(this._previousValue=o,this._pendingAutoselectedOption=null,this._onChange(o),o||this._clearPreviousSelectedOption(null,!1),this._canOpen()&&this._document.activeElement===t.target&&this.openPanel())}_handleFocus(){this._canOpenOnNextFocus?this._canOpen()&&(this._previousValue=this._element.nativeElement.value,this._attachOverlay(),this._floatLabel(!0)):this._canOpenOnNextFocus=!0}_handleClick(){this._canOpen()&&!this.panelOpen&&this.openPanel()}_floatLabel(t=!1){this._formField&&"auto"===this._formField.floatLabel&&(t?this._formField._animateAndLockLabel():this._formField.floatLabel="always",this._manuallyFloatingLabel=!0)}_resetLabel(){this._manuallyFloatingLabel&&(this._formField&&(this._formField.floatLabel="auto"),this._manuallyFloatingLabel=!1)}_subscribeToClosingActions(){const t=this._zone.onStable.pipe((0,b.q)(1)),i=this.autocomplete.options.changes.pipe((0,Z.b)(()=>this._positionStrategy.reapplyLastPosition()),(0,G.g)(0));return(0,v.T)(t,i).pipe((0,A.w)(()=>(this._zone.run(()=>{const o=this.panelOpen;this._resetActiveItem(),this._updatePanelState(),this._changeDetectorRef.detectChanges(),this.panelOpen&&this._overlayRef.updatePosition(),o!==this.panelOpen&&(this.panelOpen?this.autocomplete.opened.emit():this.autocomplete.closed.emit())}),this.panelClosingActions)),(0,b.q)(1)).subscribe(o=>this._setValueAndClose(o))}_destroyPanel(){this._overlayRef&&(this.closePanel(),this._overlayRef.dispose(),this._overlayRef=null)}_assignOptionValue(t){const i=this.autocomplete&&this.autocomplete.displayWith?this.autocomplete.displayWith(t):t;this._updateNativeInputValue(i??"")}_updateNativeInputValue(t){this._formField?this._formField._control.value=t:this._element.nativeElement.value=t,this._previousValue=t}_setValueAndClose(t){const i=t?t.source:this._pendingAutoselectedOption;i&&(this._clearPreviousSelectedOption(i),this._assignOptionValue(i.value),this._onChange(i.value),this.autocomplete._emitSelectEvent(i),this._element.nativeElement.focus()),this.closePanel()}_clearPreviousSelectedOption(t,i){this.autocomplete&&this.autocomplete.options&&this.autocomplete.options.forEach(o=>{o!==t&&o.selected&&o.deselect(i)})}_attachOverlay(){let t=this._overlayRef;t?(this._positionStrategy.setOrigin(this._getConnectedElement()),t.updateSize({width:this._getPanelWidth()})):(this._portal=new V.UE(this.autocomplete.template,this._viewContainerRef,{id:this._formField?.getLabelId()}),t=this._overlay.create(this._getOverlayConfig()),this._overlayRef=t,this._viewportSubscription=this._viewportRuler.change().subscribe(()=>{this.panelOpen&&t&&t.updateSize({width:this._getPanelWidth()})})),t&&!t.hasAttached()&&(t.attach(this._portal),this._closingActionsSubscription=this._subscribeToClosingActions());const i=this.panelOpen;this.autocomplete._isOpen=this._overlayAttached=!0,this.autocomplete._setColor(this._formField?.color),this._updatePanelState(),this._applyModalPanelOwnership(),this.panelOpen&&i!==this.panelOpen&&this.autocomplete.opened.emit()}_updatePanelState(){if(this.autocomplete._setVisibility(),this.panelOpen){const t=this._overlayRef;this._keydownSubscription||(this._keydownSubscription=t.keydownEvents().subscribe(this._handlePanelKeydown)),this._outsideClickSubscription||(this._outsideClickSubscription=t.outsidePointerEvents().subscribe())}else this._keydownSubscription?.unsubscribe(),this._outsideClickSubscription?.unsubscribe(),this._keydownSubscription=this._outsideClickSubscription=null}_getOverlayConfig(){return new g.X_({positionStrategy:this._getOverlayPosition(),scrollStrategy:this._scrollStrategy(),width:this._getPanelWidth(),direction:this._dir??void 0,panelClass:this._defaults?.overlayPanelClass})}_getOverlayPosition(){const t=this._overlay.position().flexibleConnectedTo(this._getConnectedElement()).withFlexibleDimensions(!1).withPush(!1);return this._setStrategyPositions(t),this._positionStrategy=t,t}_setStrategyPositions(t){const i=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],o=this._aboveClass,l=[{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:o},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:o}];let r;r="above"===this.position?l:"below"===this.position?i:[...i,...l],t.withPositions(r)}_getConnectedElement(){return this.connectedTo?this.connectedTo.elementRef:this._formField?this._formField.getConnectedOverlayOrigin():this._element}_getPanelWidth(){return this.autocomplete.panelWidth||this._getHostWidth()}_getHostWidth(){return this._getConnectedElement().nativeElement.getBoundingClientRect().width}_resetActiveItem(){const t=this.autocomplete;if(t.autoActiveFirstOption){let i=-1;for(let o=0;o<t.options.length;o++)if(!t.options.get(o).disabled){i=o;break}t._keyManager.setActiveItem(i)}else t._keyManager.setActiveItem(-1)}_canOpen(){const t=this._element.nativeElement;return!t.readOnly&&!t.disabled&&!this._autocompleteDisabled}_getWindow(){return this._document?.defaultView||window}_scrollToOption(t){const i=this.autocomplete,o=(0,c.CB)(t,i.options,i.optionGroups);if(0===t&&1===o)i._setScrollTop(0);else if(i.panel){const l=i.options.toArray()[t];if(l){const r=l._getHostElement(),C=(0,c.jH)(r.offsetTop,r.offsetHeight,i._getScrollTop(),i.panel.nativeElement.offsetHeight);i._setScrollTop(C)}}}_applyModalPanelOwnership(){const t=this._element.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');if(!t)return;const i=this.autocomplete.id;this._trackedModal&&(0,_.iD)(this._trackedModal,"aria-owns",i),(0,_.Zf)(t,"aria-owns",i),this._trackedModal=t}_clearFromModal(){this._trackedModal&&((0,_.iD)(this._trackedModal,"aria-owns",this.autocomplete.id),this._trackedModal=null)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(e.SBq),e.Y36(g.aV),e.Y36(e.s_b),e.Y36(e.R0b),e.Y36(e.sBO),e.Y36(R),e.Y36(N.Is,8),e.Y36(O.G_,9),e.Y36(m.K0,8),e.Y36(w.rL),e.Y36(D,8))},n.\u0275dir=e.lG2({type:n,inputs:{autocomplete:["matAutocomplete","autocomplete"],position:["matAutocompletePosition","position"],connectedTo:["matAutocompleteConnectedTo","connectedTo"],autocompleteAttribute:["autocomplete","autocompleteAttribute"],autocompleteDisabled:["matAutocompleteDisabled","autocompleteDisabled"]},features:[e.TTD]}),n})(),L=(()=>{class n extends ot{constructor(){super(...arguments),this._aboveClass="mat-mdc-autocomplete-panel-above"}}return n.\u0275fac=function(){let a;return function(i){return(a||(a=e.n5z(n)))(i||n)}}(),n.\u0275dir=e.lG2({type:n,selectors:[["input","matAutocomplete",""],["textarea","matAutocomplete",""]],hostAttrs:[1,"mat-mdc-autocomplete-trigger"],hostVars:7,hostBindings:function(t,i){1&t&&e.NdJ("focusin",function(){return i._handleFocus()})("blur",function(){return i._onTouched()})("input",function(l){return i._handleInput(l)})("keydown",function(l){return i._handleKeydown(l)})("click",function(){return i._handleClick()}),2&t&&e.uIk("autocomplete",i.autocompleteAttribute)("role",i.autocompleteDisabled?null:"combobox")("aria-autocomplete",i.autocompleteDisabled?null:"list")("aria-activedescendant",i.panelOpen&&i.activeOption?i.activeOption.id:null)("aria-expanded",i.autocompleteDisabled?null:i.panelOpen.toString())("aria-controls",i.autocompleteDisabled||!i.panelOpen||null==i.autocomplete?null:i.autocomplete.id)("aria-haspopup",i.autocompleteDisabled?null:"listbox")},exportAs:["matAutocompleteTrigger"],features:[e._Bn([tt]),e.qOj]}),n})(),nt=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({providers:[it],imports:[g.U8,c.Ng,c.BQ,m.ez,w.ZD,c.Ng,c.BQ]}),n})();var st=s(8304),S=s(4408),k=s(2296),at=s(5933),lt=s(6878);function rt(n,a){if(1&n){const t=e.EpF();e.TgZ(0,"mat-option",10),e.NdJ("keyup.enter",function(){const l=e.CHM(t).$implicit,r=e.oxw();return e.KtG(r.selectTermOption(l))})("click",function(){const l=e.CHM(t).$implicit,r=e.oxw();return e.KtG(r.selectTermOption(l))}),e._uU(1),e.qZA()}if(2&n){const t=a.$implicit;e.Q6J("value",t),e.xp6(1),e.hij(" ",t," ")}}let ct=(()=>{class n{constructor(t,i,o){this.dictionaryService=t,this.activatedRoute=i,this.router=o,this.termOptions=[],this.searchControl=new d.NI(""),this.RoutesEnum=at.X}ngOnInit(){this.initSearchControl();const t=this.activatedRoute.snapshot.queryParams.term||"";setTimeout(()=>{this.dictionaryService.setTerm(t)},500)}paste(){navigator.clipboard.readText().then(t=>this.selectTermOption(t?.trim()||""),t=>console.error(t))}selectTermOption(t){this.dictionaryService.setTerm(t||""),this.termOptions=[],this.router.navigate([],{queryParams:{term:t}})}initSearchControl(){this.searchControl.valueChanges.subscribe(t=>{!t||t.length<this.dictionaryService.minimalSearchPattern?this.termOptions=[]:(this.termOptions=this.dictionaryService.searchTerms(t)||[],1===this.termOptions.length&&this.selectTermOption(this.termOptions[0]))})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(lt.E),e.Y36(S.gz),e.Y36(S.F0))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-dictionary-viewer"]],standalone:!0,features:[e.jDz],decls:17,vars:4,consts:[[1,"header"],["mat-button","","color","primary","routerLink","/"],["mat-button","","color","primary",3,"routerLink"],["mat-button","","color","primary",3,"click"],[1,"search-bar"],[1,"form-field"],["type","text","placeholder","Term","autocomplete","false","matInput","",3,"formControl","matAutocomplete","keyup.enter","paste"],["auto","matAutocomplete"],[3,"value","keyup.enter","click",4,"ngFor","ngForOf"],[1,"results"],[3,"value","keyup.enter","click"]],template:function(t,i){if(1&t&&(e.TgZ(0,"div",0)(1,"button",1),e._uU(2,"Go Home"),e.qZA(),e.TgZ(3,"button",2),e._uU(4,"Go to Favorite"),e.qZA(),e.TgZ(5,"button",3),e.NdJ("click",function(){return i.paste()}),e._uU(6,"Take from clipboard"),e.qZA()(),e.TgZ(7,"div",4)(8,"mat-form-field",5)(9,"mat-label"),e._uU(10,"Term"),e.qZA(),e.TgZ(11,"input",6),e.NdJ("keyup.enter",function(){return i.selectTermOption(i.searchControl.value)})("paste",function(){return i.paste()}),e.qZA(),e.TgZ(12,"mat-autocomplete",null,7),e.YNc(14,rt,2,2,"mat-option",8),e.qZA()()(),e.TgZ(15,"div",9),e._UZ(16,"app-dictionary"),e.qZA()),2&t){const o=e.MAs(13);e.xp6(3),e.Q6J("routerLink","/"+i.RoutesEnum.FavoriteExamples),e.xp6(8),e.Q6J("formControl",i.searchControl)("matAutocomplete",o),e.xp6(3),e.Q6J("ngForOf",i.termOptions)}},dependencies:[m.ez,m.sg,P.c,P.Nt,O.KE,O.hX,d.UX,d.Fj,d.JJ,d.oH,nt,q,c.ey,L,st.Z,k.ot,k.lW,S.rH],styles:[".form-field[_ngcontent-%COMP%]{width:800px;max-width:90vw}.results[_ngcontent-%COMP%]{margin:auto;max-width:800px}.header[_ngcontent-%COMP%], .search-bar[_ngcontent-%COMP%]{display:flex;align-items:flex-start;justify-content:center;margin:var(--padding-main);gap:var(--padding-main);width:100%}"],changeDetection:0}),n})()}}]);