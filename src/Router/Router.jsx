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
import Tricky from "../pages/Home/Tricky/Tricky";
import Practice from "../pages/Home/Practice/Practice";
import Certificate from "../pages/Home/Certificate/Certificate";
import Benchmark from "../pages/Home/Benchmark/Benchmark";
import B_Blitz from "../pages/Home/B_Blitz/B_Blitz";
import FAQ from "../components/Home/FAQ";


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
        path:"/login",
        element:<SinIN/>
      },
      {
        path:"/register",
        element: <SinUP/>
      },
      {
        path:"/tricky",
        element: <Tricky/>
      },
      {
        path:"/practice",
        element: <Practice/>
      },
      {
        path:"/certificate",
        element: <Certificate/>
      },
      {
        path:"/benchmark",
        element: <Benchmark/>
      },
      {
        path:"/b_blitz",
        element: <B_Blitz/>
      },
      {
        path: "/faq",
        element:<FAQ/>
      }
    ]
  },
]);

export default router;