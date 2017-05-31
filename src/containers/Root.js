import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../configureStore';
import Board from '../components/Board';

export const store = configureStore();

const Root = () => (
    <Provider store={store}>
        <div>
            <Board />
        </div>
    </Provider>
);
export default Root;
