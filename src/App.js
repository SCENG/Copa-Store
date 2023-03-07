import "./App.scss";
import "./index.css"
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import Contact from "./pages/contact/contact";
import { Cart } from "./pages/cart/cart";
import { About } from "./pages/about/about";
import { ShopContextProvider } from "./context/shop-context";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Shop />
      </>
    ),
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/about",
    element: <About />,
  },
  ]);

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <RouterProvider router={router}/>
      </ShopContextProvider>
    </div>
  );
}

export default App;
