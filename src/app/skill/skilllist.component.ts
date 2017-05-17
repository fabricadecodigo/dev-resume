import { Component } from '@angular/core';
import { ResumeService } from '../resume.service';
import { Resume } from '../resume';

@Component({
  selector: 'app-skill-list-component',
  templateUrl: './skilllist.component.html'
})
export class SkillListComponent  {
  resume: Resume;

  constructor(public resumeService: ResumeService) {
    this.resume = this.resumeService.getResume();
  }
}
