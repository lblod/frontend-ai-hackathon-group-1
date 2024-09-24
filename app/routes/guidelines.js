import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class GuidelinesRoute extends Route {
  @service store;

  async model(params) {
    const { id } = params;
    console.log('id:', id);

    // TODO use param
    const mockUri = 'https://id.erfgoed.net/aanduidingsobjecten/14969';

    let annotations = await this.store.query('annotation', {
      filter: {
        resource: mockUri,
      },
    });

    return annotations;
  }
}
