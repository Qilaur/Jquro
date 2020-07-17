/* eslint-disable no-undef */
import '../assets/css/styles.scss';
import './lib/libMain';
import $ from './lib/libMain';

const action = function() {
  console.log(this, 'LOX');
};

$('div').setAttr(['data-url', 'data-src'], 'https://hello.com');
