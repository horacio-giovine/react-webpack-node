import ModalItem from './modalItem'
import {mount, render, shallow} from 'enzyme'
import React from 'react'
import assert from 'assert'

describe('ModalItem', function () {
  it('ModalItem component imported successfuly', function () {
    let wrapper = shallow(<ModalItem/>)
    assert.ok(wrapper)
  })
})