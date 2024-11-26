"use strict";(self.webpackChunkworkflow=self.webpackChunkworkflow||[]).push([[115],{8115:(z,f,o)=>{o.r(f),o.d(f,{EnquiryDetailsModule:()=>X});var c=o(177),u=o(9012),p=o(9213),d=o(9454),g=o(3902),F=o(5351),M=o(1530),E=o(2634),x=o(4823),O=o(951),_=o(4099),P=o(2039),t=o(4438),v=o(5175),w=o(9114),S=o(7749),D=o(1997),s=o(5596),h=o(8834),k=o(765),y=o(6467),C=o(2798),q=o(6600),m=o(9417);function b(a,l){if(1&a&&(t.j41(0,"mat-option",15),t.EFF(1),t.k0s()),2&a){const e=l.$implicit;t.Y8G("value",e.value),t.R7$(),t.SpI(" ",e.viewValue," ")}}function j(a,l){if(1&a){const e=t.RV6();t.j41(0,"mat-card")(1,"mat-card-header")(2,"mat-card-title"),t.EFF(3,"Enquiry Details"),t.k0s(),t.j41(4,"div",8)(5,"mat-form-field")(6,"mat-label"),t.EFF(7,"Status"),t.k0s(),t.j41(8,"mat-select",9),t.mxI("ngModelChange",function(n){t.eBV(e);const r=t.XpG();return t.DH7(r.selectedStatus,n)||(r.selectedStatus=n),t.Njj(n)}),t.DNE(9,b,2,2,"mat-option",10),t.k0s()(),t.j41(10,"button",11),t.bIt("click",function(){t.eBV(e);const n=t.XpG();return t.Njj(n.updateEnquiryStatus())}),t.EFF(11," Update Status "),t.k0s()()(),t.j41(12,"mat-card-content")(13,"div",12)(14,"div",13)(15,"h3"),t.EFF(16,"Sender Information"),t.k0s(),t.j41(17,"p")(18,"strong"),t.EFF(19,"Name:"),t.k0s(),t.EFF(20),t.k0s(),t.j41(21,"p")(22,"strong"),t.EFF(23,"Company:"),t.k0s(),t.EFF(24),t.k0s(),t.j41(25,"p")(26,"strong"),t.EFF(27,"Email:"),t.k0s(),t.EFF(28),t.k0s(),t.j41(29,"p")(30,"strong"),t.EFF(31,"Mobile:"),t.k0s(),t.EFF(32),t.k0s(),t.j41(33,"p")(34,"strong"),t.EFF(35,"Alt. Mobile:"),t.k0s(),t.EFF(36),t.k0s(),t.j41(37,"p")(38,"strong"),t.EFF(39,"Phone:"),t.k0s(),t.EFF(40),t.k0s(),t.j41(41,"p")(42,"strong"),t.EFF(43,"Alt. Phone:"),t.k0s(),t.EFF(44),t.k0s(),t.j41(45,"p")(46,"strong"),t.EFF(47,"Alt. Email:"),t.k0s(),t.EFF(48),t.k0s()(),t.j41(49,"div",13)(50,"h3"),t.EFF(51,"Address"),t.k0s(),t.j41(52,"p"),t.EFF(53),t.k0s(),t.j41(54,"p"),t.EFF(55),t.k0s(),t.j41(56,"p"),t.EFF(57),t.k0s(),t.j41(58,"p"),t.EFF(59),t.k0s()(),t.j41(60,"div",13)(61,"h3"),t.EFF(62,"Query Information"),t.k0s(),t.j41(63,"p")(64,"strong"),t.EFF(65,"Type:"),t.k0s(),t.EFF(66),t.k0s(),t.j41(67,"p")(68,"strong"),t.EFF(69,"Time:"),t.k0s(),t.EFF(70),t.nI1(71,"date"),t.k0s(),t.j41(72,"p")(73,"strong"),t.EFF(74,"Product:"),t.k0s(),t.EFF(75),t.k0s(),t.j41(76,"p")(77,"strong"),t.EFF(78,"Category:"),t.k0s(),t.EFF(79),t.k0s(),t.j41(80,"p")(81,"strong"),t.EFF(82,"Subject:"),t.k0s(),t.EFF(83),t.k0s()(),t.j41(84,"div",14)(85,"h3"),t.EFF(86,"Query Message"),t.k0s(),t.j41(87,"p"),t.EFF(88),t.k0s()()()(),t.nrm(89,"br"),t.k0s()}if(2&a){const e=t.XpG();t.R7$(8),t.R50("ngModel",e.selectedStatus),t.R7$(),t.Y8G("ngForOf",e.statusOptions),t.R7$(11),t.SpI(" ",e.enquiryDetails.sender_name,""),t.R7$(4),t.SpI(" ",e.enquiryDetails.sender_company,""),t.R7$(4),t.SpI(" ",e.enquiryDetails.sender_email,""),t.R7$(4),t.SpI(" ",e.enquiryDetails.sender_mobile,""),t.R7$(4),t.SpI(" ",e.enquiryDetails.sender_mobile_alt,""),t.R7$(4),t.SpI(" ",e.enquiryDetails.sender_phone,""),t.R7$(4),t.SpI(" ",e.enquiryDetails.sender_phone_alt,""),t.R7$(4),t.SpI(" ",e.enquiryDetails.sender_email_alt,""),t.R7$(5),t.JRh(e.enquiryDetails.sender_address),t.R7$(2),t.Lme("",e.enquiryDetails.sender_city,", ",e.enquiryDetails.sender_state,""),t.R7$(2),t.JRh(e.enquiryDetails.sender_pincode),t.R7$(2),t.JRh(e.enquiryDetails.sender_country_iso),t.R7$(7),t.SpI(" ",e.getLeadType(e.enquiryDetails.query_type),""),t.R7$(4),t.SpI(" ",t.i5U(71,21,e.enquiryDetails.query_time,"medium"),""),t.R7$(5),t.SpI(" ",e.enquiryDetails.query_product_name,""),t.R7$(4),t.SpI(" ",e.enquiryDetails.query_mcat_name,""),t.R7$(4),t.SpI(" ",e.enquiryDetails.subject,""),t.R7$(5),t.JRh(e.enquiryDetails.query_message)}}function R(a,l){1&a&&(t.j41(0,"mat-card")(1,"mat-card-content")(2,"p"),t.EFF(3,"An error occurred while fetching the enquiry details. Please try again later."),t.k0s()()())}function I(a,l){if(1&a&&(t.j41(0,"mat-card",16)(1,"mat-card-header")(2,"mat-card-title"),t.EFF(3,"Latest Follow-up"),t.k0s(),t.j41(4,"mat-card-subtitle"),t.EFF(5),t.nI1(6,"date"),t.k0s()(),t.j41(7,"mat-card-content")(8,"div",17)(9,"mat-icon",18),t.EFF(10),t.k0s(),t.j41(11,"span"),t.EFF(12),t.k0s()(),t.j41(13,"p",19),t.EFF(14),t.k0s(),t.j41(15,"p",20)(16,"mat-icon"),t.EFF(17,"event"),t.k0s(),t.EFF(18),t.nI1(19,"date"),t.k0s()()()),2&a){const e=t.XpG();t.R7$(5),t.JRh(t.i5U(6,6,e.enquiryDetails.latest_follow_up.created_at,"medium")),t.R7$(4),t.Y8G("ngClass",e.getStatusClass(e.enquiryDetails.latest_follow_up.follow_up_status)),t.R7$(),t.SpI(" ",e.getStatusIcon(e.enquiryDetails.latest_follow_up.follow_up_status)," "),t.R7$(2),t.JRh(e.getStatusText(e.enquiryDetails.latest_follow_up.follow_up_status)),t.R7$(2),t.JRh(e.enquiryDetails.latest_follow_up.description),t.R7$(4),t.SpI(" Next Action: ",t.i5U(19,9,e.enquiryDetails.latest_follow_up.next_action_date,"medium")," ")}}function $(a,l){if(1&a&&(t.j41(0,"mat-list-item")(1,"div",21)(2,"span",22),t.EFF(3),t.k0s()(),t.j41(4,"div",23)(5,"span",24)(6,"mat-icon"),t.EFF(7,"event_note"),t.k0s(),t.EFF(8),t.nI1(9,"date"),t.k0s(),t.EFF(10),t.j41(11,"span",25)(12,"mat-icon"),t.EFF(13,"update"),t.k0s(),t.EFF(14),t.nI1(15,"date"),t.k0s()(),t.j41(16,"div",26)(17,"mat-icon"),t.EFF(18,"description"),t.k0s(),t.EFF(19),t.k0s(),t.nrm(20,"mat-divider"),t.k0s()),2&a){const e=l.$implicit,i=t.XpG();t.R7$(2),t.Y8G("ngClass",i.getStatusClass(e.follow_up_status)),t.R7$(),t.SpI(" ",i.getStatusText(e.follow_up_status)," "),t.R7$(5),t.SpI(" Created: ",t.i5U(9,6,e.created_at,"medium")," "),t.R7$(2),t.SpI(" ",e.description," "),t.R7$(4),t.SpI(" Next Action: ",t.i5U(15,9,e.next_action_date,"medium")," "),t.R7$(5),t.SpI(" ",e.description," ")}}let U=(()=>{class a{constructor(e,i,n,r,Y,J,V){this.route=e,this.enquiryService=i,this.router=n,this.followUpService=r,this.dialog=Y,this.cdr=J,this.loaderService=V,this.enquiryDetails={follow_ups:[],latest_follow_up:null},this.loading=!0,this.error=!1,this.statusOptions=O.y,this.getLeadType=_.$,this.selectedStatus=""}ngOnInit(){const e=this.route.snapshot.paramMap.get("id");e&&this.fetchEnquiryDetails(+e)}onAction(){this.router.navigate(["/dashboard"])}fetchEnquiryDetails(e){const i="enquiry-details-loader";this.loaderService.start(i),this.enquiryService.getEnquiryDetails(e).subscribe({next:n=>{this.enquiryDetails=n.DATA,this.selectedStatus=n.DATA.enquiry_status,this.loading=!1,this.loaderService.stop(i)},error:n=>{console.error("Error fetching enquiry details",n),this.loading=!1,this.error=!0,this.loaderService.stop(i)},complete:()=>{this.loaderService.stop(i)}})}getStatusClass(e){switch(e){case"S":return"status-success";case"C":return"status-closed";default:return"status-default"}}getStatusIcon(e){switch(e){case"S":return"check_circle";case"C":return"cancel";default:return"help"}}getStatusText(e){switch(e){case"S":return"Scheduled";case"C":return"Completed";default:return"Unknown"}}openCreateFollowUpDialog(){this.dialog.open(P.CreateFollowUpDialogComponent,{width:"400px",data:{enquiryId:this.enquiryDetails.id}}).afterClosed().subscribe(i=>{i&&this.createFollowUp(i)})}createFollowUp(e){const i="enquiry-details-loader";this.loaderService.start(i),this.followUpService.createFollowUp(e).subscribe({next:n=>{console.log("Follow-up created:",n),this.refreshEnquiryDetails(e?.enquiry_id),this.loaderService.stop(i)},error:n=>{console.error("Error creating follow-up:",n),this.loaderService.stop(i)},complete:()=>{this.loaderService.stop(i)}})}refreshEnquiryDetails(e){this.ngOnInit()}updateEnquiryStatus(){const e="enquiry-details-loader";this.loaderService.start(e),this.enquiryService.updateEnquiryStatus({enquiryId:this.enquiryDetails.id,enquiryStatus:this.selectedStatus}).subscribe({next:n=>{this.fetchEnquiryDetails(this.enquiryDetails.id)},error:n=>{console.error("Error updating enquiry status",n)},complete:()=>{this.loaderService.stop(e)}})}static{this.\u0275fac=function(i){return new(i||a)(t.rXU(u.nX),t.rXU(v.X),t.rXU(u.Ix),t.rXU(w.O),t.rXU(F.bZ),t.rXU(t.gRc),t.rXU(S.Z))}}static{this.\u0275cmp=t.VBU({type:a,selectors:[["app-enquiry-details"]],decls:20,vars:5,consts:[[1,"enquiry-details-container"],["loaderId","enquiry-details-loader","text","Loading Enquiry Details..."],["mat-raised-button","","color","accent",3,"click"],["mat-raised-button","","color","primary",1,"create-follow-up-btn",3,"click"],[4,"ngIf"],["class","latest-follow-up-card",4,"ngIf"],[1,"follow-ups-panel"],[4,"ngFor","ngForOf"],[1,"status-container"],[3,"ngModelChange","ngModel"],[3,"value",4,"ngFor","ngForOf"],["mat-raised-button","","color","primary",3,"click"],[1,"details-grid"],[1,"detail-item"],[1,"detail-item","full-width"],[3,"value"],[1,"latest-follow-up-card"],[1,"follow-up-status"],[3,"ngClass"],[1,"follow-up-description"],[1,"next-action-date"],["mat-line","",1,"follow-up-header"],[1,"follow-up-status",3,"ngClass"],["mat-line","",1,"follow-up-dates"],[1,"follow-up-created"],[1,"follow-up-next-action"],["mat-line","",1,"follow-up-description"]],template:function(i,n){1&i&&(t.j41(0,"div",0),t.nrm(1,"app-loader",1),t.j41(2,"button",2),t.bIt("click",function(){return n.onAction()}),t.EFF(3,"Back"),t.k0s(),t.EFF(4,"\xa0\xa0 "),t.j41(5,"button",3),t.bIt("click",function(){return n.openCreateFollowUpDialog()}),t.j41(6,"mat-icon"),t.EFF(7,"add"),t.k0s(),t.EFF(8," Create Follow-up "),t.k0s(),t.DNE(9,j,90,24,"mat-card",4)(10,R,4,0,"mat-card",4)(11,I,20,12,"mat-card",5),t.j41(12,"mat-expansion-panel",6)(13,"mat-expansion-panel-header")(14,"mat-panel-title"),t.EFF(15," All Follow-ups "),t.k0s(),t.j41(16,"mat-panel-description"),t.EFF(17),t.k0s()(),t.j41(18,"mat-list"),t.DNE(19,$,21,12,"mat-list-item",7),t.k0s()()()),2&i&&(t.R7$(9),t.Y8G("ngIf",!n.loading&&!n.error),t.R7$(),t.Y8G("ngIf",n.error),t.R7$(),t.Y8G("ngIf",!n.loading&&!n.error&&n.enquiryDetails.latest_follow_up),t.R7$(6),t.SpI(" Click to view ",n.enquiryDetails.follow_ups.length," follow-ups "),t.R7$(2),t.Y8G("ngForOf",n.enquiryDetails.follow_ups))},dependencies:[c.YU,c.Sq,c.bT,p.An,d.GK,d.Z2,d.WN,d.Q6,g.jt,g.YE,D.q,s.RN,s.m2,s.MM,s.Lc,s.dh,h.$z,k.V,y.rl,y.nJ,C.VO,q.wT,m.BC,m.vS,c.vh],styles:["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{height:100%;background:#d7e3ff}.text-center[_ngcontent-%COMP%]{text-align:center}.ml20[_ngcontent-%COMP%]{margin-left:20px!important}.mr20[_ngcontent-%COMP%]{margin-right:20px!important}.mt20[_ngcontent-%COMP%]{margin-top:20px!important}.mb20[_ngcontent-%COMP%]{margin-bottom:20px!important}.ml10[_ngcontent-%COMP%]{margin-left:10px!important}.mr10[_ngcontent-%COMP%]{margin-right:10px!important}.mt10[_ngcontent-%COMP%]{margin-top:10px!important}.mb10[_ngcontent-%COMP%]{margin-bottom:10px!important}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{height:100%;margin:0;padding:0;font-family:Roboto,Segoe UI,Helvetica Neue,Arial,sans-serif;background:#d7e3ff;overflow-x:hidden}body[_ngcontent-%COMP%]{min-height:100vh;width:100%;max-width:100vw}.full-width[_ngcontent-%COMP%]{width:100%;max-width:100%;box-sizing:border-box}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{height:100%}body[_ngcontent-%COMP%]{margin:0;font-family:Roboto,Helvetica Neue,sans-serif}body[_ngcontent-%COMP%]{font-family:Roboto,Segoe UI,Helvetica Neue,Arial,sans-serif;background-color:#d7e3ff;color:#000000de}.primary-bg[_ngcontent-%COMP%]{background-color:#3f51b5;color:#fff}.secondary-bg[_ngcontent-%COMP%]{background-color:#ff4081;color:#fff}.accent-bg[_ngcontent-%COMP%]{background-color:#ffd740;color:#000000de}[_ngcontent-%COMP%]:export{primaryColor:#3f51b5;secondaryColor:#ff4081;accentColor:#ffd740}.enquiry-details-container[_ngcontent-%COMP%]{padding:20px;max-width:100%;margin:0 auto}.enquiry-details-container[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]{margin-bottom:20px}.enquiry-details-container[_ngcontent-%COMP%]   .details-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:20px}.enquiry-details-container[_ngcontent-%COMP%]   .details-grid[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#3f51b5;border-bottom:2px solid #3f51b5;padding-bottom:5px;margin-bottom:10px}.enquiry-details-container[_ngcontent-%COMP%]   .details-grid[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:5px 0}.enquiry-details-container[_ngcontent-%COMP%]   .details-grid[_ngcontent-%COMP%]   .detail-item.full-width[_ngcontent-%COMP%]{grid-column:1/-1}mat-spinner[_ngcontent-%COMP%]{margin:20px auto}.latest-follow-up-card[_ngcontent-%COMP%]{margin-top:20px;border-left:5px solid #3f51b5;box-shadow:0 4px 8px #0000001a}.follow-up-status[_ngcontent-%COMP%]{display:flex;align-items:center;margin-bottom:10px}.follow-up-status[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-right:8px}.follow-up-status[_ngcontent-%COMP%]   .status-success[_ngcontent-%COMP%]{color:#4caf50}.follow-up-status[_ngcontent-%COMP%]   .status-closed[_ngcontent-%COMP%]{color:#f44336}.follow-up-status[_ngcontent-%COMP%]   .status-default[_ngcontent-%COMP%]{color:#ffc107}.follow-up-description[_ngcontent-%COMP%]{font-style:italic;margin-bottom:10px}.next-action-date[_ngcontent-%COMP%]{display:flex;align-items:center;color:#757575}.next-action-date[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:18px;margin-right:5px}.follow-ups-panel[_ngcontent-%COMP%]{margin-top:20px}.follow-up-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:5px}.follow-up-status[_ngcontent-%COMP%]{padding:2px 8px;border-radius:12px;font-size:.9em;font-weight:700}.follow-up-status.status-success[_ngcontent-%COMP%]{background-color:#4caf50;color:#fff}.follow-up-status.status-closed[_ngcontent-%COMP%]{background-color:#f44336;color:#fff}.follow-up-status.status-default[_ngcontent-%COMP%]{background-color:#ffc107;color:#000}.follow-up-dates[_ngcontent-%COMP%]{display:flex;justify-content:space-between;font-size:.9em;color:#757575;margin-bottom:5px}.follow-up-dates[_ngcontent-%COMP%]   .follow-up-created[_ngcontent-%COMP%], .follow-up-dates[_ngcontent-%COMP%]   .follow-up-next-action[_ngcontent-%COMP%]{display:flex;align-items:center}.follow-up-dates[_ngcontent-%COMP%]   .follow-up-created[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .follow-up-dates[_ngcontent-%COMP%]   .follow-up-next-action[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:16px;height:16px;width:16px;margin-right:4px}.follow-up-description[_ngcontent-%COMP%]{display:flex;align-items:flex-start;font-style:italic;margin-top:5px;margin-bottom:10px}.follow-up-description[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:16px;height:16px;width:16px;margin-right:4px;margin-top:3px}mat-list-item[_ngcontent-%COMP%]{margin-bottom:15px}mat-divider[_ngcontent-%COMP%]{margin-top:10px;margin-bottom:10px}.status-container[_ngcontent-%COMP%]{display:flex;align-items:center;gap:16px;margin-left:auto}.status-container[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:150px}"]})}}return a})();var T=o(3670),A=o(9183),G=o(3887);const N=[{path:"",component:U}];let X=(()=>{class a{static{this.\u0275fac=function(i){return new(i||a)}}static{this.\u0275mod=t.$C({type:a})}static{this.\u0275inj=t.G2t({imports:[c.MD,u.iI.forChild(N),p.m_,d.MY,g.Fg,F.hM,M.th.forRoot(E.d),T.CreateFollowUpDialogModule,A.D6,s.Hu,p.m_,h.Hl,G.G,C.Ve,m.YN,x.uc]})}}return a})()}}]);