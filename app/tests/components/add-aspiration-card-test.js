import AddAspirationCard from 'components/vision/add-aspiration-card/add-aspiration-card'
import React from 'react'
import assert from 'assert'
import expect from 'expect';
import { wrap } from 'react-stateless-wrapper'
import ReactTestUtils from 'react-addons-test-utils'

const WrappedAddAspirationCard = wrap(AddAspirationCard);

describe('AddAspirationCard', () => {
    let result;
    it('AddAspirationCard component imported successfuly', function () {
        // result = ReactTestUtils.renderIntoDocument(<WrappedAddAspirationCard />);
        expect(true).toBe(true)
    })
})