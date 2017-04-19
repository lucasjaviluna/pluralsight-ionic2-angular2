import {Component} from '@angular/core';
import {NavController, LoadingController} from 'ionic-angular';
// import {Tournaments} from './pages';
import {Tournaments} from '../tournaments/tournaments';
// import {TournamentsModule} from '../tournaments/tournaments.module';

import {EliteApi} from '../../shared/shared';
import {TeamHome} from '../pages';

@Component({
  templateUrl: 'my-teams.page.html'
})
export class MyTeamsPage {

  favorites = [
    {
      team: {id: 6182, name: 'HC Elite 7th', coach: 'Michelotti'},
      tournamentId: '3dd50aaf-6b03-4497-b074-d81703f07ee8',
      tournamentName: 'March Madness Tournament'
    },
    {
      team: {id: 1025, name: 'HC Elite', coach: 'Michelotti 2'},
      tournamentId: '3dd50aaf-6b03-4497-b074-d81703f07ee8',
      tournamentName: 'Holiday Hoops Challenge'
    }
  ];

  constructor(private nav: NavController,
              private loadingController: LoadingController,
              private eliteApi: EliteApi
  ) {}

  goToTournaments() {
    this.nav.push(Tournaments);
  }

  favoriteTapped($event, favorite) {
    let loader = this.loadingController.create({
      content: 'Getting data...',
      dismissOnPageChange: true
    });
    loader.present();
    this.eliteApi.getTournamentData(favorite.tournamentId)
        .subscribe(t => this.nav.push(TeamHome, favorite.team));
  }
}
