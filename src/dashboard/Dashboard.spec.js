// Test away
// Test away!
import React from 'react';
import { render } from '@testing-library/react';
//import renderer from 'react-test-renderer'; // 1: install this npm module as a dev dependency

import Dashboard from './Dashboard';


describe('<Display>', () => {
    it('runs test', () => {
        expect(true).toBe(true)
    })


  it('matches snapshot', () => {
      const { snapshot } = render(<Dashboard />)
      expect(snapshot).toMatchSnapshot()
  })
})