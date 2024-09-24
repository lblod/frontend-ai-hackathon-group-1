import Model, { attr, belongsTo } from '@ember-data/model';

export default class Annotation extends Model {
  @attr('string') body;
  @attr('string') resource;

  @belongsTo('validation', {
    async: false,
    inverse: null,
  })
  validation;
}
