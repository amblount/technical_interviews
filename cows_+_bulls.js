// https://www.hackerrank.com/contests/codesh/challenges/cow-and-bull

// https://codepad.remoteinterview.io/PCYTRGBFUU

// COW -- # letter in guessed word also in chosen word but at incorrect position

// BULL -- # letters in guessed word also in chosen word at correct position

// http://hr-contest-assets.s3.amazonaws.com/cows_and_bulls.txt



/*
R2-D2 and C-3PO are bored and decide to play a game to spend the time. The ever eloquent C-3PO uses the famous word game, ‘Cows and Bulls’ to put R2-D2’s knowledge of code-breaking to the test.

C3-PO will choose a word at random, and only inform R2-D2 about its length. Thereafter, R2-D2 will have to guess words of that length. For each guess, C3-PO can only reveal two things - the number of letters in the guessed word which are also in the chosen word but at incorrect positions (called Cows) and the number of letters in the guessed word which are also in the chosen word at correct positions (called Bulls). As confounding as this may be, R2-D2 must attempt to guess the word that C-3PO originally chose, in as few guesses as possible. Dictionary can be downloaded from here.

Note You are allowed to create a local file to track your moves.

Input Format

The first input of your program contains two integerts N and -1 separated by space where N is the size of the word. Subsequent inputs contains two numbers separated by a single space. Cows and Bulls.

Output Format

Print the word of length N which you think is the correct answer.

Scoring 
Score is N2.5 - no. of guesses. 
If you exceed N2.5 guesses you lose.

Constraints 
4 <= N <= 8
*/


// OUR GUESSES
//         C,B
// AAAA -> 0,0
// AAAB -> 0,0
// AAAC -> 0,0
// AAAD -> 0,0
// ....
// AAAZ -> 0,1
// AABZ -> 0,1
// ....
// AAZZ -> 0,2
// ....

// Total Guesses: 26 * 4 => 104 > 32 :(

//AAAA -> 0,0
//BBBB -> 

// Total Guesses = 26 < 32 :)


// Answer: ZZZZ

// ABBA : Correct

// ACDX



// Target:
// X, D, C, A


//       C B
// ACDX  4 0
// AADX  3 0
// AAAX  2 0
// AAAA  0 1
// CXDA  3 1
// CCDA  2 1
// CCCA  0 2
// DXCA  2 2
// XDCA  0 4




// XACD  2,2
// DACX  3,1





// CADX  4 0  (change but still in wrong position - who moved?)
// CDAX  3 1. (c in wonr position according to line above)
// CDXA  2,2  (know that d and a in right position - not c || x from line 7, swap to get final sol)
// XDCA  0,4


// the possibilities for position in the final word, based on the brute force 4 letter swap 
// system to rotate letters around, quick and efficient to by pass permutation problem
// read through dict
// pinpoint each bull - substitute each letter for one

// {
//     A: [1, 2, 3]
//     C: [0, 2, 3],
//     D: [0, 1, 3],
//     X: [0, 1, 2]
    
// }

// 26 + 9 => 



// ACXD  => CAXD => CXAD => CXDA
// ADCX
// ADXC
// AXCD
// AXDC



// CAB (correct answer)

//     C B
// ABC 3,0

// ACB 2,1


// BCA 3,0
// CAB 0,3




// First, loop through the entire word

// AAAA
// BBBB
// CCCC

// Creates a word list in At most 26 Moves
// 6 moves to solve the rest


// Permute the different letters intelligently 



// ACB 


// BAC
// BCA
// CAB
// CBA



// 4 => 24
// 5 => 24 * 5 = 120
// 6 => 120 * 6 = 720

//         C B
// AAAA -> 0,0 (no A in this word) -> BBBB
//      -> 0,1 (1 letter is in the correct spot, you don't know which one)
//      -> 0,2 
//      -> 0,3
//      -> 0,4 (solved it optimal)




// ABBB -> 0,1 (A is in correct position, No Bs in word)
//      -> 1,0 (A is in wrong position, No Bs in word)
//      -> 0,2 (A is in Correct position, 1 B in correct position)
//      -> 1,1 (A is in wrong position, 1 B in correct position)
//      -> 2,0 (A in wrong position, B in Wrong position)
//      -> 0,4 (SOLVED IT)
