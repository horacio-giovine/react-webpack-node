import Password from './password'
import {mount, render, shallow} from 'enzyme'
import React from 'react'
import assert from 'assert'

describe('Password', function () {
  it('Password component imported successfully', function () {
    let wrapper = shallow(<Password />)
    assert.ok(wrapper)
  })
})
