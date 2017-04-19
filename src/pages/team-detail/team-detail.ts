import { Component } from '@angular/core';
// import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NavController, NavParams } from 'ionic-angular';

import * as _ from 'lodash';
import {EliteApi} from '../../shared/shared';
import {Game} from '../pages';

@Component({
  selector: 'page-team-detail',
  templateUrl: 'team-detail.html'
})
export class TeamDetail {
  games: any[];
  team: any;
  private tourneyData: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private eliteApi: EliteApi) {
    console.log('NavParams: ', this.navParams);
  }

  ionViewDidLoad() {

    this.team = this.navParams.data;
    this.tourneyData = this.eliteApi.getCurrentTourney();

    console.log('ionViewDidLoad TeamDetail', this.tourneyData);

    //lodash functions
    this.games = _.chain(this.tourneyData.games)
                .filter(g => g.team1Id === this.team.id || g.team2Id === this.team.id)
                .map(g => {
                  let isTeam1 = (g.team1Id === this.team.id);
                  let opponentName = isTeam1 ? g.team2 : g.team1;
                  let scoreDisplay = this.getScoreDisplay(isTeam1, g.team1Score, g.team2Score);
                  return {
                    gameId: g.id,
                    opponent: opponentName,
                    time: Date.parse(g.time),
                    location: g.location,
                    //locationUrl: g.locationUrl,
                    scoreDisplay: scoreDisplay,
                    homeAway: (isTeam1 ? "vs." : "at")
                  };
                })
                .value();
  }

  getScoreDisplay(isTeam1, team1Score, team2Score) {
    if (team1Score && team2Score) {
      let teamScore = (isTeam1 ? team1Score : team2Score);
      let opponentScore = (isTeam1 ? team2Score : team1Score);
      let winIndicator = teamScore > opponentScore ? "W: " : "L: ";
      return winIndicator + teamScore + '-' + opponentScore;
    } else {
      return "";
    }
  }

  gameClicked($event, game) {
    let sourceGame = this.tourneyData.games.find(g => g.id === game.gameId);
    console.log('sourceGame', sourceGame);
    this.navCtrl.parent.parent.push(Game, sourceGame);
  }

  goHome() {
    console.log('parent', this.navCtrl.parent);
    this.navCtrl.parent.parent.popToRoot();
  }
}
