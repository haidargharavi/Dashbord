import Home from './pages/Home/Home' 
import NewUser from './pages/NewUser/NewUser'
import UserList from './pages/Users/UserList'
import Products from './pages/Products/Products'
import Product from './components/product/Product'

let routes = [
    {path: '/' , element: <Home/>},
    {path: '/users' , element: <UserList/>},
    {path: '/newuser' , element: <NewUser/>},
    {path: '/products' , element: <Products/>},
    {path: '/product/:productID' , element: <Product/>},
    
]

export default routes