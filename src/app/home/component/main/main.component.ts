import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AuthService} from '../../../core/service/auth/auth.service';
import {Rule} from '../../model/rule';
import {RuleService} from '../../service/rule.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class MainComponent implements OnInit {

  newRuleSetDisplay = false;
  newRuleSetDisplayView = false;
  dtSelectedRule: Rule;
  model: any = {};
  public objKeys = Object.keys;
  public objUserRuleKeys = Object.keys;
  defaultValues: string[] = ['error', 'warning', 'off'];
  MY_RULE_SET = 'userRules';
  currentUserRuleSet: any = {};
  selectedRuleSet: any = {};
  defaultRules: any = {
    'operation': [
      {
        'name': 'undefined_tag',
        'description': 'Flag a tag that is in operations and not listed in tags on the top level.',
        'spec': 'shared',
        'defaultValue': 'warning'
      },
      {
        'name': 'unused_tag',
        'description': 'Flag a tag that is listed in tags on the top level that is not used in the spec.',
        'spec': 'shared',
        'defaultValue': 'warning'
      },
      {
        'name': 'no_consumes_for_put_or_post',
        'description': 'Flag put or post operations that do not have a consumes field.',
        'spec': 'swagger2',
        'defaultValue': 'error'
      },
      {
        'name': 'get_op_has_consumes',
        'description': 'Flag get operations that contain a consumes field.',
        'spec': 'swagger2',
        'defaultValue': 'warning'
      },
      {
        'name': 'no_produces',
        'description': 'Flag operations that do not have a produces field (except for head and operations that return a 204).',
        'spec': 'swagger2',
        'defaultValue': 'error'
      },
      {
        'name': 'no_operation_id',
        'description': 'Flag any operations that do not have an operationId field.',
        'spec': 'shared',
        'defaultValue': 'warning'
      },
      {
        'name': 'operation_id_case_convention',
        'description': 'Flag any operationId that does not follow a given case convention.',
        'spec': 'shared',
        'defaultValue': 'warning'
      },
      {
        'name': 'no_summary',
        'description': 'Flag any operations that do not have a summary field.',
        'spec': 'shared',
        'defaultValue': 'warning'
      },
      {
        'name': 'no_array_responses',
        'description': 'Flag any operations with a top-level array response.',
        'spec': 'shared',
        'defaultValue': 'error'
      },
      {
        'name': 'parameter_order',
        'description': 'Flag any operations with optional parameters before a required param.',
        'spec': 'shared',
        'defaultValue': 'warning'
      },
      {
        'name': 'operation_id_naming_convention',
        'description': 'Flag any operationId that does not follow naming convention.',
        'spec': 'shared',
        'defaultValue': 'warning'
      },
      {
        'name': 'no_request_body_content',
        'description': 'Flag any operations with a requestBody that does not have a content field.',
        'spec': 'oas3',
        'defaultValue': 'error'
      },
      {
        'name': 'no_request_body_name',
        'description': 'Flag any operations with a non-form requestBody that does not have a name set with x-codegen-request-body-name.',
        'spec': 'oas3',
        'defaultValue': 'warning'
      }
    ],
    'pagination': [
      {
        'name': 'pagination_style',
        'description': 'Flag any parameter or response schema that does not follow pagination requirements.',
        'spec': 'oas3',
        'defaultValue': 'warning'
      }
    ],
    'parameters': [
      {
        'name': 'required_param_has_default',
        'description': 'Flag any required parameter that specifies a default value.',
        'spec': 'shared',
        'defaultValue': 'warning'
      },
      {
        'name': 'no_parameter_description',
        'description': 'Flag any parameter that does not contain a description field.',
        'spec': 'shared',
        'defaultValue': 'warning'
      },
      {
        'name': 'param_name_case_convention',
        'description': 'Flag any parameter with a name field that does not follow a given case convention.',
        'spec': 'shared',
        'defaultValue': 'error'
      },
      {
        'name': 'invalid_type_format_pair',
        'description': 'Flag any parameter that does not follow the data type/format rules.json.',
        'spec': 'shared',
        'defaultValue': 'error'
      },
      {
        'name': 'content_type_parameter',
        'description': 'Flag any parameter that explicitly defines a Content-Type. That should be defined by the consumes field.',
        'spec': 'shared',
        'defaultValue': 'error'
      },
      {
        'name': 'accept_type_parameter',
        'description': 'Flag any parameter that explicitly defines an Accept type. That should be defined by the produces field.',
        'spec': 'shared',
        'defaultValue': 'error'
      },
      {
        'name': 'authorization_parameter',
        'description': 'Flag any parameter that explicitly defines an Authorization type. That should be defined by the securityDefinitions/security fields.',
        'spec': '',
        'defaultValue': 'off'
      },
      {
        'name': 'no_in_property',
        'description': 'Flag any parameter that does not define an in property.',
        'spec': 'oas3',
        'defaultValue': 'error'
      },
      {
        'name': 'invalid_in_property',
        'description': 'Flag any parameter that has an invalid in property.',
        'spec': 'oas3',
        'defaultValue': 'error'
      },
      {
        'name': 'missing_schema_or_content',
        'description': 'Flag any parameter that does not define its data type with schema or content.',
        'spec': 'oas3',
        'defaultValue': 'error'
      },
      {
        'name': 'has_schema_and_content',
        'description': 'Flag any parameter that defines data type with both schema and content.',
        'spec': 'oas3',
        'defaultValue': 'error'
      }
    ],
    'paths': [
      {
        'name': 'missing_path_parameter',
        'description': 'For a path that contains path parameters, flag any operations that do not correctly define those parameters.',
        'spec': 'shared',
        'defaultValue': 'error'
      },
      {
        'name': 'snake_case_only',
        'description': 'Flag any path segment that does not use snake case.',
        'spec': 'shared',
        'defaultValue': 'off'
      },
      {
        'name': 'paths_case_convention',
        'description': 'Flag any path segment that does not follow a given case convention. snake_case_only must be off to use.',
        'spec': 'shared',
        'defaultValue': 'error'
      },
      {
        'name': 'duplicate_path_parameter',
        'description': 'Flag any path parameters that have identical definitions in all operations.',
        'spec': 'shared',
        'defaultValue': 'off'
      }
    ],
    'responses': [
      {
        'name': 'inline_response_schema',
        'description': 'Flag any response object with a schema that does not reference a named model.',
        'spec': 'shared',
        'defaultValue': 'warning'
      },
      {
        'name': 'no_response_codes',
        'description': 'Flag any response object that has no valid response codes.',
        'spec': 'oas3',
        'defaultValue': 'error'
      },
      {
        'name': 'no_success_response_codes',
        'description': 'Flag any response object that has no success response codes.',
        'spec': 'oas3',
        'defaultValue': 'warning'
      },
      {
        'name': 'no_response_body',
        'description': 'Flag any non-204 success responses without a response body.',
        'spec': 'oas3',
        'defaultValue': 'warning'
      },
      {
        'name': 'ibm_status_code_guidelines',
        'description': 'Flag any violations of status code conventions per IBM API Handbook',
        'spec': 'oas3',
        'defaultValue': 'warning'
      }
    ],
    'schemas': [
      {
        'name': 'invalid_type_format_pair',
        'description': 'Flag any schema that does not follow the data type/format rules.json.',
        'spec': 'shared',
        'defaultValue': 'error'
      },
      {
        'name': 'snake_case_only',
        'description': 'Flag any property with a name that is not lower snake case.',
        'spec': 'shared',
        'defaultValue': 'off'
      },
      {
        'name': 'no_schema_description',
        'description': 'Flag any schema without a description field.',
        'spec': 'shared',
        'defaultValue': 'warning'
      },
      {
        'name': 'no_property_description',
        'description': 'Flag any schema that contains a property without a description field.',
        'spec': 'shared',
        'defaultValue': 'warning'
      },
      {
        'name': 'description_mentions_json',
        'description': 'Flag any schema with a property description that mentions the word JSON.',
        'spec': 'shared',
        'defaultValue': 'warning'
      },
      {
        'name': 'array_of_arrays',
        'description': 'Flag any schema with a property of type array with items of type array.',
        'spec': 'shared',
        'defaultValue': 'warning'
      }
    ],
    'security_definitions': [
      {
        'name': 'unused_security_schemes',
        'description': 'Flag any security scheme defined in securityDefinitions that is not used in the spec.',
        'spec': 'shared',
        'defaultValue': 'warning'
      },
      {
        'name': 'unused_security_scopes',
        'description': 'Flag any security scope defined in securityDefinitions that is not used in the spec.',
        'spec': 'shared',
        'defaultValue': 'warning'
      }
    ],
    'security': [
      {
        'name': 'invalid_non_empty_security_array',
        'description': 'Flag any non-empty security array this is not of type OAuth2',
        'spec': 'shared',
        'defaultValue': 'error'
      }
    ],
    'walker': [
      {
        'name': 'no_empty_descriptions',
        'description': 'Flag any description field in the spec with an empty or whitespace string.',
        'spec': 'shared',
        'defaultValue': 'error'
      },
      {
        'name': 'has_circular_references',
        'description': 'Flag any circular references found in the API document.',
        'spec': 'shared',
        'defaultValue': 'warning'
      },
      {
        'name': '$ref_siblings',
        'description': 'Flag any properties that are siblings of a $ref property.',
        'spec': 'shared',
        'defaultValue': 'off'
      },
      {
        'name': 'duplicate_sibling_description',
        'description': 'Flag descriptions sibling to $ref if identical to referenced description.',
        'spec': 'shared',
        'defaultValue': 'warning'
      },
      {
        'name': 'incorrect_ref_pattern',
        'description': 'Flag internal $ref values that do not point to the section they should (e.g. referencing parameters from a schema field).',
        'spec': 'shared',
        'defaultValue': 'warning'
      }
    ]
  };
  dialogHeader = '';
  selectedAction = '';
  selectedRuleName = '';
  constructor(private authService: AuthService,
              private ruleService: RuleService) {

   }

  ngOnInit() {
    this.loadAllRules();
  }


  loadAllRules() {
    let userRulesSetStr = localStorage.getItem(this.MY_RULE_SET);
    if (!userRulesSetStr) {
      const allMyRules = {'myDefaultRule': this.defaultRules};
      localStorage.setItem('userRules',  JSON.stringify(allMyRules));
    }
    userRulesSetStr = localStorage.getItem(this.MY_RULE_SET);
    const myRuleSetJson = JSON.parse(userRulesSetStr);
    this.currentUserRuleSet = myRuleSetJson;
  }

  logOut() {
    this.authService.logOut();
  }

  openRuleSetDialog(key: string, action: string) {
    this.newRuleSetDisplay = true;
    this.selectedAction = action;
    if (this.selectedAction === 'create') {
      this.dialogHeader = 'Create new Rule set';
    } else {
      this.dialogHeader = 'Update new Rule set';
    }
    this.model.name = key;
    if (action !== 'create') {
      this.selectedRuleName = key;
      this.selectedRuleSet = this.currentUserRuleSet[key];
    } else {
      this.selectedRuleSet = this.currentUserRuleSet['myDefaultRule'];
    }

  }

  onSubmit() {
    if (this.selectedAction !== 'create' && this.model.name !== this.selectedRuleName ) {
      this.ruleService.updateNewRuleSet(this.selectedRuleSet, this.model.name, this.selectedRuleName);
    } else {
      this.ruleService.addNewRuleSet(this.selectedRuleSet, this.model.name);
    }

    this.newRuleSetDisplay = false;
    this.loadAllRules();
  }

}
