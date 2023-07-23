import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import New from "./pages/new/New";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import { useSelector } from "react-redux";

function App() {
  
  const  user = useSelector(state => state.currentUser);
  console.log(user)
  let admin=false;
  if(user!=null)
   admin = user.isAdmin;
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={admin? <Home/>:<Login/>} />
            <Route path='users' element={<UserList />} />
            <Route path="user/:id" element={<User />} />
            <Route path="/new" element={<New/>} />
            <Route path="/product" element={<ProductList />} />
            <Route path="product/:id" element={<Product />} />
            <Route path="/newproduct" element={<NewProduct/>} />
            <Route path="/login" element={admin?<Home/>:<Login/>}/>
          </Route>

          {/*           <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="user">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route path="new" element={<New />} />
            </Route>
            <Route path="product">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route path="new" element={<New />} />
            </Route> 
            
          </Route>
            */}




        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
