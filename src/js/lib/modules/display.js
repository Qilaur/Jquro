import $ from '../core';
import displayTypes from '../types/displayTypes';

$.prototype.d = function (type) {
  const searchElement = type.toLowerCase().replace(' ', '');

  for (let i = 0; i < this.length; i += 1) {
    if (displayTypes.indexOf(searchElement) !== -1) {
      if (this[i].style) {
        // this[i].style.display = type === '' ? 'initial' : type;
        this[i].style.display = type;
      }
    } else {
      throw new ReferenceError('incorrect display value');
    }
  }
  return this;
};

$.prototype.dToggle = function () {
  for (let i = 0; i < this.length; i += 1) {
    if (!this[i].style) {
      continue;
    }

    if (this[i].style.display === 'none') {
      this[i].style.display = ''; // reboot display
      if (window.getComputedStyle(this[i]).display === 'none') {
        this[i].style.display = 'block'; // if display was none toggle it to block
      }
    } else {
      this[i].style.display = 'none';
    }
  }

  return this;
};
