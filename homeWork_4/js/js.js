// 1. Дана строка, изображающая целое число. Вывести сумму цифр этого числа.
let str= "567"
let f=0
for (i=0;i<str.length;i++) {
    let e=+str.substr(i,1);
    f+=e
}console.log(f);

// 2. Дана строка и символ. Удвоить каждое вхождение заданного символа в строку.

let str1= "Это просто строка для задачи";
let str2= "о";
console.log(`Это${str2}про${str2}сто${str2} стро${str2}ка для задачи`)


/*3. Проверить что введенный пароль удовлетворяет следующим условиям сложности:
- длинна от 9 символов;
- содержит обязательно английские буквы верхнего и нижнего регистра;
- содержит более двух цифр;
- содержит обязательно один из неалфавитных символов (например, !, $, #, %).*/

for(i=0;i>=0;i++) {
    let pass= prompt("Укажите пароль");
    let regExp=/[a-z]/g;
    let result=pass.match(regExp);
    let regExp1=/\d/g;
    let result1=pass.match(regExp1);
    let regExp2=/[\^$.|?*+.]/g;
    let result2=pass.match(regExp2);
    let regExp3=/[A-Z]/g;
    let result3=pass.match(regExp3);
    if (pass.length>=9) {
        if(result.length!=null&&result3!=null){}else{
            alert("Пароль должен содержать как строчные так и заглавные английские буквы");
        }
        if(result1!=null&&result1.length>2){}else{
            alert("Пароль должен содержать более 2х цифр")
        }
        if(result2!=null){}else{
            alert("В пароле должен присутствовать хотя бы один символ из: \^$.|?*+.")
        }
        let passValid=(regExp.test(pass)&&regExp1.test(pass)&&regExp2.test(pass)&&regExp3.test(pass))
        if(passValid){
            alert("Пароль успешно установлен")
            break;
        }
    }else{alert("Длина пароля должны быть более 9 символов");}
}

/*4** Нечёткий поиск:
Дана строка-словарь, например: "Понедельник Вторник Среда Четверг Пятница 
Суббота Воскресенье". Пользователь вводит слово из словаря с одной 
перепутанной буквой, например: "Срида". Написать программу, которая 
позволяет с использованием регулярного выражения найти в строке-словаре 
введённое пользователем слово (не смотря на одну ошибку в слове) и 
вывести исправленное слово пользователю, например: "Среда".


let words="Понедельник Вторник Среда Четверг Пятница Суббота Воскресенье"
let userWords=prompt("Укажите день недели")
let regExp=/[а-я][А-Я]+/g*/