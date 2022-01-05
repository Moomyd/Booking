
/* router.js 源码 */
import React from 'react';
import { HashRouter, Route, Switch } from 'dva/router';
import Back from './components/backmanage';
import App from './App'

function RouterConfig({ history }) {
  return (
    <HashRouter history={history}>
      <Switch>
        {/* 严格的匹配 */}
        <Route path="/" exact component={Home}/>
        <Route path="/home" exact component={Home} />

        {/* 具有子路由的不可以设置 exact,否则子路由无法访问 */}
        <Route path="/products" component={Products}/>
      </Switch>
    </HashRouter>
  );
}

export default RouterConfig;