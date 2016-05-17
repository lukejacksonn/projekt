import { View } from 'orchestra';
import Template from './template.hbs';

export default View.extend({
  tagName: 'filter-',
  template: Template,
  events: {
    'click button[data-filter]': 'requestFilterBy',
    'click button[data-sort]': 'requestSortBy',
    'click button[data-reset]': 'requestRemoveFilter',
  },
  requestFilterBy(e) {
    this.triggerMethod('filterBy',
      e.currentTarget.dataset.filter);
  },
  requestSortBy(e) {
    this.triggerMethod('sortBy',
      e.currentTarget.dataset.sort);
  },
  requestRemoveFilter() {
    this.triggerMethod('removeFilter');
  },
});
