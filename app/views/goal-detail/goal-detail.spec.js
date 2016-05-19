import GoalDetail from './goal-detail'
import {mount, render, shallow} from 'enzyme'
import React from 'react'
import assert from 'assert'

describe('GoalDetail', function () {
  it('GoalDetail component imported successfuly', function () {
    let wrapper = shallow(<GoalDetail />)
    assert.ok(wrapper)
  })
})
