# Part 1

1. The variable `i` will be printed becaue it has global scope.
2. The variable `discountedPrice` will be printed because it's a global variable.
3. The variable `finalPrice` will be printed because it's a global variable.
4. The function returns `[ 50, 100, 150 ]`. For each price in the `prices` array, a rounded discounted price is calculated and pushed to an array `discounted` of discounted prices. Then `discounted` is returned. In this particular call, each price is halved.
5. A `ReferenceError` is thrown because `i` is local to the for loop and does not exist when line 11 is run.
6. Nothing because line 11 crashes the program? Assuming all code is correct, `ReferenceError` is thrown because `discountedPrice` is local to for loop.
7. `ReferenceError` is thrown because `finalPrice` is local to for loop.
8. Nothing, because the previous exceptions crashed the program. Assuming the console.log's don't exist, the function returns `[ 50, 100, 150 ]`. For each price in the `prices` array, a rounded discounted price is calculated and pushed to an array `discounted` of discounted prices. Then `discounted` is returned. In this particular call, each price is halved.
9. Program won't get to line 11 because of `TypeError` on line 7 (`finalPrice` is a constant so it can't be reassigned).
10. Program won't get to line 12 because of `TypeError` on line 7 (`finalPrice` is a constant so it can't be reassigned).
11. Program won't get to line 13 because of `TypeError` on line 7 (`finalPrice` is a constant so it can't be reassigned).
12. The function won't return anything because of `TypeError` on line 7 (`finalPrice` is a constant so it can't be reassigned).
13. A) `student.name` B) `student['Grad Year']` C) `student.greeting()` D) `student['Favorite Teacher'].name` E) `student.courseLoad[0]`
14. Arithmetic

    1. `'32'`. One of the operands is a string so the second operand is type converted to string and the `+` concatenates the 2.
    2. `1`. It doesn't make sense for JS engine to substract strings. So operand types are converted to number and it becomes a numeric calculation.
    3. `3`. One of the operands is a number so the plus sign is treated as addition and `null` is converted to `0`.
    4. `"3null"`. One of the operands is a string so everything is type converted to string so the plus sign becomes concatenation.
    5. `4`. One of the operands is a number so the boolean is converted to `1` for true.
    6. `0`. `false` and `null` are different types and aren't compatible, so both are numerically type converted to `0` and `0`.
    7. `"3undefined"`. One of the operands is a string so all are type converted to string and concatenated.
    8. `NaN`. `undefined` can't be converted into a number so no subtraction is possible with the combination of operands so the result is Not a Number.

15. Comparison

    1. `true`. The string is converted to number type for proper value comparision. Since `2 > 1` so it turns out `true`.
    2. `false`. `'2'` is not smaller than `'12'` in lexicographical order.
    3. `true`. The string is type converted to 2 and check for value equality. `==` losely compares 2 values.
    4. `false`. The 2 values are being strictly compared with type taking into account. So they are not equal (one is string the other is number), so they are `false`.
    5. `false`. `true` is type converted to `1` and 1 is not 2 so it's `false`.
    6. `true`. `Boolean(2)` is explicitly type converted to `true` and `true === true` so `true`.

16. Both are used for equality comparision except `==` ignores the data types of variables while `===` takes the type into account. If 2 variables have different type `===` will evaluate to `false`.

17. `How are you?`. The first conditional is false because as we have seen in question 15. The second conditional evaluates to `true` because `2` by itself is evaluated to true (anything non-zero is evaluated to true).

18. Answer in [part1-question18.js](./part1-question18.js)

19. `[ 6, 8, 10 ]`. For every element in `array`, we call the callback function `doSomething` passing in the element at index `i` and define another inline function that multiplies its argument by 2. The inline callback function is called inside `doSomething` and so the element in `array` is first added by 2 then multiplied by 2. The return value is then pushed to `newArr`, which is eventually returned by `modifyArray`.

20. Answer in [part1-question20.js](./part1-question20.js)

21. The code outputs a `ReferenceError` because `i is not defined`.