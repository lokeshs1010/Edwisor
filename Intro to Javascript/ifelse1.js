var itemPurchased = window.prompt('Please tell us the no. of items purchased this month');

if (itemPurchased > 3) {
    alert('You got a promo code');
} else if (itemPurchased == 3) {
    alert('Purchase one more item for promo code');
} else {
    alert('You have not got promo code');
}