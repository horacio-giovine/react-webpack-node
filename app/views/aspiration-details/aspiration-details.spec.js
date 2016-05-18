import AspirationDetails from './aspiration-details'
import {mount, render, shallow} from 'enzyme'
import React from 'react'
import assert from 'assert'

describe('AspirationDetails', function () {
  it('AspirationDetails component imported successfuly', function () {
    let wrapper = shallow(<AspirationDetails />)
    assert.ok(wrapper)
  })
})
