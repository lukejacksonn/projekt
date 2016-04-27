import {View} from 'orchestra';
import Template from './template.hbs';

import Filter from './filter';
import List from './list';

export default View.extend({
  tagName: 'games-widget',
  template: Template,
  regions: {
    'filter': 'filter-',
    'list': 'list-',
  },
  childViewEvents: {
    filterBy: 'filterListBy',
    sortBy: 'sortListBy',
    removeFilter: 'removeListFilter',
  },
  onAttach() {
    this.showChildView('filter', new Filter(), { replaceElement: true });
    this.showChildView('list', new List(), { replaceElement: true });
  },
  removeListFilter() {
    this.getRegion('list').currentView
      .removeFilter();
  },
  filterListBy(options = {}) {
    this.getRegion('list').currentView
      .filterBy(JSON.parse(options));
  },
  sortListBy(options = {}) {
    this.getRegion('list').currentView
      .sortBy(JSON.parse(options));
  },
});
