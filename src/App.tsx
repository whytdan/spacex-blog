import React from 'react';
import BaseLayout from './components/BaseLayout/BaseLayout';
import Launches from './components/Launches/Launches';

function App() {
  return (
    <>
      <BaseLayout>
        <Launches />
      </BaseLayout>
    </>
  );
}

export default App;
