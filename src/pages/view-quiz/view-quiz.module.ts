import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewQuizPage } from './view-quiz';

@NgModule({
  declarations: [
    ViewQuizPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewQuizPage),
  ],
})
export class ViewQuizPageModule {}
