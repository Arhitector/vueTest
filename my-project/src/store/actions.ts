import {ActionTree} from 'vuex';
import {MutationTypes} from './mutation-types';
import {State} from './state';
import * as listAPI from '../api/listItems';

const actions: ActionTree<State, State> = {
  [MutationTypes.INCREMENT_VALUE]: ({commit}) => {
    commit(MutationTypes.INCREMENT_VALUE);
  },
  [MutationTypes.DECREMENT_VALUE]: ({commit}) => {
    commit(MutationTypes.DECREMENT_VALUE);
  },
  [MutationTypes.RESET_VALUE]: ({commit}) => {
    commit(MutationTypes.RESET_VALUE);
  },
  [MutationTypes.GET_GRID]: ({commit}) => {
    console.log(listAPI.getAllList);
    listAPI.getAllList(items => {
      commit(MutationTypes.GET_GRID, {
        items
      });
    });
  },
};

export default actions;
