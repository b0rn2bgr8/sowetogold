import Dashboard from 'views/Dashboard/Dashboard.jsx';
import Articles from 'views/Articles/Articles.jsx';
import UserPage from 'views/UserPage/UserPage.jsx';

var dashRoutes = [
    { path: "/admin/", name: "Dashboard", icon: "design_app", exact: true, component: Dashboard},
    { path: "/admin/Articles", name: "Articles", icon: "location_map-big", exact: false,  component: Articles },
    { path: "/admin/user-page", name: "Users", icon: "users_single-02", exact: false,  component: UserPage },
    
    { redirect: true, path: "/admin/", pathTo: "/admin/", name: "Dashboard" }
];
export default dashRoutes;
