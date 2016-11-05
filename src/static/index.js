import React from 'react';
import ReactDOM from 'react-dom';
import { Router,hashHistory} from 'react-router';
import routes from './routers';

class Index extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router history={hashHistory} routes={routes} />
    )
  }
}
ReactDOM.render(<Index />,document.getElementById('ct'));