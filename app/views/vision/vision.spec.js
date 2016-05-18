import Vision from './vision'
import {mount, render, shallow} from 'enzyme'
import React from 'react'
import assert from 'assert'

describe('Vision', function () {
  it('Vision component imported successfuly', function () {
    let wrapper = shallow(<Vision/>)
    assert.ok(wrapper)
  })
})