import Pane from './pane'
import {mount, render, shallow} from 'enzyme'
import React from 'react'
import assert from 'assert'

describe('Pane', function () {
  it('Pane component imported successfuly', function () {
    let wrapper = shallow(<Pane />)
    assert.ok(wrapper)
  })
})
