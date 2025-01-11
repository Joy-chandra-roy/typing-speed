
import { Outlet } from 'react-router-dom';
import Navber from '../pages/Shared/Navber/Navber';
import Footer from '../pages/Shared/Footer/Footer';

const Main = () => {
    return (
        <div >
            <Navber/>
           <div>
             <Outlet></Outlet>
           </div>
          <div className='mt-5 '>
          <Footer/>
          </div>
        </div>
    );
};

export default Main;