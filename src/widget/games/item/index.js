import {View} from 'orchestra';
import Template from './template.hbs';

export default View.extend({
  tagName: 'item-',
  template: Template,
});
