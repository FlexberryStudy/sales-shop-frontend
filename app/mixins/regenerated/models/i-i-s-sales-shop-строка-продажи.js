import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  количество: DS.attr('number'),
  товар: DS.belongsTo('i-i-s-sales-shop-товар', { inverse: null, async: false }),
  продажа: DS.belongsTo('i-i-s-sales-shop-продажа', { inverse: 'строкаПродажи', async: false })
});

export let ValidationRules = {
  количество: {
    descriptionKey: 'models.i-i-s-sales-shop-строка-продажи.validations.количество.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  товар: {
    descriptionKey: 'models.i-i-s-sales-shop-строка-продажи.validations.товар.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  продажа: {
    descriptionKey: 'models.i-i-s-sales-shop-строка-продажи.validations.продажа.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СтрокаПродажиE', 'i-i-s-sales-shop-строка-продажи', {
    количество: attr('Количество', { index: 0 }),
    товар: belongsTo('i-i-s-sales-shop-товар', 'Товар', {
      название: attr('Название', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'название' })
  });
};
