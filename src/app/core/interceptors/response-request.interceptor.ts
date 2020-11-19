import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import {environment} from "../../../environments/environment";

@Injectable()
export class ResponseRequestInterceptor implements HttpInterceptor {

    constructor() {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // ----------------------------- append with credentials to request
        // request = request.clone({
        //   withCredentials: true
        // });
        // ----------------------------- handle success error and success response
        return next.handle(request).pipe(
            tap((event: HttpEvent<any>) => {
              if (event instanceof HttpResponse) {
                 // if (event.url.includes('/login')) {
                 //   location.href = `${environment.apiUrl}`;
                 // }
              }
            }),
            catchError(err => {
                if (err.status === 401) {
                  return throwError(err);
                } else if (err.status === 404) {
                    return throwError(err.error);
                } else if (err.status === 0 || err.url.includes('/login')) { // navigate to old angularJs app
                   // location.href = `${environment.apiUrl}`;
                } else if (err.status === 400) {
                    return throwError(err);
                } else if (err.status === 302) {
                  return throwError(err);
                }
                // const error = err.message || err.statusText;
                return throwError(err);
            }),
          map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                  let newBody;
                  if (typeof event.body === 'string') {
                    const forIndex = event.body.indexOf('for(;;);', 0);
                    newBody = event.body.substr(0, forIndex);
                    try {
                      newBody = JSON.parse(newBody);
                      if (typeof newBody.taintObject !== 'undefined') {
                        newBody = newBody.taintObject;
                      }
                      /*else {
                        newBody = newBody.split('"').join('');
                      }*/
                    } catch (e) {
                      if(newBody)
                        newBody = newBody.split('"').join('');
                    }
                    return event.clone({ body: JSON.stringify(newBody) });
                  }
                  return event;
                }
            }));
    }
}
