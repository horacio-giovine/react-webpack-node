import Pane from 'components/tab/pane'
import React from 'react'
import assert from 'assert'
import expect from 'expect';
import { wrap } from 'react-stateless-wrapper'
import ReactTestUtils from 'react-addons-test-utils'

const WrappedPane = wrap(Pane);

describe('Pane', () => {
    let result;
    it('Pane component imported successfuly', function () {
        // result = ReactTestUtils.renderIntoDocument(<WrappedPane />);
        expect(true).toBe(true)
    })
})