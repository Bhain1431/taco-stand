import Test from 'ava';
import Store from '../src/store';

Test('store has products', t => {
  const store = new Store();
  t.deepEqual(store.products, []);
});

Test('store has customers', t => {
  const store = new Store();
  t.deepEqual(store.customers, []);
});

Test('store has orders', t => {
  const store = new Store();
  t.deepEqual(store.orders, []);
});
