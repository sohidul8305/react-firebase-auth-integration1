import React, { use } from 'react';
import { AuthContext } from '../../context/AuthContext/AuthContext';

const Home = () => {
  const authInfo = use(AuthContext);
  console.log(authInfo)
    return (
        <div>
          <h2>This is home page</h2>  
        </div>
    );
};

export default Home;