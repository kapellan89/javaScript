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
	let c=0;
	for(let i = 0; i < 3; i++){
		f=+arrA[i]
    	c = c+f;
    }
	let d=0;
	for(let i = 3; i < arrA.length; i++){
		f=+arrA[i]
    	d = d+f;
    }
    let y=c-d;
    if(y===0) {
    	++count;
    }
	a=--a;
	a= String(a)   
}
console.log(count);

/*

let arrD=[null,null,null,null,null,null,null,null,null,];
for(i=0;i<arrD.length;i++){
let num=prompt("Укажите номер ячейки от 1 до 9:")
let t=prompt("Укажите символ: Х или 0")
console.log(i);
    if (t==="X"){
        arrD[num-1]=1;
    }else if (t==="0"){
        arrD[num-1]=0;   
    }
    console.log(arrD); 
}

document.write('<div class="grid"><div class="shard"></div><div class="shard"></div><div class="shard"></div><div class="shard"></div><div class="shard"></div><div class="shard"></div><div class="shard"></div><div class="shard"></div><div class="shard"></div></div>');*/