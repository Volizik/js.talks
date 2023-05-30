// In this kata, your goal is to write a function which will reverse the vowels in a string. Any characters which are not vowels should remain in their original position. Here are some examples:
//
// "Hello!" => "Holle!"
// "Tomatoes" => "Temotaos"
// "Reverse Vowels In A String" => "RivArsI Vewols en e Streng"
// For simplicity, you can treat the letter y as a consonant, not a vowel.
//
// Good luck!

const reverseVowels = (str) => {
    const vowels = [];

    str.replace(/[AaEeIiOoUu]/g, (l) => vowels.push(l));

    return str.replace(/[AaEeIiOoUu]/g, () => vowels.pop());

    // const vowels = (str.match(/[aeoiu]/gi) || []);
    //
    // return str.replace(/[aeoiu]/gi, () => vowels.pop());
}

module.exports = reverseVowels;
