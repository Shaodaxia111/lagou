import React from 'react';
import ReactDOM from 'react-dom';
import { Router, useRouterHistory, hashHistory} from 'react-router';
import {createHashHistory} from "history";
var appHistory = useRouterHistory(createHashHistory)({queryKey:false});
import routes from './routers';

class Index extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router history={appHistory} routes={routes} />
    )
  }
}
ReactDOM.render(<Index />,document.getElementById('ct'));