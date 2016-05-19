import Tabs from 'components/tab/tabs'
import Pane from 'components/tab/pane'
import React from 'react'
import assert from 'assert'
import expect from 'expect';
import { wrap } from 'react-stateless-wrapper'
import ReactTestUtils from 'react-addons-test-utils'

const WrappedTabs = wrap(Tabs);

describe('Tabs', () => {
    let result;
    it('Tabs component imported successfuly', function () {
        // result = ReactTestUtils.renderIntoDocument(<WrappedTabs />);
        expect(true).toBe(true)
    })
})
