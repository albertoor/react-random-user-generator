import React, { Suspense } from 'react';
import './App.css';
import Loader from './components/Loader';

const UsersList = React.lazy(() => import('./components/UsersList'));

const App = () => {
  return (
    <body>
      <div className="title">
        <h1>Random User Generator</h1>
      </div>
      <div>
        <Suspense fallback={<Loader />}>
          <UsersList />
        </Suspense>
      </div>
    </body>
  );
};

export default App;
