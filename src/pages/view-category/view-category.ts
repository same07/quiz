import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

import { ServiceProvider } from '../../providers/service/service';

/**
 * Generated class for the ViewCategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
    name : 'view-category'
})
@Component({
  selector: 'page-view-category',
  templateUrl: 'view-category.html',
})
export class ViewCategoryPage {
    datas : any;
    constructor(
        public navCtrl: NavController, 
        public navParams: NavParams,
        private service : ServiceProvider,
        private loadingCtrl : LoadingController
    ) {
        this.datas= [];
        this.loadData();
    }

    loadData(){
        let loading = this.loadingCtrl.create();
        loading.present();
        this.service.getCategory().then(
            (dt:any) => {
                loading.dismiss();
                this.datas = dt.data;
            }
        );
    }

    select(item){
        this.navCtrl.push('view-sub-category',{data:item.sub,type:this.navParams.get('type')});
    }


}
