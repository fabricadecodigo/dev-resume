import { Component } from '@angular/core';
import { ResumeService } from '../resume.service';
import { Resume } from '../resume';

@Component({
  selector: 'app-about-component',
  templateUrl: './about.component.html'
})
export class AboutComponent  {
  resume: Resume;

  constructor(public resumeService: ResumeService) {
    this.resume = this.resumeService.getResume();
  }
 }
