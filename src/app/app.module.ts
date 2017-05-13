import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { HeaderComponent }  from './header/header.component';
import { FooterComponent }  from './footer/footer.component';
import { AboutComponent }  from './about/about.component';
import { ContactComponent }  from './contact/contact.component';
import { SkillListComponent }  from './skill/skilllist.component';

import { HttpModule } from '@angular/http';
import { ResumeService } from './resume.service';

@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    SkillListComponent
  ],
  bootstrap: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    SkillListComponent
  ],
  providers: [
    ResumeService
  ]
})
export class AppModule { }
