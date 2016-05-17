import React, { Component, PropTypes } from 'react'
import classNames from 'classnames';
import 'css/components/pageContainer';

//const cx = classNames.bind(styles);

export class PageContainer extends Component {
  render () {
    return (
      <div>
        <div id='page-container'>
          <div className='content'>
            hola
          </div>
        </div>
      </div>
    )
  }
}

// PageContainer.propTypes = {
//   children: PropTypes.element
// }

export default PageContainer
