import { Component } from '@angular/core';
import { ResumeService } from '../resume.service';
import { Resume } from '../resume';

@Component({
  selector: 'app-header-component',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  resume: Resume;

  constructor(public resumeService: ResumeService) {
    this.resume = this.resumeService.getResume();
  }
}
