import {State, Resolve, LoggedInOnlyState} from 'stateInjector';

@State( 'passwordsRequest')
export class PasswordsRequestState {
  constructor() {
    this.url = '^/reset-password';
    this.controller = 'PasswordsRequestCtrl';
    this.templateUrl = 'passwords/passwords-request.tpl.html';
  }
}

@State( 'passwordsRequestSuccess')
export class PasswordsRequestSuccessState {
  constructor() {
    this.url = '^/reset-password-sent';
    this.templateUrl = 'passwords/passwords-request-success.tpl.html';
  }
}

@State( 'passwordsUpdate')
export class PasswordsUpdateState extends LoggedInOnlyState {
  constructor() {
    this.url = '^/update-password';
    this.controller = 'PasswordsUpdateCtrl';
    this.templateUrl = 'passwords/passwords-update.tpl.html';
  }
}

@State( 'passwordsUpdateSuccess')
export class PasswordsUpdateSuccessState extends LoggedInOnlyState {
  constructor() {
    this.url = '^/updated-password';
    this.templateUrl = 'passwords/passwords-update-success.tpl.html';
  }
}
