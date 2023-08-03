// In this kata, you must define the Array.reduce method.
// Here's how it works:
//
// [1,2,3].reduce(function(sum, next){return sum+next}, 0)  => 6
// ['a','b','a'].reduce(function(obj, elem) {
//      if(!obj[elem]) obj[elem] = 0;
//      obj[elem] += 1;
//      return obj
// }, {}) => {'a':2, 'b':1}
// Summary: The reduce method goes through each element of an array, applies the function to whatever the function returned last, and returns the last outcome. On the first iteration, it should pass the initial value to the function, as well as the first element of the array. If no initial value is passed, skip to the first element of the array.

Array.prototype.reduce = function(process, initial) {
    // initialStart = 0, если initial задано, иначе 1
    const initialStart = Number(!initial);
    let result = initial;
    for (let i = initialStart; i < this.length; i++) {
        const next = initialStart > 0 && i === 1 ? this[0] : result;
        result = process(next, this[i], i, this);
    }
    return result;
}

// Привет друзья! Решил, разобрать как примерно работают под капотом такие методы массивов как .reduce(), .reduceRight(), .map(), .filter(), .find() и так далее.
// Надеюсь вам будет интересно. Сегодня посмотрим на метод .reduce().
// Для начала разберемся для чего он нужен, а потом посмотрим как он работает.
// Этот матод можно использовать для того, что бы сложить числа массива, либо преобразовать массив в объект, либо преобразовать массив в массив другой длинны. Вообще способов применения много, и метод порой очень выручает.
// Работает довольно просто. Метод ожидает первым аргументом функцию, которая будет выполнятся для каждого элемента массива, и второй не обязательный параметр - начальное значение ожидаемого результата. А функция в свою очередь получает в параметры результат выполнения предыдущей итерации, и текущий элемент массива. Например,
// (Картинка [1,2,3].reduce((previous, current) => [...previous, current * 2], []);)
// На первой итерации previous будет равен пустому массиву, т.к. это первая итерация, и функция еще ничего не возвращала, потому-что выполняется впервые, и потому-что мы передали пустой массив как начальное значение. А current будет равен 1, потмоу-что это первый элемент массива.
// На второй итерации previous будет равен результату выполнения функции на предыдущей итерации, то есть массиву с одним элементом. [...previous, current * 2] === [...[], 1 * 2] === [2]. Следовательно мы
// Хорошо, меньше слов, больше дела. Пишем свою реализацию .reduce(), что бы лучше понять как он работает.
// Для переопределения метод нам потребуется написать вот такую конструкцию:
// (Картинка с Array.prototype.reduce)
//
