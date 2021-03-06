// Задание 3.
// Написать функцию, которая принимает число как аргумент и возвращает функцию, 
// которая также принимает число как аргумент и возвращает сумму этих двух чисел.
// Выведите в консоль результат.


function getFuncResult(numX = 5) {
	return function (numY = 1) { 
		return `Сумма = ${numX + numY}`;
		
	}
}

// по умолчанию возьмет значения х и y
getFuncResult()(); 
// сложит значения, которые передали при вызове функции в аргументы , а не дефолтные (приоритет аргументов, которые последние в вызове)
getFuncResult(5)(6); 

// второй вариант 
// выведет внутреннюю функцию сразу после вызова первой, потому что первый вызов возвращает функцию, а второй вызов дает результат
// function getFuncResult() {
// 	let numX = 7;
// 	return function (numY = 1) {
// 		return `Сумма = ${numX + numY}`;

// 	}
// }
// getFuncResult()(6); 
