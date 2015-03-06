import {State} from 'stateInjector';

@State( 'registrations')
export class RegistrationsState {
  constructor() {
    this.url = '^/sign-up';
    this.controller = 'RegistrationsCtrl';
    this.templateUrl = 'registrations/registrations.tpl.html';
  }
}

@State( 'registrationsSuccess')
export class RegistrationsSuccessState {
  constructor() {
    this.url = '^/signed-up';
    this.templateUrl = 'registrations/registrations-success.tpl.html';
  }
}
