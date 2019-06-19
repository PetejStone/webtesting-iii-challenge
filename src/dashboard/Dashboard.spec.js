// Test away
// Test away!
import React from 'react';
import { render } from '@testing-library/react';
//import renderer from 'react-test-renderer'; // 1: install this npm module as a dev dependency

import Dashboard from './Dashboard';


//checks dashboard display
describe('<Dashboard>', () => {
    describe('Dashboard content', () => {
        it('renders controls and display', () => {
            const { getByText } = render(<Dashboard />)
            getByText(/unlocked/i)
            getByText(/open/i)
            getByText(/lock gate/i)
            getByText(/close gate/i)
        })
    })
    
})