import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ViewMateriPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
    name : 'view-materi'
})
@Component({
  selector: 'page-view-materi',
  templateUrl: 'view-materi.html',
})
export class ViewMateriPage {
    datas : any;
    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.datas = this.navParams.get('data');
    }

    select(item){
        this.navCtrl.push('view-materi-detail',{data:item})
    }


}
