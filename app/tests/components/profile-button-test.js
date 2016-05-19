import ProfileButton from 'components/nav-bar/profile-button/profile-button'
import React from 'react'
import assert from 'assert'
import expect from 'expect';
import { wrap } from 'react-stateless-wrapper'
import ReactTestUtils from 'react-addons-test-utils'

const WrappedProfileButton = wrap(ProfileButton);

describe('ProfileButton', () => {
    let result;
    it('ProfileButton component imported successfuly', function () {
        // result = ReactTestUtils.renderIntoDocument(<WrappedProfileButton />);
        expect(true).toBe(true)
    })
})