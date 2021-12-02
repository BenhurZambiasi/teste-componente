import React from 'react';
import Header from '../Header';


function MasterPage(props) {
  
  return (
    <>
      <Header></Header>
      <div>
        {props.children}
      </div>
    </>
  );
}

export default MasterPage;