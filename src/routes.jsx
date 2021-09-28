import Users from './pages/Users';
import News from './pages/News';
import Home from "./pages/Home";
import User from './pages/User';

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/users',
        component: Users
    },
    {
        path: '/users/:id', //User의 {id} 이름과 일치
        component: User
    },
    {
        path: '/:category?',
        component: News
    }
];

export default routes;