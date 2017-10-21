import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ViewQuizDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
    name : 'view-quiz-detail'
})
@Component({
  selector: 'page-view-quiz-detail',
  templateUrl: 'view-quiz-detail.html',
})
export class ViewQuizDetailPage {
    data : any;
    constructor(private viewCtrl : ViewController, public navCtrl: NavController, public navParams: NavParams) {
        this.data = this.navParams.get('data');
        console.log(this.data);
    }

    ionViewDidEnter(){
        this.data.jawaban = undefined;
    }

    save(){
        if(this.data.jawaban == undefined){
            return false;
        }
        this.viewCtrl.dismiss(this.data.jawaban);
    }

    selectImage(item){
        this.viewCtrl.dismiss(item);
    }

}
