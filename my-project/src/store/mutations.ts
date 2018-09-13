import Vue from 'vue';
import {MutationTree} from 'vuex';
import {MutationTypes} from './mutation-types';
import {State} from './state';

const mutations: MutationTree<State> = {
  [MutationTypes.GET_GRID]: (state: State, {items}) => {
    state.grid = items;
  }
};

export default mutations;
