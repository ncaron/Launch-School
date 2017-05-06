/*
Review the code below and tell what the output will be? Don't run the code until you've tried to process it yourself first.

(false && undefined);
(false || undefined);
((false && undefined) || (false || undefined));
((false || undefined) || (false && undefined));
((false && undefined) && (false || undefined));
((false || undefined) && (false && undefined));
('a' || (false && undefined) || '');
((false && undefined) || 'a' || '');
('a' && (false || undefined) && '');
((false || undefined) && 'a' && '');
*/

// LOG
// false
// undefined
// undefined
// false
// false
// undefined
// a
// a
// undefined
// undefined

console.log((false && undefined));
console.log((false || undefined));
console.log(((false && undefined) || (false || undefined)));
console.log(((false || undefined) || (false && undefined)));
console.log(((false && undefined) && (false || undefined)));
console.log(((false || undefined) && (false && undefined)));
console.log(('a' || (false && undefined) || ''));
console.log(((false && undefined) || 'a' || ''));
console.log(('a' && (false || undefined) && ''));
console.log(((false || undefined) && 'a' && ''));