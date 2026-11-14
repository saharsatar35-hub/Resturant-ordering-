
const customerName = "Sahar";
const customerAge = 19;
const availableBalance = 10;

console.log ("Resturant Menue");
console.log ("1. Burger : 10$ ");
console.log ("2. Pizza : 15$ ");
console.log ("3. Sandwich : 8$ ");
console.log ("4. Pasta : 12$ ");
console.log ("5. Exit : 0$ ");

let foodPrice = 0;
let choice = 2;

switch(choice){
    case 1:
        foodPrice = 10;
        console.log("You selected Burger. Price:10$");
        break;

    case 2:
        foodPrice =15;
        console.log("You selected Pizza. Price:15$");
        break;

    case 3:
        foodPrice = 8;
        console.log("You selected Sandwich. Price:8");
        break;

    case 4:
        foodPrice = 12;
        console.log("You selected Pasta. Price:12$");
        break;

    case 5:
        console.log("Thank you for visiting!");
        break;
    default:
        console.log("Invalid selection!");
}




let quantity = 2;

const totalPrice = foodPrice * quantity;

const remainingBalance = availableBalance - totalPrice;

const additionalTotal = foodPrice * (quantity+3);


console.log("Food Price:", foodPrice);
console.log("Total Price:", totalPrice);
console.log("Remaining Balance:", remainingBalance);
console.log("Total with 3 additional items:", additionalTotal);


console.log(customerAge >= 18);
console.log(availableBalance > totalPrice);
console.log(quantity > 1);
console.log(totalPrice === 0);
console.log(remainingBalance >= 0);


if (customerAge <18) {
    console.log("You are underage.");
}  else if (availableBalance < totalPrice) {
    console.log("Insufficient balance.");
} else{
    console.log("Your order has been placed successfully!");
}

let paymentMethod = 2;

switch (paymentMethod) {
    case 1:
        console.log("You selected Cash.");
        break;

    case 2:
        console.log("You selected Credit Card.");
        break;

    case 3:
        console.log("You selected Bank Transfer.");
        break;

    default:
        console.log("Invalid payment method!");
}

