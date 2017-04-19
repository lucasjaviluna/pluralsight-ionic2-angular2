import { Component } from '@angular/core';
// import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NavController, NavParams } from 'ionic-angular';

import {TeamHome} from '../pages';

import {EliteApi} from '../../shared/shared';
/**
 * Generated class for the Teams page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
// @IonicPage()
@Component({
  selector: 'page-teams',
  templateUrl: 'teams.html',
})
export class Teams {
  teams = [];
  // teams = [
  //   {id: 1, name: 'HC Elite'},
  //   {id: 2, name: 'Team Takeover'},
  //   {id: 3, name: 'DC Thunder'},
  // ];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private eliteApi: EliteApi) {
  }

  ionViewDidLoad() {
    let selectedTourney = this.navParams.data;
    this.eliteApi.getTournamentData(selectedTourney.id)
        .subscribe(data => {
          this.teams = data.teams;
        });
    console.log('ionViewDidLoad Teams');
  }

  itemTapped(event, team) {
    this.navCtrl.push(TeamHome, team);
  }
}
