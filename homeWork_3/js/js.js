// 1. Заданы два массива необходимо их объединить в один массив C добавив массив B в конец(в начало) A.

let arrA=[12,4,3,10,1,20];
let arrB=[-3,-7,-100,-33];

let arrC=[ ];
for (i=0;i<arrA.length;i++) {
    arrC[i]=arrA[i];
}
arrC[6]=arrB;
console.log(arrC);

/* 4. В городе N проезд в трамвае осуществляется по бумажным отрывным билетам. 
Каждую неделю трамвайное депо заказывает в местной типографии рулон билетов 
с номерами от 000001 до 999999. 
«Счастливым» считается билетик у которого сумма первых трёх цифр номера равна 
сумме последних трёх цифр, как, например, в билетах с номерами 003102 или 567576. 
Трамвайное депо решило подарить сувенир обладателю каждого счастливого билета и 
теперь раздумывает, как много сувениров потребуется. 
С помощью программы подсчитайте сколько счастливых билетов в одном рулоне. */

let a="999999";
let count=0;
for(i=+a;+a>0;i--) {
	let arrA=a.split("");
	if(+a<=99999&&+a>9999){
		arrA.unshift("0")
	}
	if(+a<=9999){
		arrA.unshift("0","0")
	}
	if(+a<=999){
		break;
	}
	let arrB=arrA.splice(3,3);
	let c=0;
	for(let i = 0; i < arrA.length; i++){
		let f=+arrA[i]
    	c = c+f;
    }
	let d=0;
	for(let i = 0; i < arrB.length; i++){
		f=+arrB[i]
    	d = d+f;
    }
    let y=c-d;
    if(c===d) {
    	++count;
    }
	a=--a;
	a= String(a)   
}
console.log(count);



let arrD=[null,null,null,null,null,null,null,null,null];
for(i=0;i>=0;i++){
    let num=prompt("Укажите номер ячейки от 1 до 9:")
    if (arrD[num-1]!=null) {
        alert("Поле уже занято");
        continue;
    }
    let t=prompt("Укажите символ: Х или 0")
    console.log(i);
    if (t==="X"){
        arrD[num-1]=1;
    }else if (t==="0"){
        arrD[num-1]=0;   
    }else{
        alert("Не корректный ввод")
    }
    if (arrD[0]===1) {
        document.write('<div class="a1">X</div>')
    }else if (arrD[0]===0) {
        document.write('<div class="a1">0</div>')
    }
    console.log(arrD); 
    if(arrD[0]!=null&&arrD[1]!=null&&arrD[2]!=null&&arrD[3]!=null&&arrD[4]!=null&&arrD[5]!=null&&arrD[6]!=null&&arrD[7]!=null&&arrD[8]!=null) {
        alert("Игра окончена")
    break;
    }
}


//3. Задан массив  - [12,4,3,10,1,20]. Удалить из него наименьшее и наибольшее значение.
console.time()
let arrE=[12,4,3,10,1,20];
let min=1; 
let max=1;
for (i=0;i<arrE.length;i++){
    if(arrE[i]<min) {
        min=arrE[i]
    }else if(arrE[i]>max) {
        max=arrE[i];
    }
}
for(i=0;i<arrE.length;i++) {
    if(min===arrE[i]){
        console.log(i);
        arrE.splice(i,1);
    }
    if (max===arrE[i]) {
        arrE.splice(i,1);
    }
}
console.log(arrE);
console.timeEnd();