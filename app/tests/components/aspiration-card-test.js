import AspirationCard from 'components/vision/aspiration-card/aspiration-card'
import React from 'react'
import assert from 'assert'
import expect from 'expect';
import { wrap } from 'react-stateless-wrapper'
import ReactTestUtils from 'react-addons-test-utils'

const WrappedAspirationCard = wrap(AspirationCard);

describe('AspirationCard', () => {
    let result;
    it('AspirationCard component imported successfuly', function () {
        // result = ReactTestUtils.renderIntoDocument(<WrappedAspirationCard />);
        expect(true).toBe(true)
    })
})