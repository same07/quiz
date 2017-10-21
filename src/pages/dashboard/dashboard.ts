import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
    name : 'dashboard'
})
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

    constructor(
        public navCtrl: NavController, 
        public navParams: NavParams
    ) {
    }

    startQuiz(){
        this.navCtrl.push('view-category',{type:"quiz"});
    }

    startMateri(){
        this.navCtrl.push('view-category',{type:"materi"});
    }

}
