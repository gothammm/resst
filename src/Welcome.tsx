import { Button, Result, Typography } from 'antd';
import React from 'react';

const Welcome: React.FC = () => {
  return (
    <Result
      status="success"
      title="Your app is up and running!"
      subTitle={
        <>
          Go ahead and start editing{' '}
          <Typography.Text code>Welcome.tsx</Typography.Text>
        </>
      }
    />
  );
};

export default Welcome;
