import React, { useContext } from 'react';

import AuthContext from '../components/auth';

import AppRoutes from '../routes/app.routes';
import AuthRoutes from '../routes/auth.routes';
import Splash from '../components/Splash';

function Routes() {
  const { signed, loading } = useContext(AuthContext);

  if(loading) {
    return <Splash />
  }

  return signed ? <AuthRoutes /> : <AppRoutes />;
}

export default Routes;
