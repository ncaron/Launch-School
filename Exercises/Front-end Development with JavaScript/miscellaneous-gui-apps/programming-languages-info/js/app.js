var languages = [
  {
    name: 'Ruby',
    description: 'Ruby is a dynamic, reflective, object-oriented, ' +
    'general-purpose programming language. It was designed and developed in the mid-1990s ' +
    'by Yukihiro Matsumoto in Japan. According to its creator, Ruby was influenced by Perl, ' +
    'Smalltalk, Eiffel, Ada, and Lisp. It supports multiple programming paradigms, ' +
    'including functional, object-oriented, and imperative. It also has a dynamic type ' +
    'system and automatic memory management.'
  },
  {
    name: 'JavaScript',
    description: 'JavaScript is a high-level, dynamic, untyped, and interpreted ' +
    'programming language. It has been standardized in the ECMAScript language ' +
    'specification. Alongside HTML and CSS, JavaScript is one of the three core ' +
    'technologies of World Wide Web content production; the majority of websites employ ' +
    'it, and all modern Web browsers support it without the need for plug-ins. JavaScript ' +
    'is prototype-based with first-class functions, making it a multi-paradigm language, ' +
    'supporting object-oriented, imperative, and functional programming styles.'
  },
  {
    name: 'Lisp',
    description: 'Lisp (historically, LISP) is a family of computer programming languages ' +
    'with a long history and a distinctive, fully parenthesized prefix notation. ' +
    'Originally specified in 1958, Lisp is the second-oldest high-level programming ' +
    'language in widespread use today. Only Fortran is older, by one year. Lisp has changed ' +
    'since its early days, and many dialects have existed over its history. Today, the best '+
    'known general-purpose Lisp dialects are Common Lisp and Scheme.'
  },
  {
    name: 'C',
    description: 'C is alright, I guess.'
  },
];

$('#languages').on('click', 'a', function(e) {
  e.preventDefault();

  var $button = $(this);
  var $p = $(this).prev('.desc');
  var $languageName = $(this).closest('.lang').attr('data-lang');
  var description = languages.filter(function(language) {
    return language.name === $languageName;
  })[0].description;

  if ($button.text() === 'Show More') {
    $button.text('Show Less');
    displayDesc(description, $p, false)
  } else {
    $button.text('Show More');
    displayDesc(description, $p, true)
  }
});

languages.forEach(function(language) {
  var $div = $('<div/>', {
    class: 'lang',
    'data-lang': language.name
  }).appendTo('#languages');

  $('<h2/>').text(language.name).appendTo($div);

  var $p = $('<p/>', {
    class: 'desc'
  }).appendTo($div);

  if (language.description.length > 120) {
    displayDesc(language.description, $p, true);

    $('<a/>', {
      class: 'btn',
      href: '#'
    }).text('Show More').appendTo($div);
  } else {
    displayDesc(language.description, $p, false);
  }
});

function displayDesc(description, $p, ellipsis) {
  if (ellipsis) {
    description = description.substring(0, 120) + ' ...';
  }

  $p.text(description);
}