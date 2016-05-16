import Dashboard from './dashboard'
import {mount, render, shallow} from 'enzyme'
import React from 'react'
import assert from 'assert'

describe('Dashboard', function () {
  it('Dashboard component imported successfuly', function () {
    let wrapper = shallow(<Dashboard />)
    assert.ok(wrapper)
  })
})
