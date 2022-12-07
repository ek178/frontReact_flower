import { Outlet } from 'react-router-dom';
import MNavBar from '../src/MNavBar';

const App = ()=> {
  return (
    <>
      <MNavBar></MNavBar>
      <Outlet />


    </>
  );
}

export default App;
