import React from 'react';
import ReactDOM from 'react-dom';
import { Router,Route,hashHistory} from 'react-router';
import createBrowserHistory from "history/lib/createBrowserHistory";
import routes from '../config/routes';

class Index extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router history={createBrowserHistory()} routes={routes} />
    )
  }
}
ReactDOM.render(<Index />,document.getElementById('ct'));