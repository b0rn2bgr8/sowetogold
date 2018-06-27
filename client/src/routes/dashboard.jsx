import Dashboard from 'views/Dashboard/Dashboard.jsx';
import Articles from 'views/Articles/Articles.jsx';
import UserPage from 'views/UserPage/UserPage.jsx';
import Notifications from 'views/Notifications/Notifications.jsx';
import Typography from 'views/Typography/Typography.jsx';

var dashRoutes = [
    { path: "/admin", name: "Dashboard", icon: "business_chart-bar-32", exact: true, component: Dashboard},
    { path: "/admin/Articles", name: "Articles", icon: "education_paper", exact: false,  component: Articles },
    { path: "/admin/notifications", name: "Manage ads", icon: "files_single-copy-04", exact: false, component: Notifications },
    { path: "/admin/user-page", name: "Users", icon: "users_single-02", exact: false,  component: UserPage },
    { path: "/admin/typography", name: "Videos", icon: "media-1_button-play",exact: false, component: Typography },
    // { redirect: true, path: "/admin/", pathTo: "/admin/",  name: "Dashboard" }
];
export default dashRoutes;
