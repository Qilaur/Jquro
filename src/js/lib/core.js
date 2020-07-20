const $ = function (selector) {
  return new $.prototype.Init(selector); // return new object with new prototype
};

$.prototype.Init = function (selector) {
  if (!selector) {
    return this; // return {}
  }
  if (selector.tagName) {
    this[0] = selector;
    this.length = 1;
    return this;
  }
  Object.assign(this, document.querySelectorAll(selector));

  this.length = document.querySelectorAll(selector).length;

  return this;
};

$.prototype.Init.prototype = $.prototype; // bind object prototype to construcor prototype

window.$ = $;

$.prototype.ForEachConstructor = function (callback, filter) {
  for (let i = 0; i < this.length; i += 1) {
    if (!filter(this[i])) {
      continue;
    }
    callback(i);
  }
};

export default $;
