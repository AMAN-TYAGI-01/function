const person={
    name:"aman",
    age:45,
    city:"sehore",
};
console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person.city);
document.getElementById("demo").innerHTML=person;

const number=[60,10,20,20];
console.log(number);
console.log(number[3]);
console.log(number[2]);
 console.log(number[1]);

// regular function
function sayhello(){
    var name="john ";
    var dob=88;
    var area="sehore";
    result= name + dob+" "+ area;
    document.getElementById("demo").innerHTML=result;
}

console.log(sayhello);
sayhello();

// expretion function
const display=function(){
    let name="ram";
    let city="bhopal";
    let age=90;
    document.getElementById("demo").innerHTML=name+" " +city+" "+age;
}
