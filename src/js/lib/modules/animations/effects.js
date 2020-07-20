import $ from '../../core';

$.prototype.animationInit = function ({
  callback,
  dur,
  fin,
}) {
  let timeStart;

  // eslint-disable-next-line no-underscore-dangle
  function _animationInit(time) {
    if (!timeStart) {
      timeStart = time;
    }
    const timeElapsed = time - timeStart;
    const complection = Math.min(timeElapsed / dur, 1);

    callback(complection);

    if (timeElapsed < dur) {
      requestAnimationFrame(_animationInit);
    } else if (typeof (fin) === 'function') {
      fin();
    }
  }
  return _animationInit;
};

$.prototype.fadeIn = function (dur, display = 'block', fin) {
  this.ForEachConstructor((i) => {
    this[i].style.display = display;

    // eslint-disable-next-line no-underscore-dangle
    const _fadeIn = (complection) => {
      this[i].style.opacity = complection;
    };

    const anim = this.animationInit({
      dur,
      callback: _fadeIn,
      fin,
    });
    requestAnimationFrame(anim);
  }, (item) => item.style);
};
$.prototype.fadeOut = function (dur, fin) {
  this.ForEachConstructor((i) => {
    // eslint-disable-next-line no-underscore-dangle
    const _fadeOut = (complection) => {
      this[i].style.opacity = 1 - complection;
      if (complection === 1) {
        this[i].style.display = 'none';
      }
    }; 

    const anim = this.animationInit({
      dur,
      callback: _fadeOut,
      fin,
    });
    requestAnimationFrame(anim);
  }, (item) => item.style);
};

