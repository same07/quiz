import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewQuizDetailPage } from './view-quiz-detail';

@NgModule({
  declarations: [
    ViewQuizDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewQuizDetailPage),
  ],
})
export class ViewQuizDetailPageModule {}
