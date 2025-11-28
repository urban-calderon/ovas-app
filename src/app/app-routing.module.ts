import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroductionPageComponent } from './pages/introduction/introduction.component';
import { ObjetivesPageComponent } from './pages/objetives/objetives.component';
import { ContentPageComponent } from './pages/content/content.component';
import { ActivityPageComponent } from './pages/activity/activity.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/introduccion',
    pathMatch: 'full'
  },
  {
    path: 'introduccion',
    component: IntroductionPageComponent
  },
  {
    path: 'objetivos',
    component: ObjetivesPageComponent
  },
  {
    path: 'contenido',
    component: ContentPageComponent
  },
  {
    path: 'actividad',
    component: ActivityPageComponent
  },
  {
    path: '**',
    redirectTo: 'introduccion'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
