import $ from '../core';

$.prototype.addClass = function(...classes) {
  for (let i = 0; i < this.length; i += 1) {
    this[i].classList.add(...classes);
  }
  return this;
};

$.prototype.delClass = function(...classes) {
  for (let i = 0; i < this.length; i += 1) {
    if (!this[i].classList) {
      continue;
    }
    this[i].classList.remove(...classes);
  }
  return this;
};

$.prototype.toggleClass = function(UserClass) {
  for (let i = 0; i < this.length; i += 1) {
    if (!this[i].classList) {
      continue;
    }
    this[i].classList.toggle(UserClass);
  }
  return this;
};

$.prototype.hasClass = function(UserClass) {
  let classExist = false;
  for (let i = 0; i < this.length; i += 1) {
    if (!this[i].classList) {
      continue;
    }
    if (this[i].classList.contains(UserClass)) {
      classExist = true;
    }
  }
  return classExist;
};
