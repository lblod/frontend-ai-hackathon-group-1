import { module, test } from 'qunit';
import { setupTest } from 'frontend-ai-hackathon-group-1/tests/helpers';

module('Unit | Route | index', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:index');
    assert.ok(route);
  });
});
