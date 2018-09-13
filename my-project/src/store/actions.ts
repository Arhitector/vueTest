import {ActionTree} from 'vuex';
import {MutationTypes} from './mutation-types';
import {State} from './state';
import * as listAPI from '../api/listItems';

const actions: ActionTree<State, State> = {
  [MutationTypes.GET_GRID]: ({commit, state}, {grid}) => {
    const items = listAPI.getAllList(grid);
    commit(MutationTypes.GET_GRID, {
      items,
    });
  },
};

export default actions;
