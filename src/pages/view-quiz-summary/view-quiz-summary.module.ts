import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewQuizSummaryPage } from './view-quiz-summary';

@NgModule({
  declarations: [
    ViewQuizSummaryPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewQuizSummaryPage),
  ],
})
export class ViewQuizSummaryPageModule {}
