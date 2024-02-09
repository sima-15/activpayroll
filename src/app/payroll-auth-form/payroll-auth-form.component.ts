import { Component, ViewEncapsulation } from '@angular/core';
import { State} from '@progress/kendo-data-query';
import { ServiceService } from '../service.service';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { SVGIcon, filePdfIcon } from '@progress/kendo-svg-icons';

@Component({
  selector: 'app-payroll-auth-form',
  templateUrl: './payroll-auth-form.component.html',
  styleUrls: ['./payroll-auth-form.component.css', './page-template.css'],
  encapsulation: ViewEncapsulation.None
})
export class PayrollAuthFormComponent {
  public view: any = [];
  public filePdfIcon: SVGIcon = filePdfIcon;
  public gridState: State = {
    sort: [],
    skip: 0,
    take: 5
  };

  constructor(public service: ServiceService, private sanitizer: DomSanitizer) { }


  public ngOnInit(): void {
    this.service.getSalaryComponents().subscribe(res => {
      this.view = res;
    }
    )
  }

  public customFontweight(code: string): SafeStyle {
    let result;
    result = code ? '500' : 'normal';
    return this.sanitizer.bypassSecurityTrustStyle(result);
  }
  public customDisplay(code: string): SafeStyle {
    let result;
    result = code ? 'none' : 'block';
    return this.sanitizer.bypassSecurityTrustStyle(result);
  }

  public reverseCustomDisplay(code: string): SafeStyle {
    let result;
    result = code ? 'block' : 'none';
    return this.sanitizer.bypassSecurityTrustStyle(result);
  }
}
