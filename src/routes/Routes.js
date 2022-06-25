import { useRoutes } from 'react-router-dom';
import LazyLoading from '../components/LazyLoading';

const Soolvi = LazyLoading(() => import('../pages/soolvi'));

// err handlers
// const NotFound = LazyLoading(() => import('../pages/NotFound'));

const AppRoutes = () => {
    let allRoutes = useRoutes([
        {
            path: '/',
            children: [{ element: <Soolvi />, index: true }],
        },
    ]);
    return allRoutes;
};

export default AppRoutes;
