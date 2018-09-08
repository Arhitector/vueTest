import Vue from 'vue';
import {MutationTree} from 'vuex';
import {MutationTypes} from './mutation-types';
import {State} from './state';

const mutations: MutationTree<State> = {
  [MutationTypes.INCREMENT_VALUE]: (state: State) => {
    state.count += 1;
  },
  [MutationTypes.DECREMENT_VALUE]: (state: State) => {
    state.count -= 1;
  },
  [MutationTypes.RESET_VALUE]: (state: State) => {
    state.count = 0;
  },

  // [MutationTypes.GET_LIST]: (state: State, {items}) => {
  //   if (!state.list.length) {
  //     items.forEach(items => {
  //       state.list.push({
  //         id: items.id,
  //         name: items.name,
  //       });
  //     });
  //   }
  // },
  [MutationTypes.GET_GRID]: (state: State, {items}) => {
    if (!state.grid.length) {
      items.forEach(items => {
        state.grid.push({
          x: items.x,
          y: items.y,
          isActive: items.active,
        });
      });
    }
  }
};

export default mutations;
