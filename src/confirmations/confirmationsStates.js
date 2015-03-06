import {State, LoggedInOnlyState} from "stateInjector";

@State('confirmationsSuccess')
export class ConfirmationsSuccessState extends LoggedInOnlyState {
  constructor() {
    this.url = '^/confirmed';
    this.templateUrl = 'confirmations/confirmations-success.tpl.html';
  }
}
