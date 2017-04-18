import { Component } from '@angular/core';
// import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NavController, NavParams } from 'ionic-angular';

import {MyTeamsPage, Teams} from '../pages';
/**
 * Generated class for the Tournaments page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
// @IonicPage()
@Component({
  selector: 'page-tournaments',
  templateUrl: 'tournaments.html',
})
export class Tournaments {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tournaments');
  }

  itemTapped() {
    this.navCtrl.push(Teams);
  }

  // navigate() {
  //   // this.navCtrl.push(MyTeamsPage);
  //   this.navCtrl.pop();
  // }
}
