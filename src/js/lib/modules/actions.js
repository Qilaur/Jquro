import { call } from 'file-loader';
import $ from '../core';

$.prototype.ForEachConstructor = function (callback, filter) {
  for (let i = 0; i < this.length; i += 1) {
    if (!filter(this[i])) {
      continue;
    }
    callback(this[i]);
  }
};


// getting HTML of collection
$.prototype.html = function (content) {
  this.ForEachConstructor((item) => {
    if (content) {
      if (content.innerHTML) {
        item.innerHTML = content.outerHTML;
      } else {
        item.innerHTML = content;
      }
    } else {
      return item.innerHTML;
    }
    return this;
  },
  (item) => {
    if (item.innerHTML) {
      return true;
    }
    return false;
  });
};

// $.prototype.eq = function(property) {
//   const swap = this[i];
//   const objLength = Object.keys(this).length;

//   for (let i = 0; i < objLength; i += 1) {
//     delete this[i];
//   }
// };
