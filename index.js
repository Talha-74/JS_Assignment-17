// Task - 1
let count = " ";
for (var i = 200; i >= 0; i-=3)
{
    count += i + " ";
}

document.write(count + "<br>");
//  document.getElementById('task1').innerHTML = "decrementing by three is: ", count;

// Task - 2
var i = 0;
while (i < 10) {
    document.write("Talha Khan"+"<br>");
    i++
}

// Task - 3
var j = 0
var sum = 0;
while(j < 10) {
    if(j%2 == 0){
  sum += j;
    }
    j++;
}
document.write("sum of even numbers: " + sum + "<br>");

//Task - 4
var x = 1;
document.write("Task 4 </br>");
do {
document.write(x + " ");
x++;
}while(x <= 5)

// Task - 6
function calcArea(width, height) {
    let result = width * height;
    return result;
  };
  let area=calcArea(10,5)     //Invoking the function
  console.log(area)
  //50