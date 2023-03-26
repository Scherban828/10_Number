"use strict";

console.log("Hi");
let mln = 1e6;
console.log(mln);
let mln1 = 1e-6;
console.log(mln1);
let six = 0xff; //16теричная запись
console.log(six);
let two = 0b11111111;
console.log(two);
//Перекодировка в др систему счисления
let numNull = 255;
console.log(numNull.toString(16));
console.log(numNull.toString(2));
//Округление в меньшую сторону
let numO = Math.floor(2.4);
let numT = Math.floor(3.5);
console.log(numO);
console.log(numT);
//Округление в большую сторону
let numF = Math.round(3.5);
console.log(numF);
//Метолы округления до десятх/сотых и т.д.
let numFi = Math.round(3.54128 * 10) / 10;
console.log(numFi);
let numS = Math.round(3.54128 * 100) / 100;
console.log(numS);
//Округляет до 3 знака после "," , но выводит строчное значение
console.log(numS.toFixed(3));
//Преобразование строки в чилсо
console.log(+numS.toFixed(3));
let numSe = 5.84759;
console.log(Number(numSe.toFixed(3)));
//Nan и проверка на Nan
console.log(Number(25 + 'Hi'));//Выдает Nan
console.log(isNaN(25 + 'Hi'));//Выдает Trie
//Проверка на infinite
console.log(isFinite(25));//Выдает True
console.log(isFinite(100 / 0)); //Выдает False
//Возврат числа из записи число + буквы
console.log(parseInt("150.02px")); //Возвращает из записи целое число
console.log(parseFloat("150.02px")); //Возвращает из записи число с плавающей запятой 
//функции Math
console.log(Math.random());// рандомное число от 0 до 1
console.log(Math.random() * 1000);
console.log(Math.max(4, 5, 152));//Максимальное и минимальное число
console.log(Math.min(4, -5, 152));
console.log(Math.abs(-58));//Возвращает модуль числа
console.log(Math.pow(4, 5));//Возводит первое число в степень второго 
