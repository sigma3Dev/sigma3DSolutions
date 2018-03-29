import thunkMiddleware from 'redux-thunk';
import { applyMiddleware, createStore, compose } from 'redux';
import rootReducer from '../reducers/rootReducer';

/**
 * Create the store and adds some middleware.
 *
 * @param preloadedState
 * @returns {*}
 */
export default function configureStore(preloadedState) {
  const logger = () => next => (action) => {
    // write to browser console
    console.info('action fired', action);
    // dispatch next action
    next(action);
  };

  const error = () => next => (action) => {
    try {
      // dispatch action if there is no error
      next(action);
    } catch (e) {
      // write to browser console
      console.error('error', e);
      throw e;
    }
  };

  const store = createStore(
    rootReducer,
    preloadedState,
    compose(
      applyMiddleware(
        thunkMiddleware,
        logger,
        error,
      ),
      window.devToolsExtension ? window.devToolsExtension() : f => f, // for debugging in a browser
    ),
  );

  return store;
}
