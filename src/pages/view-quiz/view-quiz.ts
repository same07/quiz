import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController } from 'ionic-angular';

/**
 * Generated class for the ViewQuizPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
    name : 'view-quiz'
})
@Component({
  selector: 'page-view-quiz',
  templateUrl: 'view-quiz.html',
})
export class ViewQuizPage {
    datas : any;
    isQuizStart : boolean = false;
    currentSequence : number = 0;
    score : number = 0;
    constructor(private alertCtrl : AlertController,private modalCtrl : ModalController,public navCtrl: NavController, public navParams: NavParams) {
        this.datas = this.navParams.get('data');
        this.currentSequence = 0;
    }

    startQuiz(){
        if(this.datas.length > 0){
            this.isQuizStart = true;
            this.currentSequence = 0;
            this.score = 0;
            let modal =this.modalCtrl.create('view-quiz-detail',{data:this.datas[this.currentSequence]});
            modal.present();
            modal.onDidDismiss(
                (dt:any) => {
                    if(dt != undefined){
                        if(dt.value == 1){
                            this.score++;
                        }
                        this.currentSequence = this.currentSequence*1 + 1;
                        this.nextQuiz();
                    }else{
                        this.isQuizStart = false;
                    }
                }
            );
        }else{
            let alert = this.alertCtrl.create({
                title : "Warning",
                subTitle : 'No Data Found'
            });
            alert.present();
        }
    }

    nextQuiz(){
        if(this.datas[this.currentSequence] == undefined){
            
            this.isQuizStart = false;
            return false;
        }
        let modal = this.modalCtrl.create('view-quiz-detail', { data: this.datas[this.currentSequence] });
        modal.present();
        modal.onDidDismiss(
            (dt: any) => {
                if (dt != undefined) {
                    if (dt.value == 1) {
                        this.score++;
                    }
                    this.currentSequence = this.currentSequence * 1 + 1;
                    this.nextQuiz();
                } else {
                    this.isQuizStart = false;
                }
            }
        );
    }



}
