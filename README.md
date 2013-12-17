hintJS
======

A simple javacript hint extension for HTMLInputElement["text"] elements

## Demo
<a href="http://urucas.github.io/hint.js/">http://urucas.github.io/hint.js/</a>.

Usage
=====
hintJS is a DOM extension but it also provides a jQuery extension

``` javascript
document.getElementById("element2hint").hint("Im a hint text");
document.getElementById("element2hint").hint("Im a hint text", {"hintColor" : "#f00", "textColor": "#0f0"});

document.getElementsByClassName("elements2hint").hint("Im a hint text", {"hintColor" : "#f00", "textColor": "#0f0"});

// jQuery usage
$("#element2hint").hint("Im a hint text using jQuery");
$(".elements2hint").hint("Im a hint text using jQuery");
$("#element2hint").hint("Im a hint text using jQuery", {"hintColor" : "#f00", "textColor": "#0f0"});

```

## License

hintJS is released under the <a href="https://github.com/Urucas/hintJS/blob/master/LICENSE">MIT license</a>.
					

