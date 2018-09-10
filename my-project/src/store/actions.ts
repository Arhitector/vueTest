import {ActionTree} from 'vuex';
import {MutationTypes} from './mutation-types';
import {State} from './state';
import * as listAPI from '../api/listItems';

const actions: ActionTree<State, State> = {
  [MutationTypes.GET_GRID]: ({commit}) => {
    listAPI.getAllList(items => {
      commit(MutationTypes.GET_GRID, {
        items
      });
    });
  },
};

export default actions;
