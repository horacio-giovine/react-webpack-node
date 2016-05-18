import Form from './form'
import {mount, render, shallow} from 'enzyme'
import React from 'react'
import assert from 'assert'

describe('Form', function () {
  it('Form component imported successfully', function () {
    let wrapper = shallow(<Form />)
    assert.ok(wrapper)
  })
})
