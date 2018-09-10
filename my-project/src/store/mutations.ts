import Vue from 'vue';
import {MutationTree} from 'vuex';
import {MutationTypes} from './mutation-types';
import {State} from './state';

const mutations: MutationTree<State> = {
  [MutationTypes.GET_GRID]: (state: State, {items}) => {
    if (!state.grid.length) {
      state.grid = items;
      // items.forEach(items => {
      //   state.grid.push({
      //     x: items.x,
      //     y: items.y,
      //     isActive: items.active,
      //   });
      // });
    }
  }
};

export default mutations;
