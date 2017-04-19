import { Component } from '@angular/core';
// import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NavController, NavParams } from 'ionic-angular';

import {MyTeamsPage, Teams} from '../pages';

import {EliteApi} from '../../shared/shared';
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

  tournaments: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private eliteApi: EliteApi) {
  }

  itemTapped(event, tournament) {
    this.navCtrl.push(Teams, tournament);
  }

  ionViewDidLoad() {
    console.log('lifecycle: ionViewDidLoad Tournaments');
    this.eliteApi.getTournaments().then(data => this.tournaments = data);
  }

  ionViewLoaded() {
    console.log('lifecycle: ionViewLoaded Tournaments');
    //this.eliteApi.getTournaments().then(data => this.tournaments = data);
  }

  ionViewWillEnter() {
    console.log('lifecycle: ionViewDidWillEnter Tournaments');
  }

  ionViewWillLeave() {
    console.log('lifecycle: ionViewWillLeave Tournaments');
  }

  ionViewDidUnload() {
    console.log('lifecycle: ionViewDidUnload Tournaments');
  }
  // navigate() {
  //   // this.navCtrl.push(MyTeamsPage);
  //   this.navCtrl.pop();
  // }
}
