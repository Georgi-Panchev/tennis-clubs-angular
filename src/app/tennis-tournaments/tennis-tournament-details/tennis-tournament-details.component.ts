import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { TennisTournamentModel } from '../shared/tennis-tournament.model';
import { TennisTournamentActions } from '../../store/tennis-tournaments/tennis-tournament.actions';
import { Router } from '@angular/router';
import { UserState } from '../../store/users/user.state';

@Component({
    selector: 'app-tennis-tournament-details',
    templateUrl: './tennis-tournament-details.component.html',
    styleUrls: [ './tennis-tournament-details.component.css' ]
})
export class TennisTournamentDetailsComponent implements OnInit, OnDestroy {

}
