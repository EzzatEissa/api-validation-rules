import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {BaseService} from '../../core/service/base.service';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentService extends BaseService {

  MY_ENV = 'my_env';

  constructor(http: HttpClient,
              private router: Router) {
    super(http);
  }

  addEnvironment(env: any) {
      const myEnvs = localStorage.getItem(this.MY_ENV);
      if (myEnvs) {
        const envs = JSON.parse(myEnvs);
        envs.push(env);
        localStorage.setItem(this.MY_ENV, JSON.stringify(envs));
      } else {
        const envs = [];
        envs.push(env);
        localStorage.setItem(this.MY_ENV, JSON.stringify(envs));
      }
    }
}
