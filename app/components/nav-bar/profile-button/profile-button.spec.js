import ProfileButton from './profileButton'
import {mount, render, shallow} from 'enzyme'
import React from 'react'
import assert from 'assert'

describe('ProfileButton', function () {
  it('ProfileButton component imported successfuly', function () {
    let wrapper = shallow(<ProfileButton/>)
    assert.ok(wrapper)
  })
})