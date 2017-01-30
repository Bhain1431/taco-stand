import Test from 'ava';
import Customer from '../src/customer';

const FIRST_NAME = 'Tyler';
const LAST_NAME = 'Garlick';
const EMAIL = 'tgarlick@heliotraining.com';

Test('customer is valid', t => {
  const customer = new Customer(FIRST_NAME, LAST_NAME, EMAIL);
  t.is(customer.firstName, FIRST_NAME);
  t.is(customer.lastName, LAST_NAME);
  t.is(customer.email, EMAIL);
  
  const customer2 = new Customer('Thor', 'Anderson', 'tanderson@heliotraining.com');
  t.notDeepEqual(customer2);
});

Test('customer has orders', t => {
  const customer = new Customer(FIRST_NAME, LAST_NAME, EMAIL);
  t.deepEqual(customer.orders, []);
});




