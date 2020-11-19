import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {Router} from "@angular/router";
import {BaseService} from "../base.service";

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService {

  userPermission: any [] = null;
  isUserAccountUpdated = new BehaviorSubject<boolean>(false);

  constructor(http: HttpClient,
              private router: Router) {
    super(http);
  }

  getCurrentUser(): Observable<any> {
    return this.get(`user/current`, 'json' );
  }
}
