import { createBrowserRouter } from 'react-router-dom';

import Main from './../layout/Main';
import Home from '../components/Home/Home';
import Contact from '../components/Contact/Contact';
import Information from '../components/Information/Information';
import Guide from '../components/Guide/Guide';


const Router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/information',
        element: <Information/>
      },
      {
        path: '/guide',
        element: <Guide/>
      }
     
    ],
  },
]);

export default Router;
