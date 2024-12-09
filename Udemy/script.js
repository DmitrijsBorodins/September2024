
// /* Задание на урок:

// 1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
// 'Сколько фильмов вы уже посмотрели?'

// 2) Создать объект personalMovieDB и в него поместить такие свойства:
//     - count - сюда передается ответ на первый вопрос
//     - movies - в это свойство поместить пустой объект
//     - actors - тоже поместить пустой объект
//     - genres - сюда поместить пустой массив
//     - privat - в это свойство поместить boolean(логическое) значение false

// 3) Задайте пользователю по два раза вопросы:
//     - 'Один из последних просмотренных фильмов?'
//     - 'На сколько оцените его?'
// Ответы стоит поместить в отдельные переменные
// Записать ответы в объект movies в формате: 
//     movies: {
//         'logan': '8.1'
//     }

// Проверить, чтобы все работало без ошибок в консоли */



let numberOfFilms;


let start = () => {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', '');
    }
}
// start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


const a = prompt('Один из последних просмотренных фильмов?', ''),
    b = prompt('На сколько оцените его?', ''),
    c = prompt('Один из последних просмотренных фильмов?', ''),
    d = prompt('На сколько оцените его?', '');


personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;




// let rememberMyFilms = () => {
//     for (let i = 0; i < 2; i++) {
//         const a = prompt('Один из последних просмотренных фильмов?', ''),
//             b = prompt('На сколько оцените его?', '');

//         if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//             personalMovieDB.movies[a] = b;
//             console.log('DONE');
//         }
//         else {
//             console.log('ERROR');
//             i--; //vozrashaemsja na 1 eteraciju nazad,zadajom zanovo voprosi;
//         }
//     }
// }

// rememberMyFilms();





// let detectPersonalLevle = () => {
//     if (personalMovieDB.count < 10) {
//         console.log("Prosmotreno dovoljno malo filjmov");
//     }
//     else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//         console.log("Vi klasnioj zritelj");
//     }
//     else if (personalMovieDB.count >= 30) {
//         console.log("Vi kinoman");

//     }
//     else {
//         console.log("Proizoshla oshibka");
//     }
// }

// // detectPersonalLevle();


let showMyDB = (hidden) => {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);


let writeYourGenres = () => {
    for (let i = 1; i <= 3; i++) {
        const genre = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i - 1] = genre;
    }
}
writeYourGenres();


// // personalMovieDB.movies — это объект, в который мы записываем данные.
// // [a] — это ключ (название фильма), взятое из переменной a. Так как название фильма пользователь вводит сам, оно может быть разным каждый раз. С помощью квадратных скобок [a] мы можем динамически задать название свойства в объекте, используя значение переменной a.
// // = b — значение, которое присваивается ключу [a]. В данном случае это оценка фильма, введенная пользователем, и хранящаяся в переменной b.
// // То есть, если пользователь ввел "Inception" для переменной a и "9" для переменной b, то эта строка создаст в personalMovieDB.movies свойство с именем Inception и значением 9.





// for (let i = 1; i < 8; i++) {
//     console.log(i);
// }

// console.log(NaN || 2 || undefined);

// console.log(NaN && 2 && undefined);

// console.log(1 && 2 && 3);

// console.log(!1 && 2 || !3); // &&-идеёт первым,потом ||)//

// console.log(25 || null && !3);

// console.log(NaN || null || !3 || undefined || 5);

// console.log(NaN || null && !3 && undefined || 5);

// console.log(5 === 5 && 3 > 1 || 5);


// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;


// if (hamburger === 3 && cola || fries === 3 && nuggets) {
//     console.log('Done!')
// }



// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;


// if (hamburger && cola || fries === 3 && nuggets) {
//     console.log('Done!')
// }


// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;


// if (hamburger || cola || fries === 3 || nuggets) {
//     console.log('Done!')
// }


////////////////////////ВЛОЖИНОСТЬ ЦИКЛОВ////////////////////
// let result = '';
// const length = 7;

// for (let i = 1; i < length; i++) {
//     for (let j = 0; j < i; j++) {
//         result += "*";
//     }
//     result += '\n'; //perenos stroki//
// }
// console.log(result);


// first: for (let i = 0; i < 3; i++) {
//     console.log(`First level : ${i}`);

//     for (let j = 0; j < 3; j++) {
//         console.log(`Second level : ${j}`);

//     }
//     for (let k = 0; k < 3; k++) {
//         if (k === 2) continue first; //first - eto metka//
//         console.log(`Second level : ${k}`);
//     }
// }


//HOME WORK

// При помощи цикла выведите числа от 5 до 10 в консоль. 5 и 10 включительно. Цикл можно использовать любой

// При помощи цикла for вывести числа от 20 до 10 в консоль. В обратном порядке (20, 19, 18...). Когда цикл дойдет до числа 13 - остановить весь цикл

// При помощи цикла for выведите чётные числа от 2 до 10 включительно

// Перепишите цикл  for на вариант с while. Результат должен остаться точно таким же. Не создайте бесконечный цикл! Иначе браузер может зависнуть.

//  Цикл, который нужно переписать:

//  for (let i = 2; i <= 16; i++) {
//      if (i % 2 === 0) {
//          continue;
//      } else {
//          console.log(i);
//      }
//  }
// Заполните массив цифрами от 5 до 10 включительно. Помните, что элементы массива можно сформировать так же, как и обращаться к ним: arr[0]

// Ответ с кодом этих задач можно найти тут: ссылка

// Если у вас получилось немного по другому, но решение засчитывается - то все в порядке. Помните, что вариантов решения всегда несколько. Например, <11 и <=10 в условиях цикла дадут одинаковый результат.

// Но постарайтесь решить самостоятельно 🙂


// При помощи цикла выведите числа от 5 до 10 в консоль. 5 и 10 включительно. Цикл можно использовать любой
// for (let i = 5; i < 11; i++) {
//     console.log(i);
// }

// При помощи цикла for вывести числа от 20 до 10 в консоль. В обратном порядке (20, 19, 18...). Когда цикл дойдет до числа 13 - остановить весь цикл

// for (let i = 20; i > 9; i--) {
//     if (i === 13) {
//         break;
//     }
//     console.log(i);
// }



// При помощи цикла for выведите чётные числа от 2 до 10 включительно
// for (let i = 2; i <= 10; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }


// Место для четвертой задачи

// Цикл, который нужно переписать:

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

// // let i = 2;
// // while (i <= 16) {
// //     if (i % 2 === 0) { //proverjaet chetnoe ili ne chetnoe...
//             i++;
// //         continue;
// //     }
// //     else {
// //         console.log(i);
// //     }
// // }


// Место для пятой задачи

// function fifthTask() {
//     const arrayOfNumbers = [];

//     for (let i = 5; i < 11; i++) {
//         arrayOfNumbers[i - 5] = i;
//     }

//     console.log(arrayOfNumbers);
//     return arrayOfNumbers;
// }

// fifthTask()

// Строка arrayOfNumbers[i - 5] = i делает следующее:

// Она рассчитывает индекс массива (i - 5) и добавляет в этот индекс текущее значение i.
// Это позволяет начать заполнение массива с индекса 0, даже если цикл начинается с i = 5.

// //На каждой итерации цикла вы добавляете текущее значение i в массив arrayOfNumbers:

// Индекс для массива вычисляется как i - 5. Это делается для того, чтобы заполнять массив начиная с нулевого индекса.
// Значение, которое добавляется в массив, равно текущему значению i.
// Пример итераций:

// Когда i = 5, i - 5 = 0, так что arrayOfNumbers[0] = 5.
// Когда i = 6, i - 5 = 1, так что arrayOfNumbers[1] = 6.
// Когда i = 10, i - 5 = 5, так что arrayOfNumbers[5] = 10.
// После завершения цикла массив arrayOfNumbers будет содержать: [5, 6, 7, 8, 9, 10].



// function firstTask() {
//     const arr = [3, 5, 8, 16, 20, 23, 50];
//     const result = [];

//     for (let i = 0; i < arr.length; i++) {
//         result[i] = arr[i];
//     }

//     console.log(result);
//     return result;
// }

// firstTask();

// function secondTask() {
//     const data = [5, 10, 'Shopping', 20, 'Homework'];

//     for (let i = 0; i < data.length; i++) {
//         if (typeof(data[i]) === 'number') {
//             data[i] = data[i] * 2;
//         } else if (typeof(data[i]) === 'string') {
//             data[i] = `${data[i]} - done`;
//         }
//     }

//     console.log(data);
//     return data;
// }

// secondTask();

// function thirdTask() {
//     const data = [5, 10, 'Shopping', 20, 'Homework'];
//     const result = [];

//     for (let i = 1; i <= data.length; i++) {
//         result[i - 1] = data[data.length - i]
//     }

//     console.log(result);
//     return result;
// }

// thirdTask();


// Разберем каждую часть:

// let i = 1;: Цикл начинается с переменной i = 1.
// i <= data.length;: Цикл выполняется, пока i меньше или равно длине массива data. Длина массива data равна 5, поэтому цикл пройдет 5 раз.
// i++: После каждой итерации i увеличивается на 1.
// На каждой итерации происходит следующее:

// data.length - i:
// Это индекс элемента массива data, который мы берем.
// Индекс вычисляется так, чтобы элементы выбирались с конца массива.
// result[i - 1]:
// Это место в массиве result, куда записывается элемент из data.
// Пример работы цикла
// Для массива data = [5, 10, 'Shopping', 20, 'Homework']:

// На первой итерации (i = 1):

// data.length - i = 5 - 1 = 4 → Берем элемент с индексом 4 из массива data: 'Homework'.
// result[i - 1] = result[0] → Записываем 'Homework' в result[0].
// Массив result теперь: ['Homework'].
// На второй итерации (i = 2):

// data.length - i = 5 - 2 = 3 → Берем элемент с индексом 3 из массива data: 20.
// result[i - 1] = result[1] → Записываем 20 в result[1].
// Массив result теперь: ['Homework', 20].
// На третьей итерации (i = 3):

// data.length - i = 5 - 3 = 2 → Берем элемент с индексом 2 из массива data: 'Shopping'.
// result[i - 1] = result[2] → Записываем 'Shopping' в result[2].
// Массив result теперь: ['Homework', 20, 'Shopping'].
// На четвертой итерации (i = 4):

// data.length - i = 5 - 4 = 1 → Берем элемент с индексом 1 из массива data: 10.
// result[i - 1] = result[3] → Записываем 10 в result[3].
// Массив result теперь: ['Homework', 20, 'Shopping', 10].
// На пятой итерации (i = 5):

// data.length - i = 5 - 5 = 0 → Берем элемент с индексом 0 из массива data: 5.
// result[i - 1] = result[4] → Записываем 5 в result[4].
// Массив result теперь: ['Homework', 20, 'Shopping', 10, 5].

// Резюме
// Функция thirdTask:

// Берет массив data и создает из него новый массив result, где элементы идут в обратном порядке.
// Для этого используется цикл for и индексация массива с конца (data.length - i).
// Итоговый массив result:

// css
// Копировать код
// ['Homework', 20, 'Shopping', 10, 5]
// Это полезный пример, если нужно перевернуть массив или изменить порядок его элементов.


//24 Funkcija,strelochkaja funkcija//

// let showFirstMessage = (text) => {
//     console.log(text);
//     let num = 20;// Peremennaja sozdanata vnutri funkcii ostajotsja toljko tam,nazivaetsja lokaljnoj.
// }
// showFirstMessage("PRRIIVET");//Kogda funkcija zapoustitsja,ona vozjmot stroku,chto mi ej peredali, podstavit ee v argumet v mesto (text) i v console.log vivedit "PRRIIVET"


// let calc = (a, b) => {
//     return (a + b);//----Posle return kod zakanchivaetsja i dalsjhe ne viponjaetsja.//
// }
// console.log(calc(4, 3));


// let ret = () => {
//     let num = 50;
//     return num;
// }
// const anotherNum = ret();
// console.log(anotherNum);


//25 Argumenti funkcii
// const usdCurr = 28;
// const eurCurr = 132;

// let convert = (amount, curr) => {
//     console.log(curr * amount);
// }
// convert(500, usdCurr);
// convert(500, eurCurr);

//26 funkcija . return


// const usdCurr = 28;
// const discount = 0.9;

// let convert = (amount, curr) => {
//     return curr * amount;
// }
// let promotion = (result) => {
//     console.log(result * discount);
// }
// const res = convert(500, usdCurr);
// promotion(res);


// let test = () => {
//     for (let i = 0; i < 5; i++) {
//         console.log(i);
//         if (i === 3) return
//     }
//     console.log('DONE');
// }
// test();




////////////////////////////////////////////DOMASHKA////////////////////////////

// 1) Создайте функцию, которая будет на вход принимать 1 аргумент с именем человека и возвращать строку.

// Пример: вызов функции sayHello('Антон') возвращает строку "Привет, Антон!". В решении вызывать функцию не нужно, программа сделает это за вас.

// P.S. возвращать - это использовать ключевое слово return.

// P.S.S. Это классическая функция-модификатор, которых мы дальше по курсу будем создавать еще много в разных видах.

// 2) Создайте функцию, которая принимает в себя 1 аргумент в виде целого числа и возвращает массив из трех чисел: одно на 1 меньше, сам аргумент, и число на 1 больше.

// Пример: вызов функции returnNeighboringNumbers(5) возвращает массив в виде [4, 5, 6].

// 3) Создайте функцию, которая будет принимать в себя 2 аргумента, оба числа. Первое число - это база, второе число - это сколько раз нужно будет повторить это число в прогрессии. (Смотри пример ниже). Функция должна возвращать строку (или число в особых случаях, о которых ниже), где эти числа идут по порядку, разделенные тремя дефисами "---". После последнего числа их не должно быть.

// Если второй аргумент не является числом, равен или меньше нуля - то возвращать просто первый аргумент. (Проверяем через оператор typeof)

// Примеры:

// Вызов функции getMathResult(5, 3) даст ответ 5---10---15

// Вызов функции getMathResult(3, 10) даст ответ 3---6---9---12---15---18---21---24---27---30

// Вызов функции getMathResult(10, 5) даст ответ 10---20---30---40---50

// Вызов функции getMathResult(10, '5') даст ответ 10

// Вызов функции getMathResult(10, 0) даст ответ 10

// Вызов функции getMathResult(20, -5) даст ответ 20

// Место для первой задачи
// function sayHello(dmyto) {
//     return 'Privet,Dmytro'
// }
// sayHello(dmytro);

// // Место для второй задачи
// function returnNeighboringNumbers() {

// }

// // Место для третьей задачи
// function getMathResult() {

// }


/////otveti//
// function sayHello(name) {
//     return `Привет, ${name}!`;
// }

// console.log(sayHello('Erick'));

// function returnNeighboringNumbers(num) {
//     return [num - 1, num, num + 1];
// }

// console.log(returnNeighboringNumbers(5));

// function getMathResult(num, times) {
//     if (typeof (times) !== 'number' || times <= 0) {
//         return num;
//     }

//     let str = '';

//     for (let i = 1; i <= times; i++) {
//         if (i === times) {
//             str += `${num * i}`;
//             // Тут без черточек в конце
//         } else {
//             str += `${num * i}---`;
//             // Это тоже самое, что и
//             // str = str + num * i + "---"
//         }
//     }

//     return str;
// }

// getMathResult(10, 5);


// const logg = 'Hello world';
// console.log(logg.slice(4, 11));//METOD SLICE//
// console.log(logg.length);

// Метод .slice() в JavaScript используется для извлечения части массива или строки, создавая новый массив (или строку) без изменения оригинала. Он принимает два аргумента: начальный индекс (откуда начинать) и конечный индекс (где остановиться, но этот индекс не включается).

// Синтаксис:
// javascript
// Копировать код
// array.slice(start, end)
// string.slice(start, end)
// start: индекс, с которого начинается извлечение (включительно).
// end: индекс, на котором остановится извлечение (не включая его). Если этот аргумент не указан, извлечение продолжается до конца массива/строки.
// Примеры для массива
// 1. Извлечение части массива:
// javascript
// Копировать код
// let fruits = ['apple', 'banana', 'cherry', 'date', 'fig'];

// let slicedFruits = fruits.slice(1, 3); // Берём элементы с индекса 1 до 3 (не включая)
// console.log(slicedFruits); // ['banana', 'cherry']

// console.log(fruits); // ['apple', 'banana', 'cherry', 'date', 'fig'] (оригинал не изменён)


