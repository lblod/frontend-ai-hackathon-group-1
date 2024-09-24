import Model, { attr, hasMany } from '@ember-data/model';

export default class Activity extends Model {
  @attr('string') type;

  @hasMany('annotation', {
    async: false,
    inverse: 'activity',
  })
  annotations;
}
