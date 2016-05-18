import AddAspirationCard from './AddAspirationCard'
import {mount, render, shallow} from 'enzyme'
import React from 'react'
import assert from 'assert'

describe('AddAspirationCard', function () {
  it('AddAspirationCard component imported successfuly', function () {
    let wrapper = shallow(<AddAspirationCard/>)
    assert.ok(wrapper)
  })
})