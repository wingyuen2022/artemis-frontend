import { screen } from '@testing-library/react';
import App from '../App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../__store/store'

describe('App', () => {
    test('landing on a Home page', () => {
        render(
            <Provider store={store}>
                <Router>
                    <App />
                </Router>
            </Provider>
        );

        expect(screen.getByText(/Read Herring/i)).toBeInTheDocument();
    });
  });