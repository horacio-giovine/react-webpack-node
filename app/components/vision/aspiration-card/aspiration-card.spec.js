import AspirationCard from 'components/vision/aspiration-card/aspiration-card'
import {mount, render, shallow} from 'enzyme'
import React from 'react'
import assert from 'assert'

describe('AspirationCard', function () {
  it('AspirationCard component imported successfuly', function () {
    let wrapper = shallow(<AspirationCard/>)
    assert.ok(wrapper)
  })
})
