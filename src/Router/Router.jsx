import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Test from "../pages/Home/Test/Test";
import TypingLesson from "../pages/Home/Typing lesson/TypingLesson";
import Games from "../pages/Home/Games/Games";
import Blog from "../pages/Home/Blog/Blog";
import SinIN from "../pages/Home/SinIN/SinIN";
import SinUP from "../pages/Home/SinUP/SinUP";

  const router = createBrowserRouter([
    {
      path: "/",
      element:<Main/> ,
      children:[
        {
            path:"/",
            element:<Home/>
        },
        {
          path:"/test",
          element:<Test/>
        },
        {
          path:"/typingLesson",
          element:<TypingLesson/>
        },
        {
          path:"/games",
          element:<Games/>
        },
        {
          path:"/blog",
          element:<Blog/>
        },
        {
          path:"/sinIN",
          element:<SinIN/>
        },
        {
          path:"/sinUP",
          element: <SinUP/>
        }
      ]
    },
  ]);

  export default router;