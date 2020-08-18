import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  магазин: DS.belongsTo('i-i-s-sales-shop-магазин', { inverse: null, async: false }),
  строкаПродажи: DS.hasMany('i-i-s-sales-shop-строка-продажи', { inverse: 'продажа', async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-sales-shop-продажа.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  магазин: {
    descriptionKey: 'models.i-i-s-sales-shop-продажа.validations.магазин.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  строкаПродажи: {
    descriptionKey: 'models.i-i-s-sales-shop-продажа.validations.строкаПродажи.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПродажаE', 'i-i-s-sales-shop-продажа', {
    дата: attr('Дата', { index: 0 }),
    магазин: belongsTo('i-i-s-sales-shop-магазин', 'Магазин', {
      название: attr('Название', { index: 2 })
    }, { index: 1 }),
    строкаПродажи: hasMany('i-i-s-sales-shop-строка-продажи', 'Строка продажи', {
      количество: attr('Количество', { index: 0 }),
      товар: belongsTo('i-i-s-sales-shop-товар', 'Товар', {
        название: attr('Название', { index: 2, hidden: true })
      }, { index: 1, displayMemberPath: 'название' })
    })
  });

  modelClass.defineProjection('ПродажаL', 'i-i-s-sales-shop-продажа', {
    дата: attr('Дата', { index: 0 }),
    магазин: belongsTo('i-i-s-sales-shop-магазин', 'Название', {
      название: attr('Название', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
