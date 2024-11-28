"use strict";(self.webpackChunkworkflow=self.webpackChunkworkflow||[]).push([[667],{1667:(ut,_,r)=>{r.r(_),r.d(_,{DashboardModule:()=>mt});var p=r(177),h=r(9012),f=r(6695),l=r(9159),u=r(2042),F=r(951),E=r(4099),t=r(4438),v=r(5175),m=r(9417),x=r(7749),g=r(6467),D=r(9631),y=r(2798),P=r(6600),M=r(9213),b=r(8834),S=r(765);const k=()=>["V","BIZ"],w=()=>[5,10,20,50];function j(n,i){if(1&n&&(t.j41(0,"mat-option",13),t.EFF(1),t.k0s()),2&n){const e=i.$implicit;t.Y8G("value",e.value),t.R7$(),t.SpI(" ",e.viewValue," ")}}function T(n,i){1&n&&(t.j41(0,"mat-icon"),t.EFF(1,"hourglass_empty"),t.k0s())}function q(n,i){1&n&&(t.j41(0,"th",39),t.EFF(1," No. "),t.k0s())}function R(n,i){if(1&n&&(t.j41(0,"td",40),t.EFF(1),t.k0s()),2&n){const e=i.index,a=t.XpG();t.R7$(),t.SpI(" ",(a.currentPage-1)*a.pageSize+e+1," ")}}function $(n,i){1&n&&(t.j41(0,"th",41),t.EFF(1," Sender Name "),t.k0s())}function I(n,i){if(1&n&&(t.j41(0,"td",40),t.EFF(1),t.k0s()),2&n){const e=i.$implicit;t.R7$(),t.SpI(" ",e.sender_name," ")}}function N(n,i){1&n&&(t.j41(0,"th",39),t.EFF(1," Type of LEAD "),t.k0s())}function V(n,i){if(1&n&&(t.j41(0,"td",40),t.EFF(1),t.k0s()),2&n){const e=i.$implicit,a=t.XpG();t.R7$(),t.SpI(" ",a.getLeadType(e.query_type)," ")}}function A(n,i){1&n&&(t.j41(0,"th",41),t.EFF(1," Company "),t.k0s())}function G(n,i){if(1&n&&(t.j41(0,"td",40),t.EFF(1),t.k0s()),2&n){const e=i.$implicit;t.R7$(),t.SpI(" ",e.sender_company," ")}}function B(n,i){1&n&&(t.j41(0,"th",41),t.EFF(1," State "),t.k0s())}function z(n,i){if(1&n&&(t.j41(0,"td",40),t.EFF(1),t.k0s()),2&n){const e=i.$implicit;t.R7$(),t.SpI(" ",e.sender_state," ")}}function L(n,i){1&n&&(t.j41(0,"th",41),t.EFF(1," Mobile "),t.k0s())}function U(n,i){if(1&n){const e=t.RV6();t.j41(0,"td",40),t.EFF(1),t.j41(2,"button",42),t.bIt("click",function(){const o=t.eBV(e).$implicit,s=t.XpG();return t.Njj(s.openWhatsApp(o.sender_mobile))}),t.nrm(3,"img",43),t.k0s()()}if(2&n){const e=i.$implicit;t.R7$(),t.SpI(" ",e.sender_mobile," ")}}function Y(n,i){1&n&&(t.j41(0,"th",41),t.EFF(1," Subject "),t.k0s())}function X(n,i){if(1&n&&(t.j41(0,"td",40),t.EFF(1),t.k0s()),2&n){const e=i.$implicit;t.R7$(),t.SpI(" ",e.subject," ")}}function W(n,i){1&n&&(t.j41(0,"th",41),t.EFF(1," Query Time "),t.k0s())}function H(n,i){if(1&n&&(t.j41(0,"td",40),t.EFF(1),t.nI1(2,"date"),t.k0s()),2&n){const e=i.$implicit;t.R7$(),t.SpI(" ",t.i5U(2,1,e.query_time,"medium")," ")}}function J(n,i){1&n&&(t.j41(0,"th",41),t.EFF(1," Status "),t.k0s())}function Q(n,i){if(1&n&&(t.j41(0,"td",40),t.EFF(1),t.k0s()),2&n){const e=i.$implicit,a=t.XpG();t.R7$(),t.SpI(" ",a.getStatusText(e.enquiry_status)," ")}}function Z(n,i){1&n&&(t.j41(0,"th",39),t.EFF(1," Action "),t.k0s())}function K(n,i){if(1&n){const e=t.RV6();t.j41(0,"td",40)(1,"button",44),t.bIt("click",function(){const o=t.eBV(e).$implicit,s=t.XpG();return t.Njj(s.onAction(o.id))}),t.EFF(2,"View"),t.k0s()()}}function tt(n,i){1&n&&t.nrm(0,"tr",45)}function nt(n,i){1&n&&t.nrm(0,"tr",46)}let et=(()=>{class n{constructor(e,a,o,s){this.enquiryService=e,this.formBuilder=a,this.router=o,this.loaderService=s,this.displayedColumns=["id","sender_name","lead_type","sender_company","sender_state","sender_mobile","subject","query_time","enquiry_status","action"],this.dataSource=new l.I6([]),this.totalRecords=0,this.currentPage=1,this.pageSize=10,this.orderBy="",this.isDownloading=!1,this.statusOptions=F.y,this.getLeadType=E.$,this.filterForm=this.formBuilder.group({search:[""],enquiryStatus:[""],startDate:[""],endDate:[""],queryTypes:[[]]})}ngOnInit(){this.loadEnquiries()}loadEnquiries(){const e="enquiries-loader";this.loaderService.start(e);const a=this.filterForm.value;let o=[];a.queryTypes&&a.queryTypes.forEach(c=>{Array.isArray(c)?o=[...o,...c]:o.push(c)});const s={currentPage:this.currentPage,perPageRecord:this.pageSize,search:a.search,enquiryStatus:a.enquiryStatus,orderBy:this.orderBy,startDate:a.startDate?this.formatDate(new Date(a.startDate)):null,endDate:a.endDate?this.formatDate(new Date(a.endDate)):null,queryTypes:o.length>0?o:null};this.enquiryService.searchEnquiries(s).subscribe({next:c=>{this.dataSource.data=c.DATA.results,this.totalRecords=c.DATA.pagination.totalRecords,this.loaderService.stop(e)},error:c=>{this.loaderService.stop(e),console.error("Error fetching enquiries",c)},complete:()=>{this.loaderService.stop(e)}})}onPageChange(e){this.currentPage=e.pageIndex+1,this.pageSize=e.pageSize,this.loadEnquiries()}onSubmit(){this.currentPage=1,this.loadEnquiries()}onEnquiryDownload(){this.isDownloading=!0;const e=this.filterForm.value,a={currentPage:this.currentPage,perPageRecord:this.pageSize,search:e.search,enquiryStatus:e.enquiryStatus,orderBy:this.orderBy,startDate:e.startDate?this.formatDate(new Date(e.startDate)):null,endDate:e.endDate?this.formatDate(new Date(e.endDate)):null};this.enquiryService.downloadEnquiries(a).subscribe(o=>{const s=new Blob([o],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}),c=window.URL.createObjectURL(s),d=document.createElement("a");d.href=c,d.download="enquiries.xlsx",d.click(),this.isDownloading=!1},o=>{console.error("Error fetching enquiries",o),this.isDownloading=!1})}onSortChange(e){this.orderBy=e.active.toUpperCase(),this.loadEnquiries()}getStatusText(e){const a=this.statusOptions.find(o=>o.value===e);return a?a.viewValue:e}formatDate(e){return`${e.getDate().toString().padStart(2,"0")}-${(e.getMonth()+1).toString().padStart(2,"0")}-${e.getFullYear()}`}onReset(){this.initializeForm(),this.currentPage=1,this.pageSize=10,this.orderBy="",this.sort&&(this.sort.active="",this.sort.direction=""),this.paginator&&(this.paginator.pageIndex=0),this.loadEnquiries()}initializeForm(){this.filterForm=this.formBuilder.group({search:[""],enquiryStatus:[""],startDate:[""],endDate:[""],queryTypes:[[]]})}onAction(e){this.router.navigate(["/enquiry-details",e])}openWhatsApp(e){const a=e.replace(/\D/g,""),o=a.startsWith("91")?a:`91${a}`,s=`https://api.whatsapp.com/send/?phone=${o}&text&type=phone_number&app_absent=0`,c=`whatsapp://send?phone=${o}`,d=`whatsapp://send/?phone=${o}`;if(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent))(()=>{const pt=Date.now(),O=()=>{Date.now()-pt>2500||document.hidden||(window.location.href=s)};document.addEventListener("visibilitychange",O),setTimeout(()=>{document.removeEventListener("visibilitychange",O)},2500),window.location.href=c})();else{const C=document.createElement("a");C.href=d,C.click(),setTimeout(()=>{window.open(s,"_blank")},1e3)}}static{this.\u0275fac=function(a){return new(a||n)(t.rXU(v.X),t.rXU(m.ok),t.rXU(h.Ix),t.rXU(x.Z))}}static{this.\u0275cmp=t.VBU({type:n,selectors:[["app-dashboard"]],viewQuery:function(a,o){if(1&a&&(t.GBs(f.iy,5),t.GBs(u.B4,5)),2&a){let s;t.mGM(s=t.lsd())&&(o.paginator=s.first),t.mGM(s=t.lsd())&&(o.sort=s.first)}},decls:83,vars:14,consts:[[1,"dashboard-container"],["loaderId","enquiries-loader","text","Loading Enquiries..."],["mat-raised-button","","color","primary","routerLink","/new-enquiry",1,"create-enquiry-btn"],[1,"filters",3,"formGroup"],["matInput","","placeholder","Search","formControlName","search"],["formControlName","enquiryStatus"],[3,"value",4,"ngFor","ngForOf"],["matInput","","type","date","formControlName","startDate"],["matInput","","type","date","formControlName","endDate"],["formControlName","queryTypes","multiple",""],["value","W"],["value","B"],["value","P"],[3,"value"],["value","WA"],["value","M"],[1,"button-group"],["mat-raised-button","","color","primary","type","submit",3,"click"],["mat-raised-button","","color","accent","type","submit",3,"click","disabled"],[4,"ngIf"],["mat-raised-button","","color","warn","type","button",3,"click"],[1,"mat-elevation-z8","table-container"],["mat-table","","matSort","",1,"enquiry-table",3,"matSortChange","dataSource"],["matColumnDef","id"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","sender_name"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["matColumnDef","lead_type"],["matColumnDef","sender_company"],["matColumnDef","sender_state"],["matColumnDef","sender_mobile"],["matColumnDef","subject"],["matColumnDef","query_time"],["matColumnDef","enquiry_status"],["matColumnDef","action"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],[3,"page","length","pageSize","pageSizeOptions"],["mat-header-cell",""],["mat-cell",""],["mat-header-cell","","mat-sort-header",""],["mat-icon-button","","color","primary",3,"click"],["src","https://tuleshghelani.github.io/jk_industries/assets/shared/WhatsApp.png","alt","WhatsApp",1,"whatsapp-logo"],["mat-raised-button","","color","accent",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(a,o){1&a&&(t.j41(0,"div",0),t.nrm(1,"app-loader",1),t.j41(2,"h1"),t.EFF(3,"Enquiries Dashboard"),t.k0s(),t.j41(4,"button",2)(5,"mat-icon"),t.EFF(6,"add"),t.k0s(),t.EFF(7," Create New Enquiry "),t.k0s(),t.j41(8,"form",3)(9,"mat-form-field"),t.nrm(10,"input",4),t.k0s(),t.j41(11,"mat-form-field")(12,"mat-label"),t.EFF(13,"Enquiry Status"),t.k0s(),t.j41(14,"mat-select",5),t.DNE(15,j,2,2,"mat-option",6),t.k0s()(),t.j41(16,"mat-form-field")(17,"mat-label"),t.EFF(18,"Start Date"),t.k0s(),t.nrm(19,"input",7),t.k0s(),t.j41(20,"mat-form-field")(21,"mat-label"),t.EFF(22,"End Date"),t.k0s(),t.nrm(23,"input",8),t.k0s(),t.j41(24,"mat-form-field")(25,"mat-label"),t.EFF(26,"Lead Type"),t.k0s(),t.j41(27,"mat-select",9)(28,"mat-option",10),t.EFF(29,"Direct Enquiries"),t.k0s(),t.j41(30,"mat-option",11),t.EFF(31,"Buy-Leads"),t.k0s(),t.j41(32,"mat-option",12),t.EFF(33,"PNS Calls"),t.k0s(),t.j41(34,"mat-option",13),t.EFF(35,"Catalog-view Leads"),t.k0s(),t.j41(36,"mat-option",14),t.EFF(37,"WhatsApp Enquiries"),t.k0s(),t.j41(38,"mat-option",15),t.EFF(39,"Manual Enquiries"),t.k0s()()(),t.j41(40,"div",16)(41,"button",17),t.bIt("click",function(){return o.onSubmit()}),t.EFF(42,"Submit"),t.k0s(),t.j41(43,"button",18),t.bIt("click",function(){return o.onEnquiryDownload()}),t.DNE(44,T,2,0,"mat-icon",19),t.EFF(45),t.k0s(),t.j41(46,"button",20),t.bIt("click",function(){return o.onReset()}),t.EFF(47,"Reset"),t.k0s()()(),t.j41(48,"div",21)(49,"table",22),t.bIt("matSortChange",function(c){return o.onSortChange(c)}),t.qex(50,23),t.DNE(51,q,2,0,"th",24)(52,R,2,1,"td",25),t.bVm(),t.qex(53,26),t.DNE(54,$,2,0,"th",27)(55,I,2,1,"td",25),t.bVm(),t.qex(56,28),t.DNE(57,N,2,0,"th",24)(58,V,2,1,"td",25),t.bVm(),t.qex(59,29),t.DNE(60,A,2,0,"th",27)(61,G,2,1,"td",25),t.bVm(),t.qex(62,30),t.DNE(63,B,2,0,"th",27)(64,z,2,1,"td",25),t.bVm(),t.qex(65,31),t.DNE(66,L,2,0,"th",27)(67,U,4,1,"td",25),t.bVm(),t.qex(68,32),t.DNE(69,Y,2,0,"th",27)(70,X,2,1,"td",25),t.bVm(),t.qex(71,33),t.DNE(72,W,2,0,"th",27)(73,H,3,4,"td",25),t.bVm(),t.qex(74,34),t.DNE(75,J,2,0,"th",27)(76,Q,2,1,"td",25),t.bVm(),t.qex(77,35),t.DNE(78,Z,2,0,"th",24)(79,K,3,0,"td",25),t.bVm(),t.DNE(80,tt,1,0,"tr",36)(81,nt,1,0,"tr",37),t.k0s(),t.j41(82,"mat-paginator",38),t.bIt("page",function(c){return o.onPageChange(c)}),t.k0s()()()),2&a&&(t.R7$(8),t.Y8G("formGroup",o.filterForm),t.R7$(7),t.Y8G("ngForOf",o.statusOptions),t.R7$(19),t.Y8G("value",t.lJ4(12,k)),t.R7$(9),t.Y8G("disabled",o.isDownloading),t.R7$(),t.Y8G("ngIf",o.isDownloading),t.R7$(),t.SpI(" ",o.isDownloading?"Downloading...":"Download"," "),t.R7$(4),t.Y8G("dataSource",o.dataSource),t.R7$(31),t.Y8G("matHeaderRowDef",o.displayedColumns),t.R7$(),t.Y8G("matRowDefColumns",o.displayedColumns),t.R7$(),t.Y8G("length",o.totalRecords)("pageSize",o.pageSize)("pageSizeOptions",t.lJ4(13,w)))},dependencies:[p.Sq,p.bT,l.Zl,l.tL,l.ji,l.cC,l.YV,l.iL,l.KS,l.$R,l.YZ,l.NB,f.iy,u.B4,u.aE,g.rl,g.nJ,D.fg,y.VO,P.wT,M.An,b.$z,b.iY,m.qT,m.me,m.BC,m.cb,m.j4,m.JD,S.V,h.Wk,p.vh],styles:["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{height:100%;background:#d7e3ff}.text-center[_ngcontent-%COMP%]{text-align:center}.ml20[_ngcontent-%COMP%]{margin-left:20px!important}.mr20[_ngcontent-%COMP%]{margin-right:20px!important}.mt20[_ngcontent-%COMP%]{margin-top:20px!important}.mb20[_ngcontent-%COMP%]{margin-bottom:20px!important}.ml10[_ngcontent-%COMP%]{margin-left:10px!important}.mr10[_ngcontent-%COMP%]{margin-right:10px!important}.mt10[_ngcontent-%COMP%]{margin-top:10px!important}.mb10[_ngcontent-%COMP%]{margin-bottom:10px!important}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{height:100%;margin:0;padding:0;font-family:Roboto,Segoe UI,Helvetica Neue,Arial,sans-serif;background:#d7e3ff;overflow-x:hidden}body[_ngcontent-%COMP%]{min-height:100vh;width:100%;max-width:100vw}.full-width[_ngcontent-%COMP%]{width:100%;max-width:100%;box-sizing:border-box}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{height:100%}body[_ngcontent-%COMP%]{margin:0;font-family:Roboto,Helvetica Neue,sans-serif}body[_ngcontent-%COMP%]{font-family:Roboto,Segoe UI,Helvetica Neue,Arial,sans-serif;background-color:#d7e3ff;color:#000000de}.primary-bg[_ngcontent-%COMP%]{background-color:#3f51b5;color:#fff}.secondary-bg[_ngcontent-%COMP%]{background-color:#ff4081;color:#fff}.accent-bg[_ngcontent-%COMP%]{background-color:#ffd740;color:#000000de}[_ngcontent-%COMP%]:export{primaryColor:#3f51b5;secondaryColor:#ff4081;accentColor:#ffd740}.dashboard-container[_ngcontent-%COMP%]{padding:20px}.dashboard-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:#3f51b5;margin-bottom:20px;font-size:24px}@media (max-width: 600px){.dashboard-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:20px}}.dashboard-container[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:20px;margin-bottom:20px;align-items:center}.dashboard-container[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{flex:1 1 200px}.dashboard-container[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]   .button-group[_ngcontent-%COMP%]{display:flex;gap:10px}.dashboard-container[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{flex:0 0 auto;height:36px}@media (max-width: 600px){.dashboard-container[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]{flex-direction:column;align-items:stretch}.dashboard-container[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%], .dashboard-container[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%}.dashboard-container[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]   .button-group[_ngcontent-%COMP%]{flex-direction:column}}.dashboard-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]{overflow-x:auto}.dashboard-container[_ngcontent-%COMP%]   .enquiry-table[_ngcontent-%COMP%]{width:100%;min-width:800px}.dashboard-container[_ngcontent-%COMP%]   .enquiry-table[_ngcontent-%COMP%]   th.mat-header-cell[_ngcontent-%COMP%]{background-color:#3f51b5;color:#fff;font-weight:700}.dashboard-container[_ngcontent-%COMP%]   .enquiry-table[_ngcontent-%COMP%]   tr.mat-row[_ngcontent-%COMP%]:nth-child(2n){background-color:#f5f5f5}.dashboard-container[_ngcontent-%COMP%]   .enquiry-table[_ngcontent-%COMP%]   tr.mat-row[_ngcontent-%COMP%]:hover{background-color:#e0e0e0}.dashboard-container[_ngcontent-%COMP%]   .enquiry-table[_ngcontent-%COMP%]   .mat-column-action[_ngcontent-%COMP%]{width:100px;text-align:center}.dashboard-container[_ngcontent-%COMP%]   .mat-paginator[_ngcontent-%COMP%]{background-color:#f5f5f5}@media (max-width: 600px){.dashboard-container[_ngcontent-%COMP%]{padding:10px}.dashboard-container[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]{flex-direction:column;align-items:stretch}.dashboard-container[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{align-self:center}}.whatsapp-icon[_ngcontent-%COMP%]{color:#25d366;cursor:pointer;margin-left:8px;font-family:Material Icons;vertical-align:middle;font-size:20px}.whatsapp-icon[_ngcontent-%COMP%]:hover{opacity:.8;transform:scale(1.1);transition:all .2s ease}.mat-column-sender_mobile[_ngcontent-%COMP%]{white-space:nowrap}.mat-column-sender_mobile[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{font-family:Material Icons!important}.create-enquiry-btn[_ngcontent-%COMP%]{margin-bottom:20px}.create-enquiry-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-right:8px}"]})}}return n})();var ot=r(5084),at=r(9183),it=r(1530),rt=r(3319),st=r(3887),ct=r(4823);const lt=[{path:"",component:et}];let mt=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275mod=t.$C({type:n})}static{this.\u0275inj=t.G2t({imports:[p.MD,l.tP,f.Ou,u.NQ,ot.X6,P.WX,g.RG,D.fS,y.Ve,M.m_,b.Hl,at.D6,m.X1,st.G,ct.uc,h.iI.forChild(lt),it.th.forRoot(rt.x)]})}}return n})()}}]);
