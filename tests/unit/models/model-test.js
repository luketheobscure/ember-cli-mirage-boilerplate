import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { setupMirage } from 'ember-cli-mirage/test-support';

module('Unit | Model | tomster', function(hooks) {
  setupTest(hooks);
  setupMirage(hooks);

  // Replace this with your real tests.
  test('it exists', async function(assert) {
    let store = this.owner.lookup('service:store');
    let model = await store.query('tomster', {});
    assert.ok(model);
  });
});
