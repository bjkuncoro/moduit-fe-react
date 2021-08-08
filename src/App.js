import React, { Fragment, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import {useHistory, withRouter} from 'react-router-dom'

const App = ({children}) => {
  useEffect(() => {
    // console.log(children)
  }, [])
  return (
    <Fragment>
      {/* <Loader/> */}
      {/* <Taptop/> */}
      <div className="page-wrapper compact-wrapper" id="pageWrapper">
        {/* <Header/> */}
        <div className="page-body-wrapper sidebar-icon">
          {/* <Sidebar/> */}
          <div className="page-body">
            {children}
          </div>
          {/* <Footer/> */}
        </div>
      </div>
      {/* <ThemeCustomize/> */}
      {/* <ToastContainer/> */}
    </Fragment>
  );
}

export default withRouter(App);
