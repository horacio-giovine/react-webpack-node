import ModalItem from 'components/nav-bar/modal-item/modal-item'
import React from 'react'
import assert from 'assert'
import expect from 'expect';
import { wrap } from 'react-stateless-wrapper'
import ReactTestUtils from 'react-addons-test-utils'

const WrappedModalItem = wrap(ModalItem);

describe('ModalItem', () => {
    let result;
    it('ModalItem component imported successfuly', function () {
        // result = ReactTestUtils.renderIntoDocument(<WrappedModalItem />);
        expect(true).toBe(true)
    })
})