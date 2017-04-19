import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {Standings, TeamDetail, MyTeamsPage} from '../pages';
/**
 * Generated class for the TeamHome page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-team-home',
  templateUrl: 'team-home.html',
})
export class TeamHome {

  team: any;
  teamDetailTab = TeamDetail;
  standingsTab = Standings;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.team = this.navParams.data;
    console.log('team', this.team);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamHome');
  }

  goHome() {
    //para que vaya al home poniendo el stack en cero
    //evita que aparezca la flecha de back en la home
    this.navCtrl.popToRoot();
  }
}
