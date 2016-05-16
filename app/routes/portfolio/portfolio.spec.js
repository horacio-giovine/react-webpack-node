import Portfolio from './portfolio'
import {mount, render, shallow} from 'enzyme'
import React from 'react'
import assert from 'assert'

describe('Portfolio', function () {
  it('Portfolio component imported successfuly', function () {
    let wrapper = shallow(<Portfolio />)
    assert.ok(wrapper)
  })
})
