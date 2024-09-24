import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class GuidelinesRoute extends Route {
  @service store;

  async model(params) {
    const { id: designationObjectId } = params;

    // DESIGNATION OBJECT DETAILS

    const response = await fetch(
      `https://inventaris.onroerenderfgoed.be/aanduidingsobjecten/${designationObjectId}`,
      { headers: { accept: 'application/json' } },
    );

    if (!response.ok) throw new Error('Failed to fetch designation object');

    const designationObject = await response.json();
    console.log('designation object uri:', designationObject.uri);

    // DESIGNATION OBJECT ANNOTATIONS

    // TODO use designationObjectId
    const mockUri = 'https://id.erfgoed.net/aanduidingsobjecten/14969';

    const annotations = await this.store.query('annotation', {
      filter: {
        resource: mockUri,
      },
    });

    return {
      designationObject,
      annotations,
    };
  }
}
