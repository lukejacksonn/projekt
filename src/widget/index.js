import Orchestra from 'orchestra';
import Template from './template.hbs';
import Service from '../service';

export default Orchestra.LayoutView.extend({
	tagName: 'login-widget',
	template: Template,
	events: {
		'submit form': 'login'
	},
	login(e) {
		e.preventDefault();
		Service.request('login', { a: 1 });
	}
});