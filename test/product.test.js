import Test from 'ava';
import Product from '../src/product';

const NAME = 'Burrito';
const PRICE = 3.99;

Test('product has a name and price', t => {
  const product = new Product(NAME, PRICE);
  t.is(product.name, NAME);
  t.is(product.price, PRICE);
});

Test('product price is readonly', t => {
  const product = new Product(NAME, PRICE);
  t.throws(() => {
    product.price = 4.99;
  });
});

Test('product _price is not accessible', t => {
  const product = new Product(NAME, PRICE);
  t.falsy(product._price);
});
