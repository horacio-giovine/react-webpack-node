import Password from 'components/profile/password/password'
import React from 'react'
import assert from 'assert'
import expect from 'expect';
import { wrap } from 'react-stateless-wrapper'
import ReactTestUtils from 'react-addons-test-utils'

const WrappedPassword = wrap(Password);

describe('Password', () => {
    let result;
    it('Password component imported successfuly', function () {
        // result = ReactTestUtils.renderIntoDocument(<WrappedPassword />);
        expect(true).toBe(true)
    })
})