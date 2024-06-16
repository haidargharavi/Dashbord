import Home from './pages/Home/Home' 
import NewUser from './pages/NewUser/NewUser'
import UserList from './pages/Users/UserList'
import Products from './pages/Products/Products'

let routes = [
    {path: '/' , element: <Home/>},
    {path: '/users' , element: <UserList/>},
    {path: '/newuser' , element: <NewUser/>},
    {path: '/products' , element: <Products/>},
]

export default routes