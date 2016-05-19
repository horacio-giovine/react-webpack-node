import Button from 'components/nav-bar/button/button'
import React from 'react'
import assert from 'assert'
import expect from 'expect';
import { wrap } from 'react-stateless-wrapper'
import ReactTestUtils from 'react-addons-test-utils'

const WrappedButton = wrap(Button);

describe('Button', () => {
    let result;
    it('Button component imported successfuly', function () {
        // result = ReactTestUtils.renderIntoDocument(<WrappedButton />);
        expect(true).toBe(true)
    })
})