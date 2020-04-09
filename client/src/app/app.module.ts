import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';

import { StoreModule, Store } from '@ngrx/store';
import { appReducers } from './store/app.reducers';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './core/interceptors/jwt.interceptor';
import { ResponseHandlerInterceptor } from './core/interceptors/response-handler.interceptor';

import { AppState } from './store/app.state';
import { AuthService } from './core/services/auth.service';
import { LOGIN_USER } from './store/users/user.actions';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot(),
        CoreModule,
        AppRoutingModule,
        StoreModule.forRoot(appReducers)
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ResponseHandlerInterceptor, multi: true }
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {
    constructor(
        private store: Store<AppState>,
        private authService: AuthService
    ) {
        if (authService.isUserAuthenticated()) {
            const payload = {
                success: authService.isUserAuthenticated(),
                token: authService.getToken(),
                user: authService.getUser()
            };
            store.dispatch({
                type: LOGIN_USER,
                payload
            });
        }
    }
}
