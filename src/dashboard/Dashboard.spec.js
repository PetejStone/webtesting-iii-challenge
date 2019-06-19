// Test away
// Test away!
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';
//import renderer from 'react-test-renderer'; // 1: install this npm module as a dev dependency
import 'jest-dom/extend-expect'

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
            const { getByText,getByTestId } = render(<Dashboard />)
             //find lock gate button and close gate
             const lockGate = getByText(/^lock gate$/i)
             const close = getByText(/^close gate$/i)
            
    

            //lock gate should be disabled

            expect(lockGate).toBeDisabled()

          
            //click close
            fireEvent.click(close)

            //what happens when close is clicked
            expect(getByText(/closed/i)).toBeTruthy
            expect(getByText(/lock gate/i)).toBeTruthy
            expect(getByText(/open gate/i)).toBeTruthy

            // const container = document.body
            // const openClose = getByTestId(container, 'Open')
            // //const close = getByTestId("openClose");

            // tests for red class
           const openClose = getByTestId("openClose")

           expect(openClose).toHaveClass("red-led");

            //tests for green class for unlocked

            const toggleLock = getByTestId("toggleLock")
            expect(toggleLock).toHaveClass("green-led");
        })

        it('should test LOCK GATE button', () => { 
            const { getByText, getByTestId } = render(<Dashboard />)
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

             //tests for red class for unlocked

            const toggleLock = getByTestId("toggleLock")
            expect(toggleLock).toHaveClass("red-led");

            //tests for red class for closed

            const openClose = getByTestId("openClose")
            expect(openClose).toHaveClass("red-led");

             //open gate button now visible but disabled
             const openGate = getByText(/^open gate$/i)

             expect(openGate).toBeDisabled()
           
          
            })

        it('should test OPEN GATE button', () => {
            const { getByText, getByTestId } = render(<Dashboard />)
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

            //tests for green class for unlocked

            const openClose= getByTestId("openClose")
            expect(openClose).toHaveClass("green-led");

             //lock gate now visible 
             const lockGate = getByText(/^lock gate$/i)

             expect(lockGate).toBeDisabled()
            

          

        })

        it('should test UNLOCK GATE button', () => {
            const { getByText, getByTestId} = render(<Dashboard />)
            const close = getByText(/^close gate$/i)
            //click close gate first to activate lock gate
            fireEvent.click(close)

            //lock gate now available
            const lockGate = getByText(/^lock gate$/i)

            //click lock gate to activate unlock gate
            fireEvent.click(lockGate)

             //find unlock gate buttton as it is now available
            const unlockGate = getByText(/^unlock gate$/i)

            //click unlock gate
            fireEvent.click(unlockGate)

            //what happens when unlock gate is clicked -- reverse locked and make open gate available
            expect(getByText(/^closed$/i)).toBeTruthy
            expect(getByText(/lock gate/i)).toBeTruthy
            expect(getByText(/open gate/i)).toBeTruthy
            expect(getByText(/^unlocked$/i)).toBeTruthy

             // tests for red class for closed
           const openClose = getByTestId("openClose")
           expect(openClose).toHaveClass("red-led");

           //tests for green class for unlocked

           const toggleLock = getByTestId("toggleLock")
           expect(openClose).toHaveClass("red-led");
           expect(toggleLock).toHaveClass("green-led");
        })

    })
    
})