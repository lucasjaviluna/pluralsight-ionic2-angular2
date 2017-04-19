import { Component } from '@angular/core';
// import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoadingController, NavController, NavParams } from 'ionic-angular';

import {TeamHome} from '../pages';

import {EliteApi} from '../../shared/shared';

import * as _ from 'lodash';
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
  private allTeams: any;
  private allTeamDivisions: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private eliteApi: EliteApi,
              private loadingController: LoadingController) {
  }

  ionViewDidLoad() {
    let selectedTourney = this.navParams.data;

    let loader = this.loadingController.create({
      content: 'Getting data...'
    });
    loader.present().then(() => {
      this.eliteApi.getTournamentData(selectedTourney.id)
      .subscribe(data => {
        this.allTeams = data.teams;
        this.allTeamDivisions = _.chain(data.teams)
        .groupBy('division')
        .toPairs()
        .map(item => _.zipObject(['divisionName', 'divisionTeams'], item))
        .value();

        this.teams = this.allTeamDivisions;// data.teams;
        console.log('division teams', this.teams);
        loader.dismiss();
      });
    });
    console.log('ionViewDidLoad Teams');
  }

  itemTapped(event, team) {
    this.navCtrl.push(TeamHome, team);
  }
}
