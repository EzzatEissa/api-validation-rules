import { Injectable } from '@angular/core';
import {BaseService} from '../../core/service/base.service';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class RuleService extends BaseService {

  MY_RULE_SET = 'userRules';

  constructor(http: HttpClient,
              private router: Router) {
    super(http);
  }

  readRuleFile(): Observable<any> {
    return null;
  }

  addNewRuleSet(ruleSet: string, name: string) {
    let myRuleSetStr = localStorage.getItem(this.MY_RULE_SET);
    if (myRuleSetStr) {
      let myRuleSet = JSON.parse(myRuleSetStr);
      myRuleSet[name] = ruleSet;
      localStorage.setItem(this.MY_RULE_SET, JSON.stringify(myRuleSet));
    }
  }

  updateNewRuleSet(ruleSet: string, newName: string, oldName: string) {
    let myRuleSetStr = localStorage.getItem(this.MY_RULE_SET);
    if (myRuleSetStr) {
      let myRuleSet = JSON.parse(myRuleSetStr);
      myRuleSet[newName] = myRuleSet[oldName];
      delete myRuleSet[oldName];
      myRuleSet[newName] = ruleSet;
      localStorage.setItem(this.MY_RULE_SET, JSON.stringify(myRuleSet));
    }
  }
}
