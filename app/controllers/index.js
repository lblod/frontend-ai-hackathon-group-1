import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { restartableTask, timeout } from 'ember-concurrency';

export default class IndexController extends Controller {
  @tracked
  isPopupOpen = false;

  @tracked
  searchResults = [];

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

  @restartableTask
  *searchTask(query) {
    yield timeout(300); // 300ms debounce

    if (query) {
      try {
        const response = yield fetch(
          `https://inventaris.onroerenderfgoed.be/erfgoedobjecten?tekst=${encodeURIComponent(query)}`,
          { headers: { accept: 'application/json' } },
        );
        const results = yield response.json();
        this.searchResults = results;
      } catch (error) {
        console.error('Search failed', error);
      }
    } else {
      this.searchResults = [];
    }
  }

  @action
  selectResult(result) {
    console.log('Selected ID:', result.id);
  }
}
