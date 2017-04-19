var groceries = [
{
 name: 'bananas',
 price: 1.85
},
{
 name: 'yogurt',
 price: 3.50
},
{
 name: 'apples',
 price: 3.00
},
{
 name: 'bread',
 price: 4.50
 },
 {
 name: 'cat food',
 price: 6.00
 },
 {
   name: 'cookies',
   price: 3.25
 },
 {
   name: 'milk',
   price: 3.50
 },
 {
   name: 'crackers',
   price: 2.75
 },
 {
   name: 'juice',
   price: 3.85
 },
 {
   name: 'turkey',
   price: 4.75
 }];

 var total = 0;

 groceries.forEach(function(i) {
   console.log(i.name +' ' + i.price);
   total += i.price;
   console.log('Your total = ' + total);
 });

 console.log(total);

 console.log((total*.06) + total + '' + ' with tax.');
