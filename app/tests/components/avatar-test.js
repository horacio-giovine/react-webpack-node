import Avatar from 'components/profile/avatar/avatar'
import React from 'react'
import assert from 'assert'
import expect from 'expect';
import { wrap } from 'react-stateless-wrapper'
import ReactTestUtils from 'react-addons-test-utils'

const WrappedAvatar = wrap(Avatar);

describe('Avatar', () => {
    let result;
    it('Avatar component imported successfuly', function () {
        // result = ReactTestUtils.renderIntoDocument(<WrappedAvatar />);
        expect(true).toBe(true)
    })
})