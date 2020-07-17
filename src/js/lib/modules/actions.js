import $ from '../core';
import { call } from 'file-loader';

$.prototype.on = function(eventName, callbackFunc) {
  for (let i = 0; i < this.length; i += 1) {
    if (!this[i].addEventListener || !eventName || !callbackFunc) {
      return this;
    }
    this[i].addEventListener(eventName, callbackFunc);
  }
  return this;
};

$.prototype.off = function(eventName, callbackFunc) {
  for (let i = 0; i < this.length; i += 1) {
    if (!this[i].removeEventListener || !eventName || !callbackFunc) {
      return this;
    }
    this[i].removeEventListener(eventName, callbackFunc);
  }
  return this;
};

$.prototype.click = function(callbackFunc) {
  for (let i = 0; i < this.length; i += 1) {
    if (!this[i].click || !this[i].addEventListener) {
      return this;
    }
    if (callbackFunc) {
      this[i].addEventListener('click', callbackFunc);
    } else {
      this[i].click();
    }
  }
  return this;
};
