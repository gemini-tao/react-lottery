/*
 * @Author: lifan
 * @Date: 2019-01-28 15:56:44
 * @Last Modified by: lifan
 * @Last Modified time: 2019-01-28 16:09:36
 */
import people, { IPeople } from '../../constants/people';
import { Action } from '../actions';
import types from '../types';

export default (state: IPeople[] = people, action: Action) => {
  switch (action.type) {
    case types.UPDATE_PEOPLE_LIST:
      return state.filter((item) => item.phone !== action.payload.phone);
    default: return state;
  }
};
