import $ from '../core';

$.prototype.setAttr = function (attrName, attrValue) {
  for (let i = 0; i < this.length; i += 1) {
    if (!this[i].setAttribute) {
      continue;
    }
    if (!attrName) {
      console.error('Attribute name is undefined');
      return this;
    }
    if (Array.isArray(attrName)) {
      attrName.forEach((item) => {
        this[i].setAttribute(item, attrValue);
      });
    } else if (attrValue) {
      this[i].setAttribute(attrName, attrValue);
    } else {
      this[i].setAttribute(attrName, '');
    }
  }
  return this;
};

$.prototype.removeAttr = function (attrName) {
  for (let i = 0; i < this.length; i += 1) {
    if (!this[i].removeAttribute) {
      continue;
    }
    if (!attrName) {
      console.error('Attribute name is undefined');
      return this;
    }
    if (Array.isArray(attrName)) {
      attrName.forEach((item) => {
        this[i].removeAttribute(item);
      });
    } else {
      this[i].removeAttribute(attrName);
    }
  }
  return this;
};
