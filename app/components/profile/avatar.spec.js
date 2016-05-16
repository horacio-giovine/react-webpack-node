import Avatar from './avatar'
import {mount, render, shallow} from 'enzyme'
import React from 'react'
import assert from 'assert'

describe('Avatar', function () {
  it('Avatar component imported successfully', function () {
    let wrapper = shallow(<Avatar />)
    assert.ok(wrapper)
  })
})
