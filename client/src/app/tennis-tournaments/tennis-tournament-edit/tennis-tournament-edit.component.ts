import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { TennisTournamentModel } from '../shared/tennis-tournament.model';
import { TennisTournamentActions } from '../../store/tennis-tournaments/tennis-tournament.actions';

@Component({
    selector: 'app-tennis-tournament-edit',
    templateUrl: './tennis-tournament-edit.component.html'
})
export class TennisTournamentEditComponent implements OnInit, OnDestroy {
    private subscription: Subscription = new Subscription();
    tennisTournament: TennisTournamentModel = null;

    // eslint-disable-next-line no-useless-constructor
    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private store: Store<AppState>,
        private tennisTournamentActions: TennisTournamentActions
    ) {}

    ngOnInit(): void {
        this.subscription.add(
            this.store
                .select((state: AppState) => state.tennisTournaments.tennisTournament)
                .subscribe((tennisTournament: TennisTournamentModel) => {
                    this.tennisTournament = tennisTournament;
                })
        );
    }

    edit(tennisTournament) {
        console.log(tennisTournament);
        this.subscription.add(
            this.activatedRoute.params
                .subscribe((params: Params) => (
                    this.tennisTournamentActions.edit(params.tennisTournamentId, tennisTournament)
                ))
        );

        this.subscription.add(
            this.store
                .select((state: AppState) => state.tennisTournaments.isTennisTournamentEdited)
                .subscribe((isTennisTournamentEdited: boolean) => {
                    if (isTennisTournamentEdited) {
                        this.router.navigateByUrl('tennis-tournaments/list');
                    }
                })
        );
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
