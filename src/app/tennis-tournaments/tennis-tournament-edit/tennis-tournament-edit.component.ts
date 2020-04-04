import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { TennisTournamentModel } from '../shared/tennis-tournament.model';
import { TennisTournamentActions } from '../../store/tennis-tournaments/tennis-tournament.actions';

@Component({
    selector: 'app-tennis-tournament-edit',
    templateUrl: './tennis-tournament-edit.component.html',
    styleUrls: [ './tennis-tournament-edit.component.css' ]
})
export class TennisTournamentEditComponent implements OnInit, OnDestroy {

}
