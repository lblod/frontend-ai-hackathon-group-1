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

    // DESIGNATION OBJECT ANNOTATIONS

    const annotations = await this.store.query('annotation', {
      filter: {
        resource: designationObject.uri,
      },
    });

    return {
      designationObject,
      annotations,
    };
  }
}
