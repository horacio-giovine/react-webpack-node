import NavBar from './nav-bar'
import {mount, render, shallow} from 'enzyme'
import React from 'react'
import assert from 'assert'

describe('NavBar', function () {
  it('NavBar component imported successfuly', function () {
    let wrapper = shallow(<NavBar/>)
    assert.ok(wrapper)
  })
})
