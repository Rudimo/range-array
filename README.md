# range-array
[![Build Status](https://travis-ci.org/SteppeEagle/range-array.svg?branch=master)](https://travis-ci.org/SteppeEagle/range-array)
[![codecov](https://codecov.io/gh/SteppeEagle/range-array/branch/master/graph/badge.svg)](https://codecov.io/gh/SteppeEagle/range-array)

Модуль для Node.JS, который преобразует массив чисел в строку по
примеру:

[1,2,3,4,5,6,7,8] -> "1-8"

[1,3,4,5,6,7,8] -> "1,3-8"

[1,3,4,5,6,7,8,10,11,12] -> "1,3-8,10-12"

[1,2,3] -> "1-3"

[1,2] -> "1,2"

[1,2,4] -> "1,2,4"

[1,2,4,5,6] -> "1,2,4-6"

[1,2,3,7,8,9,15,17,19,20,21] -> "1-3,7-9,15,17,19-21"

[1,2,3,4,5,6,100,1091,1999,2000,2001,2002] -> "1-6,100,1091,1999-2002"

[1] -> "1"

[1,3,5,7,9,11] -> "1,3,5,7,9,11"

# Требования
Числа должны быть в массиве всегда целые, положительные и отсортированы по возрастанию.

# Использование

```bash
npm install my-range-array
```
```javascript
const rangeArrayToString = require('my-range-array');

rangeArrayToString([1, 2, 3, 4, 5, 6, 7, 8])
  .then((str) => {
    // получаем строку '1-8'
  })
  .catch((err) => {
    // обрабатываем ошибки
  });
```
