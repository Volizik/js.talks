// Напишите функцию, которая возвращает сумму двух самых маленьких чисел в массиве.
// Массив должен содержать только целые числа, минимальная длинна 4 цифры.
// Например, передав такой массив [19, 5, 42, 2, 77], функция должна вернуть 7













// Всем привет! В этот раз задача написать функцию, которая возвращает сумму двух самых маленьких чисел в массиве.
// Массив должен содержать только целые числа, массив должен содержать не меньше 4 цифр.
// Для начала отсортируем массив от меньшего к большему с помощью метода sort.
// Пару слов об этом методе. Во первых он сортирует не совсем как мы ожидаем, 
// и т.к. тепеь первые два элемента массива это самые маленькие цифры - можем записать их подобным образом.
// Эта запись сохраняет первый элемент массива в переменную firstSmallestNum, а второй элемент в переменную secondSmallestNum, и называется деструктурирующее присваивание.
// Был бы тот же результат, если бы я взял числа по индексам 0 и 1 в отсортированном массиве, но подобная запись позволяет давать названия элементам массива, которые мы хотим использовать, что в свою очередь улучшает читаемость кода
// Также есть еще один важный момент, который нужно запомнить. Метод sort изменяет существующий массив, а не создает новый.
