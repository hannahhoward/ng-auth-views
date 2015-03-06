import {State, Resolve, LoggedInOnlyState} from 'stateInjector';

@State( 'sessions')
export class SessionsState {
  constructor() {
    this.url = '^/sign-in';
    this.controller = 'SessionsCtrl';
    this.templateUrl = 'sessions/sessions.tpl.html';
  }
}

@State( 'sessionsSuccess')
export class SessionsSuccessState extends LoggedInOnlyState {
  constructor() {
    this.url = '^/signed-in';
    this.templateUrl = 'sessions/sessions-success.tpl.html';
  }
}
