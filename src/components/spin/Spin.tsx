// loading组件

import React from 'react';
import { SpinProps } from './index.d';

function Spin(props: SpinProps) {
  console.log('props: ',props);
  return (
    <div className={`spin-wrap ${props.spinning ? 'spin-spinning' : 'spin-not-spinning'}`}>
      {props.children}
    </div>
  )
}

export default Spin;



