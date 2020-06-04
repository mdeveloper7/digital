/** External libs */
import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import ProtectedRoute from '/components/protected-route/protected-route.component';
import { Redirect } from 'react-router-dom';

const AuthLayout = lazy(() => import('./layouts/auth-layout.component'));
const AdminLayout = lazy(() => import('./layouts/admin-layout.component'));

const App = () => {
  return (

    <Suspense fallback={<div>Loading... </div>}>
      <Redirect
        from="/"
        to="/admin" />
      <Switch>
        <Route path={'/auth'}>
          <AuthLayout />
        </Route>
        <Route path={'/admin'} exact>
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        </Route>
      </Switch>
    </Suspense>
  )
}

export default App;
