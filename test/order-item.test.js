import Test from 'ava';
import OrderItem from '../src/order-item';

const PRODUCT = { price: 3.99 };
const QUANTITY = 1;

Test('order item has a product', t => {
  const orderItem = new OrderItem(PRODUCT, QUANTITY);
  t.deepEqual(orderItem.product, PRODUCT);
});

Test('order item has a quantity', t => {
  const orderItem = new OrderItem(PRODUCT, QUANTITY);
  t.is(orderItem.quantity, QUANTITY);
});

Test('order item is 3.99', t => {
  const orderItem = new OrderItem(PRODUCT, QUANTITY);
  t.is(orderItem.subTotal, 3.99);
});




