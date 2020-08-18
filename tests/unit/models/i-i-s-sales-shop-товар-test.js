import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-sales-shop-товар', 'Unit | Model | i-i-s-sales-shop-товар', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-sales-shop-магазин',
    'model:i-i-s-sales-shop-продажа',
    'model:i-i-s-sales-shop-строка-продажи',
    'model:i-i-s-sales-shop-товар',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
