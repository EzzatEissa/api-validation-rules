import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {BaseService} from '../../core/service/base.service';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService extends BaseService {

  MY_APP = 'my_app';

  constructor(http: HttpClient,
              private router: Router) {
    super(http);
  }

  addApplication(name: any, personaType: string, envs: string[]) {
    const myApps = localStorage.getItem(this.MY_APP);
    if (myApps) {
      const myAppsJson = JSON.parse(myApps);
      myAppsJson.forEach(app => {
        if (app.name === name) {
          app.envs = envs;
          app.persona = personaType;
        }
      });
      localStorage.setItem(this.MY_APP, JSON.stringify(myAppsJson));
    } else {
      const apps = [{name: name, persona: personaType, envs: envs}]
      localStorage.setItem(this.MY_APP, JSON.stringify(apps));
    }
  }
}
