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
 var endTotal = 0;

 var newElement = document.createElement('div');
 //newElement.style.backgroundColor='tan';
 newElement.style.fontSize ='30px';
 newElement.style.height ='1000px';
 newElement.style.width ='45%';
 newElement.style.border ='5px Black Solid';
 newElement.style.textAlign = 'right';
 newElement.style.float = 'left';
 newElement.style.padding = '10px';
 document.body.appendChild(newElement);

var newElement1 = document.createElement('div');
 newElement1.style.fontSize ='30px';
 newElement1.style.color = 'black';
 newElement1.style.height ='1000px';
 newElement1.style.width ='45%';
 newElement1.style.border ='5px Black Solid';
 newElement1.style.float = 'right';
 newElement1.style.padding = '10px';
 document.body.appendChild(newElement1);


 groceries.forEach(function(i){
  var itemName1 = document.createElement('p');
  itemName1.innerText = i.price;
  newElement1.appendChild(itemName1);

 })
 groceries.forEach(function(i) {
   var itemName = document.createElement('p');
   itemName.innerText = i.name;
   newElement.appendChild(itemName);
   total += i.price;

 });

  var newElement2 = document.createElement('div');
   newElement2.style.height = '100px';
   newElement2.style.width = '657px';
   newElement2.style.border = '5px Black Solid';
   newElement2.style.textAlign = 'center';
   newElement2.style.clear = 'both';
   newElement2.style.position = 'center';
   newElement2.style.padding = '10px';
   newElement2.className = 'foot';
   newElement2.innerText = total;
   document.body.appendChild(newElement2);


 console.log(total);

 console.log((total*.06) + total + '' + ' with tax.');
