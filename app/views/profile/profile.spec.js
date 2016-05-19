import Profile from './profile'
import {mount, render, shallow} from 'enzyme'
import React from 'react'
import assert from 'assert'

describe('Profile', function () {
  it('Profile component imported successfuly', function () {
    let wrapper = shallow(<Profile />)
    assert.ok(wrapper)
  })
})
