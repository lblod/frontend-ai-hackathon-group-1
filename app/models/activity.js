import Model, { attr, belongsTo } from '@ember-data/model';

export default class Activity extends Model {
  @attr('string') type;

  @belongsTo('annotation', {
    async: false,
    inverse: null,
  })
  annotation;
}
