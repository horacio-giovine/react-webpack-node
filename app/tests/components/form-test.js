import Form from 'components/profile/form/form'
import React from 'react'
import assert from 'assert'
import expect from 'expect';
import { wrap } from 'react-stateless-wrapper'
import ReactTestUtils from 'react-addons-test-utils'

const WrappedForm = wrap(Form);

describe('Form', () => {
    let result;
    it('Form component imported successfuly', function () {
        // result = ReactTestUtils.renderIntoDocument(<Form />);
        expect(true).toBe(true)
    })
})
