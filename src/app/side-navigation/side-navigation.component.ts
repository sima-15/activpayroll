import { Component, Input, Output, EventEmitter } from "@angular/core";
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "side-nav",
  styleUrls: ["./side-navigation.component.css"],
  templateUrl: "./side-navigation.component.html",
})
export class SidenavComponent {
  @Input() isExpanded: boolean;
  @Output() toggleMenu = new EventEmitter();
  
  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.matIconRegistry
      .addSvgIcon("home", this.domSanitizer.bypassSecurityTrustResourceUrl("../../assets/icons/home.svg"))
      .addSvgIcon('cheveron-right', this.domSanitizer.bypassSecurityTrustResourceUrl("../../assets/icons/cheveron-right.svg"))
      .addSvgIcon('document-duplicate', this.domSanitizer.bypassSecurityTrustResourceUrl("../../assets/icons/document-duplicate.svg"))
      .addSvgIcon('credit-card', this.domSanitizer.bypassSecurityTrustResourceUrl("../../assets/icons/credit-card.svg"))
      .addSvgIcon('clipboard-list', this.domSanitizer.bypassSecurityTrustResourceUrl("../../assets/icons/clipboard-list.svg"))
  }

  public routeLinks = [
    { link: "payroll", name: "Admin Payroll", icon: "home" },
    {  link: "landing-page", name: "Client Payroll View", icon: "document-duplicate"},
    {  link: "authform", name: "Auth Form", icon: "credit-card"},
    {  link: "payroll_upcoming", name: "Kanban View", icon: "clipboard-list"},
    { link: "scheduler", name: "Kendo Scheduler", icon: "document-duplicate" },        
    {  link: "syncscheduler", name: "Syncfusion Scheduler", icon: "document-duplicate"},
    {  link: "kanban", name: "calendar-kaban", icon: "document-duplicate"}
    // {  link: "syncscheduler", name: "Settings", icon: "document-duplicate"}
  ];

}
