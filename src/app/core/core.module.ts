import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
    declarations: [
        HomeComponent,
        NotFoundComponent,
        FooterComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule
    ],
    exports: []
})
export class CoreModule {}
