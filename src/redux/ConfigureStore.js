import { createStore, applyMiddleware } from 'redux';
import reducer, { fetchApiData } from './reducer';

const Store = createStore(reducer, applyMiddleware(fetchApiData));

export default Store;
