import { call } from 'file-loader';
import $ from '../core';

// getting HTML of collection
$.prototype.html = function (content) {
  this.ForEachConstructor((iterator) => {
    if (content) {
      if (content.innerHTML) {
        this[iterator].innerHTML = content.outerHTML;
      } else {
        this[iterator].innerHTML = content;
      }
    } else {
      return this[iterator].innerHTML;
    }
    return this;
  },
  (item) => item.innerHTML);
};

$.prototype.eq = function(property) {
  const swap = this[property];
  const objLength = Object.keys(this).length;
  for (let i = 0; i < objLength; i += 1) {
    delete this[i];
  }
  this[0] = swap;
  this.length = 1;
  console.log(this);
  return this;
};
// find index of element in the parent node
$.prototype.childIndex = function() {
  const parent = this[0].parentNode;
  const children = [...parent.children];

  const findMyIndex = (item) => {
    return item === this[0];
  };
  return children.findIndex(findMyIndex);
};

$.prototype.find = function(selector) {
  let correctItemsCount = 0;
  const copiedObj = Object.assign({}, this);

  for (let i = 0; i < copiedObj.length; i += 1) {
    const arr = copiedObj[i].querySelectorAll(selector);
    if (arr.length === 0) {
      continue;
    }

    for (let j = 0; j < arr.length; j += 1) {
      this[j] = arr[j];
    }
    correctItemsCount += arr.length;
  }
  this.length = correctItemsCount;

  const objLength = Object.keys(this).length;
  for (;correctItemsCount < objLength; correctItemsCount += 1) {
    delete this[correctItemsCount];
  }

  return this;
};

$.prototype.closest = function(selector) {
  let counter = 0;

  for (let i = 0; i < this.length; i++) {
    if (this[i].closest(selector) !== null) {
      this[counter] = this[i].closest(selector);
      counter++;
    } else {
      delete this[i];
    }
  }
  this.length = counter;
  const objLength = Object.keys(this).length;
  for (;counter < objLength; counter += 1) {
    delete this[counter];
  }

  return this;
};

$.prototype.neighbours = function() {
  this.ForEachConstructor((i) => {
    const parent = this[i].parentNode;
    const children = [...parent.children];
    const currentIndex = children.indexOf(this[i]);
    children.splice(currentIndex, 1);
    if (this.length <= 1) {
      delete this[0];
      Object.assign(this, [...children]);
    } else {
      this[i] = children;
    }
  }, (item) => item.parentNode);
  return this;
};
