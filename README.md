#Basic Operator, Math
Example: Addition +, Multiplication *, Subtraction – and so on
Terms: Unary, Binary, Operand
•	An operand is what operator are applied to. For instance, 5 * 2 there are two operands. The left operand is 5 and the right operand is 2.
•	An Operand is unary if it has a single operand. Ex: the unary negation reverses the sign of a number.
Example:
 Let x = 1;
x = -x
Alert(X); // -1, Unary negation was applied.
An operator is binary if it has two operands.
Example: 
Let x = 1, y = 3;
Alert(y – x); // 2, binary minus subtracts value.
1.	Modulus(Remainder) operator: %
Eg: alert(5 % 2); // 1, the remainder of 5 divided by 2.
2.	Exponentiation: **
The exponentiation operator a ** b raises a to the power of b.
Eg: alert(2**2); // 22 = 4.  Eg: alert(4**(1/2)); // 2, power of ½ is the same as a square root.

#String Concatenation with binary +
Using the plus operator + sums numbers. But if the binary + is applied to string, it merges(concatenates) them.
Ex: let s = “my” + “string”;
Alert(s); // mystring
Note: if any operand is a string, then the other one is converted to a string too.
Ex: alert(“1” + 2); // “12”. Ex: alert(2 + 2 + ”1”); // “41” and not “221”. (the first + sums the two number, so its 4, then the next + adds the string 1 to it. So its like 4+”1” = “41”)

#Numeric conversion, unary +
The + operator applied to a single value doesn’t do anything to the number but if the operand is not a number, the unary + converts it to a number.
Ex: alert(+true); // 1 .ex: alert(+false); // 0.
Let apple = “2”;  let oranges = “3”;
// both values converted to number before the binary plus.
Alert(+apple + +orange); // 5  or  alert(Number(apples) + Number(orange); // 5

#Increment/ Decrement
The operator ++ and – can be placed either before or after a variable.
•	When the operator goes after the variable, its in postfix form: counter ++
•	The prefix form is when the operator goes before the variable: ++counter
Ex: 
let counter = 1;
let a = ++counter; alert(a); // 2
note: the prefix for, ++counter increases counter and returns the new value.
Ex:
Let counter = 1;
Let a = counter++; alert(a) // 1
Note: the postfix form counter++ also increases counter but returns the old value.

#List of operators: (Bitwise)
•	AND(%)
•	OR(|)
•	XOR(^)
•	NOT(~)
•	LEFT SHIFT(<<)
•	RIGHT SHIFT(>>)
•	ZERO FILL RIGHT SHIFT(>>>)

#String Comparison
To see whether a string is greater than another, JavaScript uses the so called DICTIONARY or LEXICOGRAPICAL order.
String are compared letter by letter.  Ex: alert(“Z” >”A”); // true. Ex: alert(“Glow” > “Glee”); // true.
G is the same as G
L is the same as L
O is greater than e. stop here. The first string is greater.

#Conditional Operator “?”
The operator is represented by a question mark ? its also called Ternary operator because it has three operands.
Ex: let result = condition? Value1 : value2;
Note: the condition is evaluated if its truth then value1 is returned otherwise value2.
Ex: accessAllowed = (age > 18)? True : False;
Multiple ?
Let age = prompt(“age?”, 18):
Let message = (age < 3)? “Hi baby!” : (age < 18)? “Hello!”: (age < 100)? “Greetings!” : “what an unusual age!”;
Alert(message);
For Loop(Skipping parts)
Any part of For loop can be skipped. For example, we can omit begin if we don’t need to do anything at the loop start.
Ex: 
Let i = 0; // I declared outside
For(; I < 3; i++) {
Alert(i); // 0,1,2
}

#The switch statement
The syntax: The switch statement has one or more case blocks and an optional default.
Switch(x){
Case “value1”: // if (x === “value1”)
…
Break;
Case “value2”: // if (x === “value2”)
…
Break;
Default:
…
Break;
}

#Array
To get the last element of an array, we use:
Let fruits = [“apple”, “orange”, “plum”];
Alert(fruits[fruits.length -1]; // plum  or alert(fruits.at(-1); // plum
We can use loop to array value or its indexes. Eg: for…of and for…in
_for..of : This method will show all the element in an array.
_for..in: This method will show the index of all element in an array. 

#Multidimensional Array
Eg: 
Let matrix = [
[1,2,3],
[4,5,6],
[7,8,9]
];
Alert(matrix[0][1]); // 2, the second value of the first inner array.

#Array instance method
_array.at(): returns the array item at the given index. It also accepts negative integer, which count back from the last item.
_array.concat(): retu5rns a new array that is the calling array joined with other array(s) and/or value(s).
_array.copywithin(): copies a sequence of array elements within an array.
_array.entries(): returns a new array iterator object that contains the key/value pairs for each index in an array.
_array.every(): returns true if every element in the calling array satisfies the testing function.
_array.fill(): fills all element of an array from a start index to an end index with a static value.
_array.filter(): returns a new array containing all element of the calling array for which the provided filtering function returns true.
_array.find(): returns the first element in the array that satisfies the provided testing function or undefined if no appropriate element is found.
_array.findIndex(): returns the index of the first element in the array that satisfies the provided testing function or -1 if no appropriate element was found.
_array.flat(): returns a new array with all sub-array elements concatenated into its retursively up to the specified depth.
_array.flatMap(): returns a new array formed by applying a given callback function to each element of the calling array and then flattening the result by one level.
_array.forEach(): calls a function for each element in the calling array.
_array.includes(): determine whether the calling array contains a value, returning true or false as appropriate
_array.indexOf(): returns the first(last) index at which a given element can be found in the calling array.
_array.join(): joins all element of an array into a string.
_array.key(): returns a new array iterator that contains the keys for each index in the calling array. 
_array.map(): returns a new array containing the result of invoking a function on every element in the calling array.
_array.reverse(): reverses the order of the elements of an array in place. ( first becomes the last, last becomes the first)
_array.slice(): extract a section of the calling array and returns a new array.
_array.some(): returns true if at least one element in the calling array satisfies the provided testing function.
_array.sort(): sorts the element of an array in place and  returns the array.
_array.splice(): add and/or removes element from an array.
_array.toReverved(): returns a new array with element in reserved order without modifying the original array.
_array.toSorted(): returns a new array with the element sorted in ascending order without modifying the original array.
_structuredClone(): it create a deep copy of a given value, including array, object and other complex data structure.

#Create an Array

•	Using array literal notation
Const fruits = [“apple”, “banana”];
•	Using Array() Constructor
Const fruits = newArray(“apple”, “banana”);
•	Using string.split()
Const fruits = “apple”, “banana”.split(“,”);

