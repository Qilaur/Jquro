import $ from '../core';

const validateElements = (element, firstValid, secondValid, thirdValid) => {
  if (!element[firstValid]) {
    continue;
  } else if (!element[firstValid][secondValid] ) {
    continue;
  } else if (!element[firstValid][secondValid][thirdValid] ) {
    continue;
  }
}
$.prototype.dBlock = function() {
  for (let i = 0; i < this.length; i += 1) {
    validateElements(this[i], 'style', 'display');
    this[i].style.display = 'block';
  }
  return this;
};

$.prototype.dFlex = function() {
  for (let i = 0; i < this.length; i += 1) {
    if (!this[i].style.display) {
      continue;
    }
    this[i].style.display = 'flex';
  }
  return this;
};

$.prototype.dInlineBlock = function() {
  for (let i = 0; i < this.length; i += 1) {
    if (!this[i].style.display) {
      continue;
    }
    this[i].style.display = 'inline-block';
  }
  return this;
};

$.prototype.dInline = function() {
  for (let i = 0; i < this.length; i += 1) {
    if (!this[i].style.display) {
      continue;
    }
    this[i].style.display = 'inline';
  }
  return this;
};

$.prototype.dNone = function() {
  for (let i = 0; i < this.length; i += 1) {
    if (!this[i].style.display) {
      continue;
    }
    this[i].style.display = 'none';
  }
  return this;
};

$.prototype.dReset = function() {
  for (let i = 0; i < this.length; i += 1) {
    if (!this[i].style.display) {
      continue;
    }
    this[i].style.display = '';
  }
  return this;
};

$.prototype.dToggle = function() {
  for (let i = 0; i < this.length; i += 1) {
    if (!this[i].style.display) {
      continue;
    }

    if (this[i].style.display === 'none') {
      this[i].style.display = ''; // reboot display
      console.log(this[i].style.display);
      if (window.getComputedStyle(this[i]).display === 'none') {
        this[i].style.display = 'block'; // if display was none toggle it to block
      }
    } else {
      this[i].style.display = 'none';
    }
  }

  return this;
};
