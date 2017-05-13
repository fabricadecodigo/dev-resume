import { Injectable } from '@angular/core';
import { Resume } from './resume';

@Injectable()
export class ResumeService {
  private resume: Resume;

  public getResume() {
    if (this.resume == null) {
      this.resume = new Resume();
    }
    return this.resume;
  }
}
