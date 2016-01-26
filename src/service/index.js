import Orchestra from 'orchestra';
const Service =
Orchestra.Service.extend({
	setup() {},
	requests: {
		'login': 'login',
	},
	login(details) {
		alert(details);
	}
});

module.exports = new Service();