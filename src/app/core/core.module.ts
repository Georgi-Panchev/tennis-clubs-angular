import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
    declarations: [
        HomeComponent,
        NotFoundComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule
    ],
    exports: []
})
export class CoreModule {}
