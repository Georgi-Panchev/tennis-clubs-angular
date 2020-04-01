import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { HttpClientService } from './services/http-client.service';

import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
    declarations: [
        HomeComponent,
        HeaderComponent,
        FooterComponent,
        NotFoundComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        RouterModule
    ],
    providers: [
        HttpClientService
    ],
    exports: [
        HeaderComponent,
        FooterComponent
    ]
})
export class CoreModule {}
