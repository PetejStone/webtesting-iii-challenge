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
            
    

            //click lock gate (deactivated)
            fireEvent.click(lockGate)

            //lockgate button should be deativated so nothing changes
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
             

            //close button must be clicked first to activate lock gate
            fireEvent.click(close)

            //click lock gate
            fireEvent.click(lockGate)


             //what happens when lock gate is clicked -- toggle per above
             expect(getByText(/closed/i)).toBeTruthy
             expect(getByText(/unlock gate/i)).toBeTruthy
             expect(getByText(/open gate/i)).toBeTruthy
             expect(getByText(/locked/i)).toBeTruthy

             //open gate button now visible but disabled
             const openGate = getByText(/^open gate$/i)

            
            // what happens when user "clicks", or tries to click open
             fireEvent.click(openGate)

             //nothing changes from last update when clicked because it is disabled
             expect(getByText(/closed/i)).toBeTruthy
             expect(getByText(/unlock gate/i)).toBeTruthy
             expect(getByText(/open gate/i)).toBeTruthy
             expect(getByText(/locked/i)).toBeTruthy
            })

        it('should test OPEN GATE button', () => {
            const { getByText, getAllByText, queryByText } = render(<Dashboard />)
            const close = getByText(/^close gate$/i)
           

          
            

            //click close gate gate first to activate open gate
            fireEvent.click(close)

            //open gate now available
            const openGate = getByText(/^open gate$/i)
           
            //click open gate
            fireEvent.click(openGate)

            //what happens when open gate is clicekd
            expect(getByText(/open/i)).toBeTruthy
            expect(getByText(/close gate/i)).toBeTruthy
            expect(getByText(/lock gate/i)).toBeTruthy
            expect(getByText(/^unlocked$/i)).toBeTruthy

             //lock gate now visible 
             const lockGate = getByText(/^lock gate$/i)

             //user tries to click lockgate
            fireEvent.click(lockGate)

            //nothing changes from last update since lock gate is disabled
            expect(getByText(/open/i)).toBeTruthy
            expect(getByText(/close gate/i)).toBeTruthy
            expect(getByText(/lock gate/i)).toBeTruthy
            expect(getByText(/^unlocked$/i)).toBeTruthy

        })

        it('should test UNLOCK GATE button', () => {
            const { getByText, getAllByText, queryByText } = render(<Dashboard />)
            const close = getByText(/^close gate$/i)
            //click close gate first to activate lock gate
            fireEvent.click(close)

            //lock gate now available
            const lockGate = getByText(/^lock gate$/i)

            //click lock gate to activate unlock gate
            fireEvent.click(lockGate)

             //find unlock gate buttton as it is now available
            const unlockGate = getByText(/^unlock gate$/i)

            //click ulock gate
            fireEvent.click(unlockGate)

            //what happens when unlock gate is clicked -- reverse locked and make open gate available
            expect(getByText(/^closed$/i)).toBeTruthy
            expect(getByText(/lock gate/i)).toBeTruthy
            expect(getByText(/open gate/i)).toBeTruthy
            expect(getByText(/^unlocked$/i)).toBeTruthy

        })

    })
    
})