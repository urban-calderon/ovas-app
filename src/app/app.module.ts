import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroductionPageComponent } from './pages/introduction/introduction.component';
import { ObjetivesPageComponent } from './pages/objetives/objetives.component';
import { ContentPageComponent } from './pages/content/content.component';
import { ActivityPageComponent } from './pages/activity/activity.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MultipleChoiceQuestionComponent } from './components/multiple-choice-question/multiple-choice-question.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroductionPageComponent,
    ObjetivesPageComponent,
    ContentPageComponent,
    ActivityPageComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    MultipleChoiceQuestionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
