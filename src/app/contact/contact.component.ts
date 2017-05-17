import { Component } from '@angular/core';
import { ResumeService } from '../resume.service';
import { Resume } from '../resume';

@Component({
  selector: 'app-contact-component',
  templateUrl: './contact.component.html'
})
export class ContactComponent  {
  resume: Resume;

  constructor(public resumeService: ResumeService) {
    this.resume = this.resumeService.getResume();
  }
}
