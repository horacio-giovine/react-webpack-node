import HomeView from './homeView'
import {mount, render, shallow} from 'enzyme'
import React from 'react'
import assert from 'assert'

describe('HomeView', function () {
  it('HomeView component imported successfuly', function () {
    let wrapper = shallow(<HomeView />)
    assert.ok(wrapper)
  })
})
