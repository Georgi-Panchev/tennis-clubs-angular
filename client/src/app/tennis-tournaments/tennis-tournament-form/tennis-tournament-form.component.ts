import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TennisTournamentModel } from '../shared/tennis-tournament.model';

@Component({
    selector: 'app-tennis-tournament-form',
    templateUrl: './tennis-tournament-form.component.html'
})
export class TennisTournamentFormComponent implements OnInit {
    @Input() tennisTournament: TennisTournamentModel;
    @Input() buttonText;
    @Output() formEventEmitter: EventEmitter<TennisTournamentModel> = new EventEmitter();
    form: FormGroup;
    ballList: string[] = [ 'Dunlop', 'Wilson', 'Head' ];

    // eslint-disable-next-line no-useless-constructor
    constructor(private formBuilder: FormBuilder) {}

    ngOnInit(): void {
        const imageUrlPattern = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;

        this.form = this.formBuilder.group({
            title: [ (this.tennisTournament && this.tennisTournament.title) || '',
                [ Validators.required, Validators.minLength(3) ] ],
            imageUrl: [ (this.tennisTournament && this.tennisTournament.imageUrl) || '',
                [ Validators.required, Validators.pattern(imageUrlPattern) ] ],
            balls: [ (this.tennisTournament && this.tennisTournament.balls) || '',
                Validators.required ],
            fee: [ (this.tennisTournament && this.tennisTournament.fee) || '',
                [ Validators.required, Validators.min(1) ] ]
        });
    }

    submit() {
        this.formEventEmitter.emit(this.form.value);
    }

    get formControls() {
        return this.form.controls;
    }
}
