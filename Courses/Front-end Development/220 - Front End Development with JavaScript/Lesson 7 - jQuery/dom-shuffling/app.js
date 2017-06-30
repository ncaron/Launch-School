var $header = $('body > header');
var $main = $('main');
var $mainArticle = $('main article');
var $h1 = $('main > h1');
var $fig1 = $('figure').get(0);
var $fig2 = $('figure').get(1);

$main.before($header);
$header.prepend($h1);
$mainArticle.append($fig2);
$mainArticle.append($fig1);