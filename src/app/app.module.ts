import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './core/interceptors/jwt.interceptor';
import { ResponseHandlerInterceptor } from './core/interceptors/response-handler.interceptor';

import { StoreModule } from '@ngrx/store';
import { appReducers } from './store/app.reducers';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot(),
        AppRoutingModule,
        CoreModule,
        StoreModule.forRoot(appReducers)
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ResponseHandlerInterceptor, multi: true }
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {}
