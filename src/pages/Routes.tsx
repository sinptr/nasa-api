import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Spinner } from '../ui/components/Spinner';

const ApodPage = lazy(() => import('./Apod'));

export function Routes() {
  return (
    <Suspense fallback={<Spinner />}>
      <Switch>
        <Route exact path="/" component={ApodPage} />
        <Route path="/mars" component={Spinner} />
        {/* TODO: 404 */}
        <Route path="*" component={Spinner} />
      </Switch>
    </Suspense>
  );
}
