import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ResponseHandlerInterceptor {
    // eslint-disable-next-line no-useless-constructor
    constructor(private toastrService: ToastrService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request)
            .pipe(
                tap((response) => {
                    if (response instanceof HttpResponse) {
                        const isUrlPartIncluded = [ 'create', 'delete', 'update', 'attend', 'leave' ]
                            .some((urlPart) => response.url.includes(urlPart));
                        if (response.url.endsWith('register') ||
                            response.url.endsWith('login') ||
                            isUrlPartIncluded
                        ) {
                            this.toastrService.success(response.body.message, 'Success');
                        }
                    }
                }),
                catchError((error) => {
                    let errorMessage = error.error.message;
                    if (errorMessage.startsWith('Cast')) {
                        errorMessage = 'Not Found!';
                    }
                    this.toastrService.error(errorMessage, 'Error');
                    return throwError(error);
                })
            );
    }
}
