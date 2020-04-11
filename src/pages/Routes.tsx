import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Spinner } from '../components/common/Spinner';

const ApodPage = lazy(() => import('./Apod'));

export function Routes() {
  return (
    <Suspense fallback={<Spinner />}>
      <Switch>
        <Route exact path="/" component={ApodPage} />
        {/* TODO: 404 */}
        <Route path="*" component={Spinner} />
      </Switch>
    </Suspense>
  );
}
