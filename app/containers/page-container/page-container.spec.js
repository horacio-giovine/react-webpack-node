import PageContainer from './page-container'
import {mount, render, shallow} from 'enzyme'
import React from 'react'
import assert from 'assert'

describe('PageContainer', function () {
  it('PageContainer component imported successfuly', function () {
    let wrapper = shallow(<PageContainer />)
    assert.ok(wrapper)
  })
})
