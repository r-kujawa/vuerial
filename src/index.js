import './css/components.css';
import clickAway from './js/directives/clickAway';
import components from './js/components';

const defaultOptions = {
	prefix: 'Vuerial',
};

const install = (Vue, options) => {
	if (install.installed) return;
	install.installed = true;

	options = {...defaultOptions, ...options};

	Vue.directive('click-away', clickAway);

	for (const property in components) {
		Vue.component(options.prefix + property, components[property]);
	}
}

const VuerialComponents = {
	install
};

export default VuerialComponents;
