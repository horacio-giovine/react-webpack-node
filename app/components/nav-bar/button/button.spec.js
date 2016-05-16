import Button from './button'
import {mount, render, shallow} from 'enzyme'
import React from 'react'
import assert from 'assert'

describe('Button', function () {
  it('Button component imported successfuly', function () {
    let wrapper = shallow(<Button/>)
    assert.ok(wrapper)
  })
})