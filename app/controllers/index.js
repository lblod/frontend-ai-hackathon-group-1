import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class IndexController extends Controller {
  @tracked
  isPopupOpen = false;

  address = '';

  @service router;

  @action
  openPopup() {
    this.isPopupOpen = true;
  }

  @action
  closePopup() {
    this.isPopupOpen = false;
  }

  @action
  submitAddress() {
    this.closePopup();
    this.router.transitionTo('guidelines');
  }
}
