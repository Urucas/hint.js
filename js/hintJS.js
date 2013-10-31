/**
* @copyright Urucas
* @license   MIT License
* @version   Release: 1.0.0
* @link       http://urucas.com
* @developers Bruno Alassia, Pamela Prosperi
*/

// input[type="text"] hint extension
Element.prototype.hint = function(hintString, hintConfig) {

	if(!(this instanceof HTMLInputElement && this.getAttribute("type") == "text")) {
		return;
	}

	hintConfig = hintConfig || { hintColor: "#b6b6b6", textColor: "#000000" };

	this.value = hintString;
	this.style.color = hintConfig.hintColor; 
	this.onfocus = function() {
		if(this.value == hintString) {
			this.value = "";
			this.style.color = hintConfig.textColor;
		}
	}
	this.onblur = function() {
		if(this.value == "") {
			this.value = hintString;
			this.style.color = hintConfig.hintColor;
		}
	}
};

// jQuery extension
try {
	jQuery.fn.hint = function(hintString, hintConfig) {
		for(var i=0; i<this.length;i++) {
			var el = this[i];
			el.hint(hintString, hintConfig);
		}
		return this;
	}
}catch(e) {}

