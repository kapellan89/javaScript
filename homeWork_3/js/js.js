let arrA=[12,4,3,10,1,20];
let arrB=[-3,-7,-100,-33];

let arrC=[ ];
for (i=0;i<arrA.length;i++) {
    arrC[i]=arrA[i];
}

arrC[6]=arrB;
console.log(arrC);
console.log(arrA.length);

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

document.write('<div class="grid"><div class="shard"></div><div class="shard"></div><div class="shard"></div><div class="shard"></div><div class="shard"></div><div class="shard"></div><div class="shard"></div><div class="shard"></div><div class="shard"></div></div>');