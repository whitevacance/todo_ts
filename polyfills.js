/* eslint-disable */
// 바벨 기본 폴리필
import 'core-js/stable';
import 'regenerator-runtime/runtime';
// import '@webcomponents/webcomponentsjs/webcomponents-bundle.js';

// "node_modules/@webcomponents/webcomponentsjs/webcomponents-bundle.js"

// Intersection Observer 폴리필
import 'intersection-observer';

// matches 폴리필
if (!Element.prototype.matches) {
  Element.prototype.matches =
    Element.prototype.matchesSelector ||
    Element.prototype.mozMatchesSelector ||
    Element.prototype.msMatchesSelector ||
    Element.prototype.oMatchesSelector ||
    Element.prototype.webkitMatchesSelector ||
    function (s) {
      var matches = (this.document || this.ownerDocument).querySelectorAll(s),
        i = matches.length;
      while (--i >= 0 && matches.item(i) !== this) {}
      return i > -1;
    };
}

// FILE
let File = window.File;

try {
  new File([], '');
} catch (e) {
  window.File = class File extends Blob {
    constructor(chunks, filename, opts = {}) {
      super(chunks, opts);
      this.lastModifiedDate = new Date();
      this.lastModified = this.lastModifiedDate;
      this.name = filename;
    }
  };
}
