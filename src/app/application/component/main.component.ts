import {Component, OnInit} from '@angular/core';
import {ApplicationService} from '../service/application.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  personaDialogDisplay = false;
  linkEnvToAppDialogDisplay = false;
  model: any = {};
  environments: any = [];
  MY_ENV = 'my_env';
  MY_APP = 'my_app';
  selectedEnvs: string [] = [];
  apps: any = [];
  selectedPersona = '';

  constructor(private applicationService: ApplicationService) {
  }

  ngOnInit() {
    this.loadEnvironments();
    this.loadApps();
  }

  loadEnvironments() {
    const myEnvs = localStorage.getItem(this.MY_ENV);
    if (myEnvs) {
      this.environments = JSON.parse(myEnvs);
    }
  }

  loadApps() {
    const myApps = localStorage.getItem(this.MY_APP);
    if (myApps) {
      this.apps = JSON.parse(myApps);
    }
  }

  openPersonaDialog() {
    this.personaDialogDisplay = true;
  }

  linkAppToEnvironments(personaType: any) {
    this.selectedPersona = personaType;
    this.personaDialogDisplay = false;
    this.linkEnvToAppDialogDisplay = true;
  }

  selectEnvToApp(envName: string) {
      if (this.selectedEnvs.indexOf(envName) === -1) {
        this.selectedEnvs.push(envName);
      } else {
        const index = this.selectedEnvs.indexOf(envName);
        if (index > -1) {
          this.selectedEnvs.splice(index, 1);
        }
      }
  }

  onSubmit() {
    if (this.selectedEnvs && this.selectedEnvs.length > 0) {
      this.applicationService.addApplication(this.model.name, this.selectedPersona, this.selectedEnvs);
    }
  }

  containsEnv(envName) {
    return this.selectedEnvs.some(entry => entry === envName);
  }
}
