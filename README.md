hintJS
======

A simple javacript hint extension for HTMLInputElement["text"], HTMLTextAreaElement elements

## Demo
<a href="http://urucas.github.io/hint.js/">http://urucas.github.io/hint.js/</a>.

Usage
=====
hintJS is a DOM extension but it also provides a jQuery extension

``` javascript
document.getElementById("element2hint").hint("Im a hint text");
document.getElementById("element2hint").hint("Im a hint text", {"hintColor" : "#f00", "textColor": "#0f0"});
document.getElementsByClassName("elements2hint").hint("Im a hint text", {"hintColor" : "#f00", "textColor": "#0f0"});

// take hint text from input title attribute
// <input type="text" title="im a hint text" id="element2hint" />
document.getElementById("element2hint").hint({"hintColor" : "#f00", "textColor": "#0f0"});
document.getElementById("element2hint").hint();

// jQuery usage
$("#element2hint").hint("Im a hint text using jQuery");
$(".elements2hint").hint("Im a hint text using jQuery");
$("#element2hint").hint("Im a hint text using jQuery", {"hintColor" : "#f00", "textColor": "#0f0"});

// take hint text from input title attribute
// <input type="text" title="im a hint text" class="element2hint" />
// <input type="text" title="im a hint text too" class="element2hint" />
$(".element2hint").hint();
$(".element2hint").hint({"hintColor" : "#f00", "textColor": "#0f0"});

```

## License

hintJS is released under the <a href="https://github.com/Urucas/hintJS/blob/master/LICENSE">MIT license</a>.
					

