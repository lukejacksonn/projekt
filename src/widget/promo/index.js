import { View } from 'orchestra';
import Template from './template.hbs';

// Import Services
import DialogService from '../../service/dialog';

// Import Widgets
import RegisterWidget from '../register';

// Define View
export default View.extend({
  tagName: 'promo-widget',
  template: Template,
  events: {
    'click svg': 'register',
  },
  register() {
    DialogService.request('show', new RegisterWidget());
  },
});
