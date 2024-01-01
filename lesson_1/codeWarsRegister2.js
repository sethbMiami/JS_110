/* eslint-disable max-len */
/* eslint-disable max-statements */
/* eslint-disable max-lines-per-function */
const emptyRegisterCount = (array) => {
  return array.filter((number) => number === 0).length;
}

function queueTime(customers, n) {
  //TODO
  console.log("Start---------------- " + customers + " Registers " + n);

  if (!customers.length) {
    return 0;
  }
  if (n === 1) {
    return customers.reduce((accumalator, currentValue) => accumalator + currentValue);
  }

  if (n >= customers.length) {
    return Math.max(...customers);
  }

  let time = Math.max(...customers.slice(0, n));
  console.log("Time and bigCustomer is set to " + time);
  let bigCustomer = time;
  let checkout = [];
  let emptyRegister = n;
  console.log("empty Register is set to N " + emptyRegister);

  while (customers.length) {

    if (emptyRegister > customers.length) {
      checkout = [...checkout, ...customers];
    } else {
      for (let index = 0; index < emptyRegister; index++) {
        checkout.push(customers[index]);
        console.log("Pushing this customer to checkout " + customers[index]);
      }
    }

    console.log("Checkout now has " + checkout);
    let smallCustomer = Math.min(...checkout);
    console.log("small Customer is " + smallCustomer);
    if (bigCustomer < Math.max(...checkout)) {
      console.log("big Customer was " + bigCustomer + " and the new Math.max is " + Math.max(...checkout));
      bigCustomer = Math.max(...checkout) - bigCustomer;
      console.log("Big customer is now " + bigCustomer);
      time += bigCustomer;
      console.log("Time is now " + time);
    }

    //bigCustomer -= smallCustomer;
    //let smallCustomer = Math.min(...checkout);

    //bigCustomer -= smallCustomer;
    checkout = checkout.map((customer) => customer - smallCustomer);
    console.log("checkout is now holding this after subtracting them from small customer " + checkout);
    bigCustomer = Math.max(...checkout);
    console.log("big customer is now " + bigCustomer);
    customers.splice(0, emptyRegister);
    console.log("splicing the customers array to remove checked out customers, it now holds " + customers);
    emptyRegister = 0;
    emptyRegister = emptyRegisterCount(checkout);
    console.log("Counting the zeros to incrememnt empty register which is now " + emptyRegister);

    checkout = checkout.filter((customer) => customer > 0);
    console.log("Removing the zeros from the checkout before the next iteration " + checkout);
  
//     if (bigCustomer < Math.max(...checkout)) {
//       bigCustomer = Math.max(...checkout) - bigCustomer;
//       time += bigCustomer;
//     }


  }
  console.log("finish ---------- finish " + time);
  return time;

}

let clients = [
  15, 20,  8,  1, 16, 13,  2, 20, 10, 10,  9, 17,
  4, 13,  5,  9,  1,  3,  5,  9,  7, 19,  4,  8,
  3,  8,  1, 19,  8,  2, 18,  8, 18, 14,  6, 17,
  8,  6, 17, 17, 13,  6,  7, 13, 20,  8,  2,  8,
  6,  9, 10,  6,  1, 18, 20,  7,  6, 18, 11,  2,
  2, 17
];
let registers = 11;
// 10, 2, 3, 3
//answer is 10

console.log(queueTime(clients, registers));

//2,2,3,3,4,4 Registers 2  -------> 9

//10,2,3,3 Registers 2 ---------> 10

//2, 3, 10, 2 Registers 2 ---------->12

/** [
  15, 20,  8,  1, 16, 13,  2, 20, 10, 10,  9, 17,
  4, 13,  5,  9,  1,  3,  5,  9,  7, 19,  4,  8,
  3,  8,  1, 19,  8,  2, 18,  8, 18, 14,  6, 17,
  8,  6, 17, 17, 13,  6,  7, 13, 20,  8,  2,  8,
  6,  9, 10,  6,  1, 18, 20,  7,  6, 18, 11,  2,
  2, 17
]
Registers 11

------------Answer is 65
**/