import Model, { attr, belongsTo } from '@ember-data/model';

export default class Annotation extends Model {
  @attr('string') body;
  @attr('uri-set') resource;

  @belongsTo('validation', {
    async: false,
    inverse: 'annotation',
  })
  validation;

  @belongsTo('activity', {
    async: false,
    inverse: 'annotations',
  })
  activity;
}
