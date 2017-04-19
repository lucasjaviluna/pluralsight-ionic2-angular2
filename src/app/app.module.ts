import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Game } from '../pages/game/game';
import { MyTeamsPage } from '../pages/my-teams/my-teams.page';
import { TeamDetail } from '../pages/team-detail/team-detail';
import { Teams } from '../pages/teams/teams';
import { Tournaments } from '../pages/tournaments/tournaments';

import { Standings, TeamHome } from '../pages/pages';

import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    Game,
    MyTeamsPage,
    TeamDetail,
    Teams,
    Tournaments,
    Standings,
    TeamHome
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    Game,
    MyTeamsPage,
    TeamDetail,
    Teams,
    Tournaments,
    Standings,
    TeamHome
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
