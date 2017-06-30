/*
With each of these practice problems, to test the jQuery selector on the supplied HTML in a browser, you can open this HTML file and try out your selectors in the Chrome console. When you have selected the elements, you can add a "highlight" class to them using .addClass("highlight") to visually change the elements on the page to make sure you only obtained the elements you were trying to locate. To reset the page, simply refresh.
*/

// 1. Use the element selector to obtain all of the h1 elements.
$('h1');

// 2. Use the ID selector to obtain just the first h1 element.
$('#site_title');

// 3. Locate all of the list items within the article element using the descendant selector.
$('article li');

// 4. Get the third list item from the article element.
$('article li').eq(2);

// 5. Select the table element. From there, find the table rows that are odd-numbered.
$('table').find('tr:odd');

// 6. Find the list item with text ac ante, then find the parent list item.
$('article li li').filter(":contains('ac ante')").parents('li');

// 7. Find the same list item with text ac ante, then find the next element.
$('article li li').filter(":contains('ac ante')").next();

// 8. Get all of the table cells within the table, then obtain the last one in the collection.
$('table td').last();

// 9. Get all of the table cells, then revise your collection to not include cells with a class of "protected".
$('table td').not('.protected');

// 10. Find all of the anchor elements that have an href that begins with #.
$('a[href^=#]');

// 11. Find all elements that have a class name that contains "block".
$('[class*=block');