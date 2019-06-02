import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
// import Router from './src/routes';
// @ts-ignore
import style from './index.less';

import Button from './components/Button/demo';
import Icon from './components/Icon';

const Routers: React.SFC = () => {
  return (
    <div>
      <Route exact={true} path="/" component={Button} />
      <Route path="/button" component={Button} />
      <Route path="/icon" component={Icon} />
    </div>
  )
}

const App: React.SFC = ({ children }) => {
  return (
    <Router>
      <div className={style.layout}>
        <div className={style.header}>
          <div className={style.logo}>Naruto</div>
        </div>
        <div className={style.container}>
          <div className={style.siderbar}>
            <Link to="/button">button</Link>
            <Link to="/icon">icon</Link>
          </div>
          <div className={style.content}>
            {children}
          </div>
        </div>
      </div>
    </Router>
  );
}

ReactDOM.render(<App><Routers /></App>, document.getElementById('root'));
