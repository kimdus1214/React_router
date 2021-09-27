import Users from './pages/Users';
import Movies from './pages/Movies';
import Home from "./pages/Home";
import User from './pages/User';

export default [
    {
        path: '/',
        component: Home
    },
    {
        path: '/movies',
        component: Movies
    },
    {
        path: '/users',
        component: Users
    },
    {
        path: '/users/:id', //User의 {id} 이름과 일치
        component: User
    }
];