import Vue from 'vue';
import Component from 'vue-class-component';
import {MutationTypes} from '../../../store/mutation-types';
import {State} from '../../../store/state';

@Component({
  template: require('./grid.html')
})
export class GridContainer extends Vue {
  mounted() {
    this.$store.dispatch(MutationTypes.GET_GRID);
    console.log(this.$store.state.grid);
  }

  get grdiItem() {
    return this.$store.state.grid;
  }
}
