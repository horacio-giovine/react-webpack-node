import ContentContainer from './contentContainer'
import {mount, render, shallow} from 'enzyme'
import React from 'react'
import assert from 'assert'

describe('ContentContainer', function () {
  it('ContentContainer component imported successfuly', function () {
    let wrapper = shallow(<ContentContainer/>)
    assert.ok(wrapper)
  })
})