import Order from './order';

export default class {
  constructor(firstName, lastName, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    
    this.orders = [];
  }
}
