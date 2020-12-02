import { Component, OnInit } from '@angular/core';
import {EnvironmentService} from '../../service/environment.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  model: any = {};
  environments: any = [];
  isExist = false;
  MY_ENV = 'my_env';
  constructor(private envService: EnvironmentService) { }

  ngOnInit() {

    this.loadEnvironments();
  }

  loadEnvironments() {
    const myEnvs = localStorage.getItem(this.MY_ENV);
    if (myEnvs) {
      this.environments = JSON.parse(myEnvs);
    }
  }


  createNewEnvironment() {

  }

  onSubmit() {
    console.log(this.model);
    this.isExist = false;
    this.environments.forEach(env => {
      if (env.name === this.model.name) {
        this.isExist = true;
        return false;
      }
    });
    const environment = JSON.stringify(this.model);
    if (!this.isExist) {
      this.envService.addEnvironment(JSON.parse(environment));
    }
    this.loadEnvironments();

  }
}
