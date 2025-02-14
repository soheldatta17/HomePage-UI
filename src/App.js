import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/Home';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter,RouterProvider} from 'react-router-dom';
import LL from './components/Lpar_Login';
import Login from './components/Login';

const router=createBrowserRouter(
  [
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/login",
      element:<LL/>
    },
    {
      path:"/login2",
      element:<Login/>

    }
  ]
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}/>
);
function App() {
  return (
    <>
      
    </>
  );
}

export default App;
