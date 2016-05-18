import Activities from './activities'
import {mount, render, shallow} from 'enzyme'
import React from 'react'
import assert from 'assert'

describe('Activities', function () {
  it('Activities component imported successfully', function () {
    let wrapper = shallow(<Activities />)
    assert.ok(wrapper)
  })
})
