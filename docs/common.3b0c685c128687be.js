"use strict";(self.webpackChunkworkflow=self.webpackChunkworkflow||[]).push([[76],{2039:(g,l,o)=>{o.r(l),o.d(l,{CreateFollowUpDialogComponent:()=>f});var r=o(5351),a=o(9417),m=o(951),t=o(4438),_=o(177),h=o(5175),e=o(6467),D=o(9631),n=o(5084),u=o(8834);let f=(()=>{class E{constructor(i,d,c,s,p){this.dialogRef=i,this.data=d,this.fb=c,this.datePipe=s,this.enquiryService=p,this.statusOptions=m.y,this.enquiryId=0,this.followUpForm=this.fb.group({enquiry_id:[d.enquiryId],follow_up_status:["S",a.k0.required],description:[null],next_action_date:[null,a.k0.required],next_action_time:[null,a.k0.required]})}ngOnInit(){}onSubmit(){if(this.followUpForm.valid){const i=this.datePipe.transform(this.followUpForm.get("next_action_date")?.value,"dd-MM-yyyy"),d=this.followUpForm.get("next_action_time")?.value;console.log("Time value:",d);const s=`${i} ${d+":00"||0}`;console.log("Combined DateTime:",s);const p={...this.followUpForm.value,next_action_date:s};delete p.next_action_time,this.dialogRef.close(p)}}onCancel(){this.dialogRef.close()}refreshEnquiryDetails(){this.enquiryService.getEnquiryDetails(this.enquiryId).subscribe(i=>{console.log("Enquiry details refreshed",i)},i=>{console.error("Error fetching enquiry details",i)})}static{this.\u0275fac=function(d){return new(d||E)(t.rXU(r.CP),t.rXU(r.Vh),t.rXU(a.ok),t.rXU(_.vh),t.rXU(h.X))}}static{this.\u0275cmp=t.VBU({type:E,selectors:[["app-create-follow-up-dialog"]],decls:24,vars:4,consts:[["picker",""],["mat-dialog-title",""],[3,"ngSubmit","formGroup"],["appearance","fill"],["matInput","","formControlName","next_action_date","required","",3,"matDatepicker"],["matSuffix","",3,"for"],["matInput","","type","time","formControlName","next_action_time","required",""],["matInput","","formControlName","description","rows","3"],["align","end"],["mat-button","",3,"click"],["mat-raised-button","","color","primary",3,"click","disabled"]],template:function(d,c){if(1&d){const s=t.RV6();t.j41(0,"h2",1),t.EFF(1,"Create Follow-up"),t.k0s(),t.j41(2,"mat-dialog-content")(3,"form",2),t.bIt("ngSubmit",function(){return t.eBV(s),t.Njj(c.onSubmit())}),t.j41(4,"mat-form-field",3)(5,"mat-label"),t.EFF(6,"Next Action Date"),t.k0s(),t.nrm(7,"input",4)(8,"mat-datepicker-toggle",5)(9,"mat-datepicker",null,0),t.k0s(),t.j41(11,"mat-form-field",3)(12,"mat-label"),t.EFF(13,"Next Action Time"),t.k0s(),t.nrm(14,"input",6),t.k0s(),t.j41(15,"mat-form-field",3)(16,"mat-label"),t.EFF(17,"Description"),t.k0s(),t.nrm(18,"textarea",7),t.k0s()()(),t.j41(19,"mat-dialog-actions",8)(20,"button",9),t.bIt("click",function(){return t.eBV(s),t.Njj(c.onCancel())}),t.EFF(21,"Cancel"),t.k0s(),t.j41(22,"button",10),t.bIt("click",function(){return t.eBV(s),t.Njj(c.onSubmit())}),t.EFF(23,"Create"),t.k0s()()}if(2&d){const s=t.sdS(10);t.R7$(3),t.Y8G("formGroup",c.followUpForm),t.R7$(4),t.Y8G("matDatepicker",s),t.R7$(),t.Y8G("for",s),t.R7$(14),t.Y8G("disabled",!c.followUpForm.valid)}},dependencies:[a.qT,a.me,a.BC,a.cb,a.YS,a.j4,a.JD,r.BI,r.E7,r.Yi,e.rl,e.nJ,e.yw,D.fg,n.Vh,n.bZ,n.bU,u.$z],styles:["[_nghost-%COMP%]{display:block;width:100%;max-width:400px}mat-dialog-content[_ngcontent-%COMP%]{padding-top:20px}form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:16px}mat-form-field[_ngcontent-%COMP%]{width:100%}textarea[_ngcontent-%COMP%]{min-height:100px}mat-dialog-actions[_ngcontent-%COMP%]{padding-top:20px}"]})}}return E})()},3670:(g,l,o)=>{o.r(l),o.d(l,{CreateFollowUpDialogModule:()=>P});var r=o(177),a=o(9417),m=o(5351),t=o(6467),_=o(9631),h=o(2798),e=o(5084),D=o(8834),n=o(9183),u=o(1530),f=o(2634),E=o(4438);let P=(()=>{class i{static{this.\u0275fac=function(s){return new(s||i)}}static{this.\u0275mod=E.$C({type:i})}static{this.\u0275inj=E.G2t({imports:[r.MD,a.X1,m.hM,t.RG,_.fS,h.Ve,e.X6,D.Hl,n.D6,u.th.forRoot(f.d)]})}}return i})()},5175:(g,l,o)=>{o.d(l,{X:()=>h});var r=o(5312),a=o(4438),m=o(1626),t=o(5351),_=o(1530);let h=(()=>{class e{constructor(n,u,f){this.http=n,this.dialog=u,this.ngxLoader=f,this.baseUrl=r.c.apiUrl}searchEnquiries(n){return this.http.post(`${this.baseUrl}/api/enquiry/search-enquiries/`,n)}downloadEnquiries(n){return this.http.post(`${this.baseUrl}/api/enquiry/download-enquiries-excel/`,n,{responseType:"blob"})}getEnquiryDetails(n){return this.http.post(`${this.baseUrl}/api/enquiry/get-enquiry-details/`,{id:n})}openFollowUpDialog(n){this.ngxLoader.start(),o.e(76).then(o.bind(o,2039)).then(({CreateFollowUpDialogComponent:u})=>{this.ngxLoader.stop(),this.dialog.open(u,{width:"500px",data:{enquiryId:n}})}).catch(u=>{console.error("Error loading dialog:",u),this.ngxLoader.stop()})}updateEnquiryStatus(n){return this.http.post(`${this.baseUrl}/api/enquiry/update-enquiry-status/`,n)}static{this.\u0275fac=function(u){return new(u||e)(a.KVO(m.Qq),a.KVO(t.bZ),a.KVO(_.eD))}}static{this.\u0275prov=a.jDH({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})()},9114:(g,l,o)=>{o.d(l,{O:()=>t});var r=o(5312),a=o(4438),m=o(1626);let t=(()=>{class _{constructor(e){this.http=e,this.baseUrl=r.c.apiUrl}createFollowUp(e){return this.http.post(`${this.baseUrl}/api/follow-up/create/`,e)}searchFollowUps(e){return this.http.post(`${this.baseUrl}/api/follow-up/search-followup/`,e)}static{this.\u0275fac=function(D){return new(D||_)(a.KVO(m.Qq))}}static{this.\u0275prov=a.jDH({token:_,factory:_.\u0275fac,providedIn:"root"})}}return _})()},951:(g,l,o)=>{o.d(l,{N:()=>a,y:()=>r});const r=[{value:"L",viewValue:"Loss"},{value:"P",viewValue:"Pending"},{value:"W",viewValue:"Win"},{value:"I",viewValue:"Interested"}],a=[{value:"S",viewValue:"Scheduled"},{value:"C",viewValue:"Completed"}]},3319:(g,l,o)=>{o.d(l,{x:()=>r});const r={fgsType:"three-strings",fgsColor:"#1976d2",fgsSize:70,overlayColor:"rgba(255,255,255,0.8)",hasProgressBar:!1,masterLoaderId:"master",overlayBorderRadius:"4px",gap:24,blur:8,textColor:"#1976d2",textPosition:"center-center",logoPosition:"center-center",logoSize:120,logoUrl:"https://tuleshghelani.github.io/jk_industries/assets/loader-logo.png"}},4099:(g,l,o)=>{function r(a){switch(a){case"W":return"Direct Enquiries";case"B":return"Buy-Leads";case"P":return"PNS Calls";case"V":case"BIZ":return"Catalog-view Leads";case"WA":return"WhatsApp Enquiries";default:return"Unknown"}}o.d(l,{$:()=>r})}}]);