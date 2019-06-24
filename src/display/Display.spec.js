// Test away!
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
//import renderer from 'react-test-renderer'; // 1: install this npm module as a dev dependency

import Display from './Display';





//checks default Gate value
describe('<Display', () => {
    describe('Display content', () => {
        it('renders unlocked and open', () => {
            const { getByText } = render(<Display />)
            getByText(/unlocked/i)
            getByText(/open/i)
        })
    })

    
    
})