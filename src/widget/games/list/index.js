import { CollectionView, Collection } from 'orchestra';

import Item from '../item';

const games = [
  { name: 'will', age: 26 },
  { name: 'luke', age: 27 },
  { name: 'luke', age: 26 },
  { name: 'carl', age: 26 },
  { name: 'yousef', age: 27 },
  { name: 'joe', age: 25 },
];

export default CollectionView.extend({
  tagName: 'list-',
  childView: Item,
  reorderOnSort: true,
  initialize() {
    this.collection = new Collection(games);
  },
  filterBy(options) {
    this.setFilter(child =>
      child.get(options.key) === options.val);
  },
  sortBy(options) {
    this.collection.comparator = (item) => item.get(options.key);
    this.collection.sort();
  },
});
