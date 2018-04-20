import React from 'react';
import { renderRoutes } from 'react-router-config';

export default ({ route }) => {
  return (
    <React.Fragment>
      <p>root.</p>
      {renderRoutes(route.routes)}
    </React.Fragment>
  );
}