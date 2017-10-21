import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ViewQuizSummaryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
    name : 'view-quiz-summary'
})
@Component({
  selector: 'page-view-quiz-summary',
  templateUrl: 'view-quiz-summary.html',
})
export class ViewQuizSummaryPage {
    score : any;
    datas : any;
    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.score = this.navParams.get('score');
        this.datas = this.navParams.get('data');
    }


}
