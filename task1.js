// Дан массив.Нужно вывести в консоль количество чётных и нечётных элементов в массиве.
// Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 
// При выполнении задания необходимо учесть, что массив может содержать не только числа,
// но и, например, знаки, null и так далее.

const arr = [0, 1, 1, 2, 3, 5, 8, 13, 'Fibonacci', null]

function getCountElem(arr) {
	CountAdd = 0; 
	CountOdd = 0; 
	CountStr = 0;
	CountNull = 0;

	for (let i=0; i < arr.length; i++) {
		let item = arr[i]
		if (typeof item  === 'string' ) {
			CountStr++;
		} else if (item === null) {
			CountNull++;
		} else if (item % 2 === 0) {
				CountAdd++;
		} else CountOdd++;
	};
	console.log("Количество строк: " + CountStr);
	console.log("Количество null: " + CountNull);
	console.log("Количество четных чисел: " + CountAdd);
	console.log("Количество нечетных чисел : " + CountOdd);
	
};

getCountElem(arr);
