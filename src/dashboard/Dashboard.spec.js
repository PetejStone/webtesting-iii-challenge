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
             //find lock gate button and close gate
             const lockGate = getByText(/^lock gate$/i)
             const close = getByText(/^close gate$/i)
            
    

            //click lock gate (deactivatd)
            fireEvent.click(lockGate)

            //lockgate button should be deativated
            expect(getByText(/open/i)).toBeTruthy
            expect(getByText(/lock gate/i)).toBeTruthy
            expect(getByText(/close gate/i)).toBeTruthy

            //click close
            fireEvent.click(close)

            //what happens when close is clicked
            expect(getByText(/closed/i)).toBeTruthy
            expect(getByText(/lock gate/i)).toBeTruthy
            expect(getByText(/open gate/i)).toBeTruthy
        })

        it('should test LOCK GATE button', () => { 
            const { getByText, getAllByText, queryByText } = render(<Dashboard />)
            const lockGate = getByText(/^lock gate$/i)
            const close = getByText(/^close gate$/i)
            //lock gate should now be deactivated
             

            //click lock gate button should now toggle closed/open and locked/unlocked
            fireEvent.click(close)
            fireEvent.click(lockGate)


             //what happens when lock gate is clicked -- toggle per above
             expect(getByText(/closed/i)).toBeTruthy
             expect(getByText(/unlock gate/i)).toBeTruthy
             expect(getByText(/open gate/i)).toBeTruthy
             expect(getByText(/locked/i)).toBeTruthy
            })

        it('should test OPEN GATE button', () => {
            const { getByText, getAllByText, queryByText } = render(<Dashboard />)
            const close = getByText(/^close gate$/i)
           

          
            

            //click close gate gate
            fireEvent.click(close)

            //open gate now available
            const openGate = getByText(/^open gate$/i)
           
            //click open gate
            fireEvent.click(openGate)

            //nothing should change as it is deactivated
            expect(getByText(/open/i)).toBeTruthy
            expect(getByText(/close gate/i)).toBeTruthy
            expect(getByText(/lock gate/i)).toBeTruthy
            expect(getByText(/^unlocked$/i)).toBeTruthy

        })

        // it('should test unlock gate button', () => {
        //     const { getByText, getAllByText, queryByText } = render(<Dashboard />)
        
        //      //find unlock gate button
        //     const unlockGate = getByText(/^unlock gate$/i)

        //     //click button
        //     fireEvent.click(unlockGate)

        //     //what happens when unlock gate is clicked -- reverse locked and make open gate available
        //     expect(getByText(/closed/i)).toBeTruthy
        //     expect(getByText(/lock gate/i)).toBeTruthy
        //     expect(getByText(/open gate/i)).toBeTruthy
        //     expect(getByText(/locked/i)).toBeTruthy

        // })

         
        
        
    })
    
})