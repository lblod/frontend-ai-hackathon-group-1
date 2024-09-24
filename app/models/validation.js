import Model, { attr } from '@ember-data/model';

export default class Validation extends Model {
  @attr('string') creator; // should ultimately link to real Agent
  @attr('date') created;
  @attr('date') accepted;
  @attr('date') denied;
}
