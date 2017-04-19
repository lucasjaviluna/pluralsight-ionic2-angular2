import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs'; //rxjs/Rx

@Injectable()
export class EliteApi {
  private baseUrl = 'https://pluralsight-ionic-2.firebaseio.com/';
  currentTourney: any = {};

  constructor(private http: Http) {

  }

  getTournaments() {
    return new Promise(resolve => {
      this.http.get(`${this.baseUrl}/tournaments.json`)
        .subscribe(res => resolve(res.json()));
    })
  }

  getTournamentData(tourneyId): Observable<any> {
    return this.http
      .get(`${this.baseUrl}/tournaments-data/${tourneyId}.json`)
      .map((response: Response) => {
        this.currentTourney = response.json();
        return this.currentTourney;
      })
  }

  getCurrentTourney() {
    return this.currentTourney;
  }
}
