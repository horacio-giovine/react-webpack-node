import AspirationDetailRow from 'components/aspiration-detail/aspiration-detail-row/aspiration-detail-row'
import React from 'react'
import assert from 'assert'
import expect from 'expect';
import { wrap } from 'react-stateless-wrapper'
import ReactTestUtils from 'react-addons-test-utils'

const WrappedAspirationDetailRow = wrap(AspirationDetailRow);

describe('AspirationDetailRow', () => {
    let result;
    it('AspirationDetailRow component imported successfuly', function () {
        // result = ReactTestUtils.renderIntoDocument(<WrappedAspirationDetailRow />);
        expect(true).toBe(true)
    })
})
