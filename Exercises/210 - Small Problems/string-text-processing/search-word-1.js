/*
Write a function that takes a word and text as inputs and returns the number of times the word appears in the text.

You may assume that there will always be input word and text provided.

Example:

var text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'

searchWord('sed', text);   // 3
*/

function searchWord(word, text) {
  var regex = new RegExp(word, 'ig');
  var matches = text.match(regex) || [];

  return matches.length;
}

var text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'

console.log(searchWord('sed', text));


/*
The current solution matches the word even if it is just a part of the whole word. For example, when searching for qui in the text it would also return quia as a match.

Example

searchWord('qui', text);   // should only return 4, NOT 13
Can you refactor the current solution such that it only matches the whole word? Furthermore, could you also add in input validation such that it will handle the situation that either word and/or text is missing.
*/

function searchWord2(word, text) {
  var regex = new RegExp('\\b' + word + '\\b', 'ig');
  var matches = text.match(regex) || [];

  return matches.length;
}

console.log(searchWord2('qui', text));