import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ValidationController extends Controller {
  @tracked filter = 'all';

  get filteredValidations() {
    if (this.filter === 'accepted') {
      return this.model.filter((validation) => validation.accepted);
    } else if (this.filter === 'denied') {
      return this.model.filter((validation) => validation.denied);
    } else if (this.filter === 'open') {
      return this.model.filter(
        (validation) => !validation.accepted && !validation.denied,
      );
    } else {
      return this.model;
    }
  }

  @action
  updateFilter(filter) {
    this.filter = filter;
  }
}
