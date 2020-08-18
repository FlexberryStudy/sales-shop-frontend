import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-sales-shop-магазин', 'Unit | Serializer | i-i-s-sales-shop-магазин', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-sales-shop-магазин',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
