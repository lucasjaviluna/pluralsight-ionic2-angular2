import { Component } from '@angular/core';
// import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the TeamDetail page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-team-detail',
  templateUrl: 'team-detail.html'
})
export class TeamDetail {

  team: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.team = this.navParams.data;
    console.log('NavParams: ', this.navParams);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamDetail');
  }

}
