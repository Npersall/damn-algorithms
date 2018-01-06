/*
Standard DNA is made up of four types of nucleotides: Adenine (A), Thymine (T), Cytosine (C), and Guanine (G). A strand of DNA is a sequence of characters that consist of these four letters such as 'ATTCGAC'.

But according to Kendrick Lamar, his DNA is made of elements like LOYALTY, ROYALTY, WAR, PEACE, POWER, POISON, PAIN, and JOY.

Given a positive integer of n and a DNA sequence string, write a function that returns an array of all the n-letter-long sequences that occur more than once in a given sequence.

Example:
let sequence = 'WARPEACE';
findRepeatedDnaSequences(sequence, 3) => return []

let sequence = 'WARPEACEWAR';
findRepeatedDnaSequences(sequence, 2) => return ['WA', 'AR']
findRepeatedDnaSequences(sequence, 3) => return ['WAR']
findRepeatedDnaSequences(sequence, 4) => return []

let sequence = 'PAINJOYPAIN';
findRepeatedDnaSequences(sequence, 4) => return ['PAIN']

let sequence = 'WARPEACEPEACE';
findRepeatedDnaSequences(sequence, 5) => return ['PEACE']

let sequence = 'POISONPAINPOISONJOY';
findRepeatedDnaSequences(sequence, 6) => return ['POISON']

let sequence = 'LOYALTYWARROYALTYPEACELOYALTYJOYROYALTY';
findRepeatedDnaSequences(sequence, 7) => return ["LOYALTY", "ROYALTY"]
*/

/**
 * @param  {string} sequence
 * @param  {number} n
 * @return {array}
 */

const findRepeatedDnaSequences = (sequence, n) => {};

export default findRepeatedDnaSequences;
