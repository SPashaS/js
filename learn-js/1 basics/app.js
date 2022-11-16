// --------  1 - Привет, мир!

// Для добавления кода JavaScript на страницу используется тег <script>
// Атрибуты type и language необязательны.
// Скрипт во внешнем файле можно вставить с помощью <script src="path/to/script.js"></script>.


// --------  2 - Переменные
// 2.1 Работа с переменными
// let admin;
// let name;
// name = 'John';
// admin = name;
// alert(admin);
// 2.2 Придумайте правильные имена
// Создайте переменную для названия нашей планеты. Как бы вы её назвали?
// let = ourPlanetName;
// Создайте переменную для хранения имени текущего посетителя сайта. Как бы вы назвали такую переменную?
// let = currentUserName;
// // 2.3 Какие буквы (заглавные или строчные) использовать для имён констант?
// const birthday = '18.04.1982';
// можно BIRTHDAY но не AGE
// const age = someCode(birthday);


// --------  3 - Шаблонные строки
// 3.1 Работа с переменными
// let name = "Ilya";
// alert( `hello ${1}` ); // hello 1
// alert( `hello ${"name"}` ); // hello name
// alert( `hello ${name}` ); // hello Ilya

// --------  4 - Взаимодействие: alert, prompt, confirm
// 4.1 Простая страница
// Создайте страницу, которая спрашивает имя у пользователя и выводит его.
// alert( `Your name is ${prompt('What is your name?', '')}`);

// --------  5 - Базовые операторы, математика
// 5.1 Постфиксная и префиксная формы
// Чему будут равны переменные a, b, c и d в примере ниже?
// let a = 1, b = 1;
// let c = ++a; // 2
// let d = b++; // 1
// 5.2 Результат присваивания
// Чему будут равны переменные a и x после исполнения кода в примере ниже?
// let a = 2;
// let x = 1 + (a *= 2); // a = 4; x = 5
// console.log(a, x);

// 5.3 Преобразование типов
// Какой результат будет у выражений ниже?
// console.log( typeof("" + 1 + 0) ); // '10'
// console.log ( typeof("" - 1 + 0)); // Nan
// console.log ( true + false) // 1
// console.log(6 / "3"); // 2
// console.log("2" * "3"); //6
// console.log(4 + 5 + "px"); // '9px'
// console.log("$" + 4 + 5); // '$45'
// console.log("4" - 2); // 2
// console.log("4px" - 2); // Nan
// console.log("  -9  " + 5); // '  -95  5'
// console.log("  -9  " - 5); // -14
// console.log(null + 1); // 1
// console.log(undefined + 1); // Nan
// console.log(" \t \n" - 2); // -2

// 5.4 Исправьте сложение
// Ниже приведён код, который запрашивает у пользователя два числа и показывает их сумму.
// Он работает неправильно. Код в примере выводит 12 (для значения полей по умолчанию).
// В чём ошибка? Исправьте её. Результат должен быть 3.
// let a = prompt("Первое число?", 1);
// let b = prompt("Второе число?", 2);
// alert(+a + +b); // 12

// --------  6 Операторы сравнения
// 6.1 Каким будет результат этих выражений?
// console.log(5 > 4); // true
// console.log("ананас" > "яблоко"); //false
// console.log("2" > "12"); //true
// console.log(undefined == null); //true
// console.log(undefined === null); //false
// console.log(null == "\n0\n"); //false
// console.log(null === +"\n0\n"); //false

// --------  7 Условное ветвление: if, '?'

// if (строка с нулём)
// 7.1 Выведется ли alert?
// if ("0") {
//   alert( 'Привет' );
// } // yes, тк строка из нуля это true

// 7.2 Название JavaScript
// Используя конструкцию if..else, напишите код, который будет спрашивать: „Какое «официальное» название JavaScript?“
//Если пользователь вводит «ECMAScript», то показать: «Верно!», в противном случае – отобразить: «Не знаете? ECMAScript!»
// let userAnswer = prompt('Какое «официальное» название JavaScript?', '');
// if ( userAnswer === 'ECMAScript') {
//   alert('Верно');
// } else alert ('Не знаете? ECMAScript!')

// 7.3 Покажите знак числа
//Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert:
//1, если значение больше нуля,
//-1, если значение меньше нуля,
//0, если значение равно нулю.
//Предполагается, что пользователь вводит только числа.
// let value = +prompt('Введите число', '')
// if ( value > 0) {
//     alert('1');
// } else if (value < 0) {
//     alert('-1')
// } else alert('0');

// --------  8
// --------  9
// --------  10
// --------  10
// --------  10
// --------  10
// --------  10
// --------  10
// --------  10
// --------  10
// --------  10
// --------  10
// --------  10
// --------  10
// --------  10
// --------  10
// --------  10
// --------  10
// --------  10
// --------  10
// --------  10
