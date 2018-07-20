import ToggleDropDown from './toggle-dropdown';
import InputMask from './input-mask/index';
import clickOutside from './click-outside';
import VueEqualHeight from './equal-height';

export default function install(Vue) {
    Vue.directive('toggle-dropdown', ToggleDropDown);
    Vue.directive('input-mask', InputMask);
    Vue.directive('click-outside', clickOutside);
    Vue.directive('equal-height', VueEqualHeight);
}