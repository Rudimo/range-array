/**
 * Приводит к строке специальный массив (содержащий только целые положительные числа отсортированные по возрастанию)
 *
 * @param {Array} arr массив
 *
 * @returns {Promise<String>}
 */
function rangeArrayToString(arr) {
	return new Promise((resolve, reject) => {
		resolve(rangeArrayToStringSync(arr));
	});
}

/**
 * Приводит к строке специальный массив (содержащий только целые положительные числа отсортированные по возрастанию)
 *
 * @param {Array} arr массив
 *
 * @returns {String}
 */
function rangeArrayToStringSync(arr) {
	return arr.reduce((result, number, index) => {
		// если элемент первый, то создаем массив и добавлем туда элемент
		if (index) {
			const priviousArray = result[result.length - 1];
			const priviousNumber = priviousArray[priviousArray.length - 1];

			// если разница между текущим элементом и прошлым больше единицы
			// создаем новый массив, в который добавляем текущий элемент
			if (number - priviousNumber > 1) {
				result.push([number]);
			// если разница равна еденицы, то добавляем в последний массив
			} else {
				priviousArray.push(number);
			}
		} else {
			result.push([number]);
		}

		return result;
	}, [])
	// имея массив массивов, пройдемся еще разок
	.reduce((result, numberList) => {
		if (numberList.length === 1) {
			result.push(numberList.toString());
		} else {
			const firstNumber = numberList[0];
			const lastNumber = numberList[numberList.length - 1];

			result.push([firstNumber, lastNumber].join(lastNumber - firstNumber > 1 ? '-' : ','));
		}

		return result;
	}, [])
	.toString();
}

module.exports = rangeArrayToString;

module.exports = rangeArrayToString;
