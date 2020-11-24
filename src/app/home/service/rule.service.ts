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
  MY_CUSTOM_RULE = 'userCustomRule';

  constructor(http: HttpClient,
              private router: Router) {
    super(http);
  }

  readRuleFile(): Observable<any> {
    return null;
  }

  addNewRuleSet(ruleSet: string, name: string) {
    const myRuleSetStr = localStorage.getItem(this.MY_RULE_SET);
    if (myRuleSetStr) {
      const myRuleSet = JSON.parse(myRuleSetStr);
      myRuleSet[name] = ruleSet;
      localStorage.setItem(this.MY_RULE_SET, JSON.stringify(myRuleSet));
    }
  }

  updateNewRuleSet(ruleSet: string, newName: string, oldName: string) {
    const myRuleSetStr = localStorage.getItem(this.MY_RULE_SET);
    if (myRuleSetStr) {
      const myRuleSet = JSON.parse(myRuleSetStr);
      myRuleSet[newName] = myRuleSet[oldName];
      delete myRuleSet[oldName];
      myRuleSet[newName] = ruleSet;
      localStorage.setItem(this.MY_RULE_SET, JSON.stringify(myRuleSet));
    }
  }

  addNewCustomRule(ruleSet: string, name: string) {
    const myCustomRuleSetStr = localStorage.getItem(this.MY_CUSTOM_RULE);
    if (myCustomRuleSetStr) {
      const myRuleSet = JSON.parse(myCustomRuleSetStr);
      delete ruleSet['ruleName'];
      if (!myRuleSet['rules'][name]) {
        myRuleSet['rules'][name] = {};
      }
      myRuleSet['rules'][name] = ruleSet;
      localStorage.setItem(this.MY_CUSTOM_RULE, JSON.stringify(myRuleSet));
    }
  }

  updateNewCustomRule(ruleSet: string, newName: string, oldName: string) {
    const myCustomRuleStr = localStorage.getItem(this.MY_CUSTOM_RULE);
    if (myCustomRuleStr) {
      const myCustomRule = JSON.parse(myCustomRuleStr);
      myCustomRule['rules'][newName] = myCustomRule['rules'][oldName];
      delete myCustomRule['rules'][oldName];
      myCustomRule['rules'][newName] = ruleSet;
      localStorage.setItem(this.MY_CUSTOM_RULE, JSON.stringify(myCustomRule));
    }
  }


  deleteCustomRule(name: string) {
    const myCustomRuleStr = localStorage.getItem(this.MY_CUSTOM_RULE);
    if (myCustomRuleStr) {
      const myCustomRule = JSON.parse(myCustomRuleStr);
      delete myCustomRule['rules'][name];
      localStorage.setItem(this.MY_CUSTOM_RULE, JSON.stringify(myCustomRule));
    }
  }
}
