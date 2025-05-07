import { createStore as create } from 'redux';
import rootReducer from '../reducers/rootReducer';

const createStore = () => {
  const store = create(
    rootReducer
  )
  return store;
}

export default  createStore()