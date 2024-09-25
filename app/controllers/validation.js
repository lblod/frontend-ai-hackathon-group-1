import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { task } from 'ember-concurrency';

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

  // Known caveat: you have to refresh the frontend between two changes of thumb for the same validation to get it cleared properly
  @task
  *validateAnnotation(validation) {
    const clearedValidation = this.clearValidationState(validation);
    clearedValidation.accepted = new Date();

    yield clearedValidation.save();
    console.log("Approved");
  }

  // Known caveat: you have to refresh the frontend between two changes of thumb for the same validation to get it cleared properly
  @task
  *denyAnnotation(validation) {
    const clearedValidation = this.clearValidationState(validation);
    clearedValidation.denied = new Date();

    yield clearedValidation.save();
    console.log("Denied");
  }

  clearValidationState(validation) {
    if (validation.accepted) {
      validation.accepted = undefined;
    }
    if (validation.denied) {
      validation.denied = undefined;
    }

    return validation;
  }
}
