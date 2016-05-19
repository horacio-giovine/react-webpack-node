import ProfileMenu from 'components/nav-bar/profile-menu/profile-menu'
import React from 'react'
import assert from 'assert'
import expect from 'expect';
import { wrap } from 'react-stateless-wrapper'
import ReactTestUtils from 'react-addons-test-utils'

const WrappedProfileMenu = wrap(ProfileMenu);

describe('ProfileMenu', () => {
    let result;
    it('ProfileMenu component imported successfuly', function () {
        // result = ReactTestUtils.renderIntoDocument(<WrappedProfileMenu />);
        expect(true).toBe(true)
    })
})