'use strict';

const arrayRangeLib = {
	/**
	 * Приводит к строке специальный массив (содержащий только целые положительные числа отсортированные по возрастанию)
	 *
	 * @param {Number[]} arr массив
	 *
	 * @returns {Promise<String>}
	 */
	rangeArrayToStringAsync(arr) {
		return new Promise((resolve, reject) => {
			try {
				resolve(this._rangeArrayToString(arr));
			} catch (err) {
				reject(err);
			}
		});
	},

	/**
	 * Валидация. При наличии ошибок вернет массив со списком ошибок
	 *
	 * @param {Number[]} arr массив
	 *
	 * @returns {Object[]}
	 */
	_validate(arr) {
		const result = [];

		// аргумент должен быть массивом
		if (!(arr instanceof Array)) {
			result.push('arr should be Array');
			return result;
		}

		arr.find((number, index) => {
			// элементы должны быть числами
			if (typeof number !== 'number') {
				result.push('arr should be number');
				return true;
			}

			// числа должны быть положительными
			if (number <= 0) {
				result.push('number should be positive');
				return true;
			}

			// элементы должны идти по возрастанию
			if (index && arr[index - 1] > number) {
				result.push('arr should be sort by asc');
				return true;
			}
		});

		return result;
	},
	/**
	 * Приводит к строке специальный массив (содержащий только целые положительные числа отсортированные по возрастанию)
	 *
	 * @param {Number[]} arr массив
	 *
	 * @returns {String}
	 */
	_rangeArrayToString(arr) {
		const validation = this._validate(arr);

		if (validation.length) {
			throw new Error(`validation error: ${validation.join(this.separator.SEQUENCE)}`);
		}

		// вначале разбиваем массив на подмассивы
		const arrayList = this._splitToArrayList(arr);
		// имея массив массивов, можем получить ожидаемую строку
		return this._arrayListToString(arrayList);
	},

	/**
	 * Получить последний элемент массива
	 *
	 * @param {Number[]|Array[]} arr массив
	 *
	 * @returns {Number|Array}
	 */
	_getLastItem(arr) {
		return arr[arr.length - 1];
	},

	/**
	 * Разбивает массив на массив массивов
	 *
	 * @param {Number[]} arr массив
	 *
	 * @returns {Array[]}
	 */
	_splitToArrayList(arr) {
		return arr.reduce((result, number, index) => {
			// если элемент можно просто добавить к результату, так и делаем
			if (this._isShouldAddToResult(result, number, index)) {
				result.push([number]);
				return result;
			}

			// если нельзя значит нам нужно добавить элемент в последний массив
			const priviousArray = this._getPriviousArray(result);
			priviousArray.push(number);

			return result;
		}, []);
	},

	/**
	 * Должен ли элемент быть добавлен к результирующему массиву
	 *
	 * @param {Number[]} result массив чисел
	 * @param {Number} number число
	 * @param {Number} index индекс элемента в result
	 *
	 * @returns {Boolean}
	 */
	_isShouldAddToResult(result, number, index) {
		// первый элемент добавляем в результат
		if (!index) {
			return true;
		}

		const priviousNumber = this._getPriviousNumber(result);

		// для остальных делаем проверку
		// если разница между текущим элементом и прошлым больше единицы
		// то добавляем к результату
		return number - priviousNumber > 1;
	},

	/**
	 * Получить предыдущий элемент
	 *
	 * @param {Number[]} result массив чисел
	 *
	 * @returns {Number}
	 */
	_getPriviousNumber(result) {
		const priviousArray = this._getPriviousArray(result);

		return this._getLastItem(priviousArray);
	},

	/**
	 * Получить последний массив
	 *
	 * @param {Array[]} result массив массивов
	 *
	 * @returns {Number[]}
	 */
	_getPriviousArray(result) {
		return this._getLastItem(result);
	},

	/**
	 * Из массива массивов получает строку
	 *
	 * @param {Array[]} arr массив массивов
	 *
	 * @returns {String}
	 */
	_arrayListToString(arr) {
		return arr.reduce((result, numberList) => {
			// если массив состоит только из одного элемента, то достаточно вызвать Array.prototype.toString
			if (numberList.length === 1) {
				result.push(numberList.toString());
			} else {
				result.push(this._getRangeStringFromArray(numberList));
			}

			return result;
		}, [])
		.join(this.separator.SEQUENCE);
	},

	/**
	 * Приводит массив к строке, разделяя диапазоны по separator.RANGE
	 *
	 * @param {Number[]} arr массив
	 *
	 * @returns {String}
	 */
	_getRangeStringFromArray(arr) {
		const firstNumber = arr[0];
		const lastNumber = this._getLastItem(arr);

		return [firstNumber, lastNumber].join(lastNumber - firstNumber > 1 ? this.separator.RANGE : this.separator.SEQUENCE);
	},

	/**
	 * Разделители
	 */
	separator: {
		RANGE: '-',
		SEQUENCE: ','
	}
};


module.exports = arrayRangeLib;
