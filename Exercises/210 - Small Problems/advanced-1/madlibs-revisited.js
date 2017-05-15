/*
Let's build another program using madlibs. We made a program like this in the easy exercises. This time the requirements will be a bit different.

Make a madlibs program that takes a text template as input, and then plugs in a selection of randomized nouns, verbs, adjectives, and adverbs into that text and prints it. You can build your lists of nouns, verbs, adjectives, and adverbs directly into your program. Your program should read this text, and for each line, it should place random words of the appropriate types into the text, and print the result.

The challenge of this program isn't just about writing your solution; it's about choosing the structure of the text template. Choose the right way to structure your template, and this problem becomes a whole lot easier. Consequently, this exercise is a bit more open ended since the input is also something that you will be defining.

Example output:

Note: The quotes in the sample output after calling the madlibs function is only for emphasis. It isn't present in the actual output. The words in quotes come from the list of texts and it is the madlibs function that puts it in.

function madlibs(template) {
  // ...
}

// Here are sample runs with the following list of texts:
adjectives: quick lazy sleepy noisy hungry
nouns: fox dog head leg tail
verbs: jumps lifts bites licks pats
adverb: easily lazily noisily excitedly
---

madlibs(template1);

// The "sleepy" brown "cat" "noisily"
// "licks" the "sleepy" yellow
// "dog", who "lazily" "licks" his
// "tail" and looks around.

madlibs(template1);

// The "hungry" brown "cat" "lazily"
// "licks" the "noisy" yellow
// "dog", who "lazily" "licks" his
// "leg" and looks around.

madlibs(template2);

// The "fox" "bites" the "dog"'s "tail".

madlibs(template2);

// The "cat" "pats" the "cat"'s "head".
*/

// Pass in a template filled with words to replace
// Words to replace will be in the format:
//   - _ADJECTIVE_
//   - _NOUN_
//   - _VERB_
//   - _ADVERB_
// Use regex to replace this with a randomly selected value in the appropriate array.

function madlibs(template) {
  var adjectives = ['quick', 'lazy', 'sleepy', 'noisy', 'hungry'];
  var nouns = ['fox', 'dog', 'head', 'leg', 'tail'];
  var verbs = ['jumps', 'lifts', 'bites', 'licks', 'pats'];
  var adverbs = ['easily', 'lazily', 'noisily', 'excitedly'];
  var story = template.split(' ');

  story = story.map(function(word) {
    word = word.replace(/_ADJECTIVE_/, getRandomWord(adjectives));
    word = word.replace(/_NOUN_/, getRandomWord(nouns));
    word = word.replace(/_VERB_/, getRandomWord(verbs));
    word = word.replace(/_ADVERB_/, getRandomWord(adverbs));

    return word;
  }).join(' ');

  return story;
}

function getRandomWord(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

var template1 = "The _ADJECTIVE_ brown _NOUN_ _ADVERB_ _VERB_ the _ADJECTIVE_ yellow _NOUN_, who _ADVERB_ _VERB_ his _NOUN_ and looks around.";

var template2 = "The _NOUN_ _VERB_ the _NOUN_'s _NOUN_";

console.log(madlibs(template1));
console.log(madlibs(template1));
console.log(madlibs(template2));
console.log(madlibs(template2));