// На садовом участке площадью 10 соток, разбили грядки 15 на 25 метров. Сколько м2 осталось незанято?

15 на 25 метров. Сколько м2 осталось незанято?
let area= 1000;
let bed = 15*25;

console.log (bed);

let freeSpace= area%bed;

console.log (freeSpace+"m2");

// Найдите площадь овального кольца, полученного из овала площадью 15 дм2 вырезанием овала площадью 600 см2.
let ringOval= 1500;
let oval= 600;

let ring= 1500-600;

console.log (ring+"cm2");

// Из трех данных чисел выбрать наименьшее.
a=10;
b=15;
c=17;

if(a<b&&a<c){
    console.log(a);
}else if(b<a&&b<c){
    console.log(b);
}else if(c<a&&c<b) {
    console.log(c);
}
let m= 13.44-10, n= 24.28-10;

//Вывести в консоль ближайшее к 10 из двух чисел, записанных в переменные m и n.
let res= (m-10>n-10)?m:n;
let rel=parseFloat(res);
console.log(rel);