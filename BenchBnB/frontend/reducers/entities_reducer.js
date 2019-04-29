import combineReducers from 'redux';
import usersReducers from './users_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
});

export default entitiesReducer;