import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TennisClubModel } from '../shared/tennis-club.model';

@Component({
    selector: 'app-tennis-club-form',
    templateUrl: './tennis-club-form.component.html'
})
export class TennisClubFormComponent implements OnInit {
    @Input() tennisClub: TennisClubModel;
    @Input() buttonText;
    @Output() formEventEmitter: EventEmitter<TennisClubModel> = new EventEmitter();
    form: FormGroup;
    cityList: string[] = [ 'Sofia', 'Plovdiv', 'Varna', 'Burgas' ];
    rankList: string[] = [ 'Top', 'Medium', 'Low' ];

    // eslint-disable-next-line no-useless-constructor
    constructor(private formBuilder: FormBuilder) {}

    ngOnInit(): void {
        const imageUrlPattern = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;

        this.form = this.formBuilder.group({
            title: [ (this.tennisClub && this.tennisClub.title) || '',
                [ Validators.required, Validators.minLength(3) ] ],
            imageUrl: [ (this.tennisClub && this.tennisClub.imageUrl) || '',
                [ Validators.required, Validators.pattern(imageUrlPattern) ] ],
            city: [ (this.tennisClub && this.tennisClub.city) || '',
                Validators.required ],
            rank: [ (this.tennisClub && this.tennisClub.rank) || '',
                Validators.required ],
            courts: [ (this.tennisClub && this.tennisClub.courts) || '',
                [ Validators.required, Validators.min(1) ] ],
            hasLighting: [ (this.tennisClub && this.tennisClub.hasLighting) || false ],
            hasIndoorCourts: [ (this.tennisClub && this.tennisClub.hasIndoorCourts) || false ]
        });
    }

    submit() {
        this.formEventEmitter.emit(this.form.value);
    }

    get formControls() {
        return this.form.controls;
    }
}
