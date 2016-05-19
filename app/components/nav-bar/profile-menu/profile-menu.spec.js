import ProfileMenu from './profileMenu'
import {mount, render, shallow} from 'enzyme'
import React from 'react'
import assert from 'assert'

describe('ProfileMenu', function () {
  it('ProfileMenu component imported successfuly', function () {
    let wrapper = shallow(<ProfileMenu/>)
    assert.ok(wrapper)
  })
})