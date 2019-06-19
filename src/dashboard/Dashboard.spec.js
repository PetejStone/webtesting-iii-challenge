// Test away
// Test away!
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';
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

    describe('button behavior', () => {
        it('toggle locked and open status for CLOSE GATE', () => {
            const { getByText, getAllByText, queryByText } = render(<Dashboard />)
            
            //find lock gate button
            const lockGate = getByText(/^lock gate$/i)

            //click button
            fireEvent.click(lockGate)

            //what happens when lock gate is clicked -- (nothing changes)
            expect(getByText(/open/i)).toBeTruthy
            expect(getByText(/lock gate/i)).toBeTruthy
            expect(getByText(/close gate/i)).toBeTruthy


            

            //find close button
            const close = getByText(/^close gate$/i)

            //click button
            fireEvent.click(close)


            //what happens when close is clicked
            expect(getByText(/closed/i)).toBeTruthy
            expect(getByText(/lock gate/i)).toBeTruthy
            expect(getByText(/open gate/i)).toBeTruthy

            //lock gate should now be deactivated
             

            //click lock gate button should now toggle closed/open and locked/unlocked
            fireEvent.click(lockGate)
            

             //what happens when lock gate is clicked -- toggle per above
             expect(getByText(/closed/i)).toBeTruthy
             expect(getByText(/unlock gate/i)).toBeTruthy
             expect(getByText(/open gate/i)).toBeTruthy
             expect(getByText(/locked/i)).toBeTruthy

        })
    })
    
})