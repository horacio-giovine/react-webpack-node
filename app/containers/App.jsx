import React, { PropTypes } from 'react';
import Navigation from 'containers/Navigation';
import Message from 'containers/Message';
import classNames from 'classnames/bind';
import styles from 'css/main';
import styles2 from 'css/test';

const cx = classNames.bind(styles);
const cx2 = classNames.bind(styles2);


/*
 * React-router's <Router> component renders <Route>'s
 * and replaces `this.props.children` with the proper React Component.
 *
 * Please refer to `routes.jsx` for the route config.
 *
 * A better explanation of react-router is available here:
 * https://github.com/rackt/react-router/blob/latest/docs/Introduction.md
 */
const App = ({children}) => {
  return (
    <div className={cx('app')}>
      <Navigation />
      <Message />
        {children}
      <div className={cx2('test')}>
        TEST
      </div>
    </div>

  );
};

App.propTypes = {
  children: PropTypes.object
};

export default App;
