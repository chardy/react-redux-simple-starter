/* An example of how to setup reducers for your post model.
 * working with the demo action creators for post model.
 * utilizing promise middleware.
 */
import * as types from '../constants/post';

export default function posts(state = {}, action) {
  switch (action.type) {
    case `${types.GET_POST}_PENDING`: return {};

    case `${types.GET_POST}_FULFILLED`:
      return {
        isFulfilled: true,
        data: action.payload
      };

    case `${types.GET_POST}_REJECTED`:
      return {
        isRejected: true,
        error: action.payload
      };

    default: return state;
  }
}
