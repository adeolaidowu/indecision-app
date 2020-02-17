import React from 'react';

const Action = (props) => (
  <div>
    <button 
      className='big-button'
      disabled={!props.hasOptions}
      onClick={props.handlePick}
    >
     What should i do?
    </button>
  </div>
);

export default Action;