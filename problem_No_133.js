/**
Given a string of words delimited by spaces, revers the words in string. For example, given “hello world here”, return “here word hello”
Follow-up: given a mutable string representation, can you perform this operation in-place?
Solution:

O(N) time and O(N) space
Split by space
Revert array 
concat back as tring
print out

O(N) and O(1) space
Condition: Give a mutable string
Reverse string: so we have "abc def hi" to "ih fed cba"
Revser words: so final we have: "hi def abc"
**/

function reverse_str(str) {
	let words = str.split(" ").reverse();
	return words.join(" ");
}

console.log(reverse_str("hello world here"));	