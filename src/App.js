import React, { Suspense } from 'react';
import './App.css';
import LoaderSpinner from './components/LoaderSpinner';

const UsersList = React.lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import('./components/UsersList')), 2000);
  });
});

const App = () => {
  return (
    <body>
      <div className="title">
        <h1>Random User Generator</h1>
      </div>
      <Suspense fallback={<LoaderSpinner />}>
        <UsersList />
      </Suspense>
    </body>
  );
};

export default App;
