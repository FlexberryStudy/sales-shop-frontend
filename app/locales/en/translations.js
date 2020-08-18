import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

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

  'application-name': 'Application caption',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please have a cold beer...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Application caption',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Application caption',
          title: 'Application title'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'sales-shop': {
          caption: 'sales-shop',
          title: 'sales-shop',
          'i-i-s-sales-shop-товар-l': {
            caption: 'i-i-s-sales-shop-товар-l',
            title: 'i-i-s-sales-shop-товар-l'
          },
          'i-i-s-sales-shop-продажа-l': {
            caption: 'i-i-s-sales-shop-продажа-l',
            title: 'i-i-s-sales-shop-продажа-l'
          },
          'i-i-s-sales-shop-магазин-l': {
            caption: 'i-i-s-sales-shop-магазин-l',
            title: 'i-i-s-sales-shop-магазин-l'
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
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
