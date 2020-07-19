/* eslint-disable no-undef */
import '../assets/css/styles.scss';
import $ from './lib/libMain';

/// TESTS ///

const action = function () {
  console.log(this, 'LOX');
};
console.log($('.main-block').closest('.test').addClass('active'));
