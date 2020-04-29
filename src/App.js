import React from 'react';
import Counter from './components/counter'
const App = () => {
  return (
    <div className="m-3">
      
      <Counter title="profile 1" value={1} image="images/profile.jpg"/>
      <Counter title="cat1" value={1} image="images/cat.png"/>
    </div>
  );
};

export default App;
