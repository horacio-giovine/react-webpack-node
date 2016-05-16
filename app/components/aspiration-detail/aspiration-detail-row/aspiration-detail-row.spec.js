import AspirationDetailRow from './aspirationDetailRow'
import {mount, render, shallow} from 'enzyme'
import React from 'react'
import assert from 'assert'

describe('AspirationDetailRow', function () {
  it('AspirationDetailRow component imported successfuly', function () {
    let wrapper = shallow(<AspirationDetailRow />)
    assert.ok(wrapper)
  })
})
