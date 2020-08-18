import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-sales-shop-магазин-l');
  this.route('i-i-s-sales-shop-магазин-e',
  { path: 'i-i-s-sales-shop-магазин-e/:id' });
  this.route('i-i-s-sales-shop-магазин-e.new',
  { path: 'i-i-s-sales-shop-магазин-e/new' });
  this.route('i-i-s-sales-shop-продажа-l');
  this.route('i-i-s-sales-shop-продажа-e',
  { path: 'i-i-s-sales-shop-продажа-e/:id' });
  this.route('i-i-s-sales-shop-продажа-e.new',
  { path: 'i-i-s-sales-shop-продажа-e/new' });
  this.route('i-i-s-sales-shop-товар-l');
  this.route('i-i-s-sales-shop-товар-e',
  { path: 'i-i-s-sales-shop-товар-e/:id' });
  this.route('i-i-s-sales-shop-товар-e.new',
  { path: 'i-i-s-sales-shop-товар-e/new' });
});

export default Router;
