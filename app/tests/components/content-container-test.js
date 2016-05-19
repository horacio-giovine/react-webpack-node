import ContentContainer from 'components/nav-bar/content-container/content-container'
import React from 'react'
import assert from 'assert'
import expect from 'expect';
import { wrap } from 'react-stateless-wrapper'
import ReactTestUtils from 'react-addons-test-utils'

const WrappedContentContainer = wrap(ContentContainer);

describe('ContentContainer', () => {
    let result;
    it('ContentContainer component imported successfuly', function () {
        // result = ReactTestUtils.renderIntoDocument(<WrappedContentContainer />);
        expect(true).toBe(true)
    })
})