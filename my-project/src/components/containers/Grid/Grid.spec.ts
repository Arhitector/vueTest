import Component from 'vue-class-component';
import { expect } from 'chai';
import { GridContainer } from './';
import store from '../../../store/';

@Component({
  template: require('./grid.html')
})
class MockGridComponent extends GridContainer {
  constructor(props) {
    super(props);
  }

}