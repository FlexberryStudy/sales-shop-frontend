import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISSalesShopМагазинLForm from './forms/i-i-s-sales-shop-магазин-l';
import IISSalesShopПродажаLForm from './forms/i-i-s-sales-shop-продажа-l';
import IISSalesShopТоварLForm from './forms/i-i-s-sales-shop-товар-l';
import IISSalesShopМагазинEForm from './forms/i-i-s-sales-shop-магазин-e';
import IISSalesShopПродажаEForm from './forms/i-i-s-sales-shop-продажа-e';
import IISSalesShopТоварEForm from './forms/i-i-s-sales-shop-товар-e';
import IISSalesShopМагазинModel from './models/i-i-s-sales-shop-магазин';
import IISSalesShopПродажаModel from './models/i-i-s-sales-shop-продажа';
import IISSalesShopСтрокаПродажиModel from './models/i-i-s-sales-shop-строка-продажи';
import IISSalesShopТоварModel from './models/i-i-s-sales-shop-товар';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-sales-shop-магазин': IISSalesShopМагазинModel,
    'i-i-s-sales-shop-продажа': IISSalesShopПродажаModel,
    'i-i-s-sales-shop-строка-продажи': IISSalesShopСтрокаПродажиModel,
    'i-i-s-sales-shop-товар': IISSalesShopТоварModel
  },

  'application-name': 'Sales shop',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Sales shop',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Sales shop',
          title: 'Sales shop'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        'sales-shop': {
          caption: 'SalesShop',
          title: 'SalesShop',
          'i-i-s-sales-shop-товар-l': {
            caption: 'Товар',
            title: ''
          },
          'i-i-s-sales-shop-продажа-l': {
            caption: 'Продажа',
            title: ''
          },
          'i-i-s-sales-shop-магазин-l': {
            caption: 'Магазин',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-sales-shop-магазин-l': IISSalesShopМагазинLForm,
    'i-i-s-sales-shop-продажа-l': IISSalesShopПродажаLForm,
    'i-i-s-sales-shop-товар-l': IISSalesShopТоварLForm,
    'i-i-s-sales-shop-магазин-e': IISSalesShopМагазинEForm,
    'i-i-s-sales-shop-продажа-e': IISSalesShopПродажаEForm,
    'i-i-s-sales-shop-товар-e': IISSalesShopТоварEForm
  },

});

export default translations;
