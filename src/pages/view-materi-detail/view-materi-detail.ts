import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ViewMateriDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
    name : 'view-materi-detail'
})
@Component({
  selector: 'page-view-materi-detail',
  templateUrl: 'view-materi-detail.html',
})
export class ViewMateriDetailPage {
    data : any;
    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.data = this.navParams.get('data');
    }


}
