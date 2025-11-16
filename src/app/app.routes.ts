import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { EducationExperienceComponent } from './education-experience/education-experience.component';
import { ExperienceComponent } from './education-experience/experience/experience.component';
import { EducationComponent } from './education-experience/education/education.component';
import { MiniProjectsComponent } from './projects/mini-projects/mini-projects.component';
import { WebsiteCloneDesignsComponent } from './projects/website-clone-designs/website-clone-designs.component';
import { ProfessionalProjectsComponent } from './projects/professional-projects/professional-projects.component';
import { ContactComponent } from './home/contact/contact.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent,
    children:[
      { path: '', component: ContactComponent },
      { path: 'contact', component:ContactComponent}
    ]
  },
  { path: 'about', component: AboutComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'projects', component: ProjectsComponent,
    children:[
      { path: '', redirectTo: 'professional-projects', pathMatch: 'full'},
      { path: 'professional-projects',component: ProfessionalProjectsComponent},
      { path: 'website-clone-designs', component: WebsiteCloneDesignsComponent},
      { path: 'mini-projects', component: MiniProjectsComponent},
    ]
   },

  {
    path: 'education-experience',
    component: EducationExperienceComponent,
    children: [
      { path: '', redirectTo: 'experience', pathMatch: 'full' },
      { path: 'education', component: EducationComponent },
      { path: 'experience', component: ExperienceComponent }
    ]
  }
];
