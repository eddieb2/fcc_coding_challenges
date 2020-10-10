/* 
Intermediate Algorithm Scripting: Convert HTML EntitiesPassed
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
*/

function convertHTML(str) {
	return str
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&apos;');
}

convertHTML('Dolce & Gabbana');

/* 
HTML conversion

& == &amp;
< == &lt;
> == &gt;
"" == &quot; <content> &quot;
'' == &apos;

*/
