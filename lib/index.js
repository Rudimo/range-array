'use strict';
const arrayRangeLib = require('./arrayRangeLib');
/**
 * Приводит к строке специальный массив (содержащий только целые положительные числа отсортированные по возрастанию)
 *
 * @param {Array} arr массив
 *
 * @returns {Promise<String>}
 */
function rangeArrayToString(arr) {
	return arrayRangeLib.rangeArrayToStringAsync(arr);
}

module.exports = rangeArrayToString;
