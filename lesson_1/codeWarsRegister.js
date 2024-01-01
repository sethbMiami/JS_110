/* eslint-disable max-len */
/* eslint-disable max-lines-per-function */
function queueTime(customers, n) {
  //TODO

  if (!customers.length) {
    return 0;
  }
  if (n === 1) {
    return customers.reduce((accumalator, currentValue) => accumalator + currentValue);
  }

  if (n >= customers.length) {
    return Math.max(customers);
  }

  let time = Math.max(customers.slice(0, n));
  let bigCustomer = time;
  let checkout = [];
  let emptyRegister = n;

  while (customers.length) {

    for (let index = 0; index < emptyRegister; index++) {
      checkout.push(customers[index]);
    }
    customers.splice(0, emptyRegister);
    emptyRegister = 0;

    let smallCustomer = Math.min(checkout);

    checkout = checkout.map((customer) => customer - smallCustomer);
    bigCustomer -= smallCustomer;

    if (bigCustomer <= 0) {
      bigCustomer = Math.abs(bigCustomer - smallCustomer);
      time += bigCustomer;
    }

    for (let customer of checkout.sort((a, b) => a - b)) {
      if (customer === 0) {
        customer.shift();
        emptyRegister++;
      }
    }
  }
  return time;
}

let clients = [2,2,3,3,4,4];
let registers = 2;

//answer is 9

console.log(queueTime(clients, registers));