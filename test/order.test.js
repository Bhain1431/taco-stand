import Test from 'ava';
import Order from '../src/order';

Test('order has a item', t => {
  
  const order = new Order();
  t.deepEqual(order.items, []);
});




