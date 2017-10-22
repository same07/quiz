import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ViewSubCategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
    name : 'view-sub-category'
})
@Component({
  selector: 'page-view-sub-category',
  templateUrl: 'view-sub-category.html',
})
export class ViewSubCategoryPage {
    datas : any;
    type : any;
    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.datas = this.navParams.get('data');
        this.type = this.navParams.get('type');
    }

    select(item){
        if(this.navParams.get('type') == 'quiz'){
            this.navCtrl.push('view-quiz',{data:item.quiz});
        }else{
            this.navCtrl.push('view-materi', { data: item.materi });
        }
    }
}
