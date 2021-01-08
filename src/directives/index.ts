/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import Vue from 'vue';

interface OuterClickableElement extends HTMLElement {
  __clickHandler__?: (event: Event) => void;
}

Vue.directive('outer-click', {
  bind(el: OuterClickableElement, binding) {
    el.__clickHandler__ = (event: Event) => {
      if (!(el === event.target) && !(el.contains(event.target as Node))) {
        binding.value(event);
      }
    };
    document.addEventListener('click', el.__clickHandler__);
  },
  unbind(el: OuterClickableElement) {
    document.removeEventListener('click', el.__clickHandler__!);
  },
});
