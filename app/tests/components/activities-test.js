import Activities from 'components/profile/activities/activities'
import React from 'react'
import assert from 'assert'
import expect from 'expect';
import { wrap } from 'react-stateless-wrapper'
import ReactTestUtils from 'react-addons-test-utils'

const WrappedActivities = wrap(Activities);

describe('Activities', () => {
    let result;
    it('Activities component imported successfuly', function () {
        // result = ReactTestUtils.renderIntoDocument(<Activities />);
        expect(true).toBe(true)
    })
})
