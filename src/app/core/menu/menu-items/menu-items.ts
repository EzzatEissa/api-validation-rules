import {Injectable} from '@angular/core';

export interface ChildrenItems {
  state: string;
  name: string;
  type?: string;
  label?: string;
}

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
  label?: string;
  children?: ChildrenItems[];
}

const MENUITEMS = [
  {
    state: 'api-rule/home',
    name: 'Home',
    type: 'link',
    icon: 'fa fa-home',
  },
  {
    state: 'api-rule/app',
    name: 'Applications',
    type: 'link',
    icon: 'fa fa-desktop',
  },
  {
    state: 'api-rule/env',
    name: 'Environments',
    type: 'link',
    icon: 'fa fa-cogs',
  }

];

@Injectable()
export class MenuItems {
  getAll(): Menu[] {
    return MENUITEMS;
  }

  add(menu: any) {
    MENUITEMS.push(menu);
  }
}
