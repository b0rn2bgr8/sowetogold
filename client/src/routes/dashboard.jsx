import Dashboard from 'views/Dashboard/Dashboard.jsx';
import Notifications from 'views/Notifications/Notifications.jsx';
import Icons from 'views/Icons/Icons.jsx';
import Typography from 'views/Typography/Typography.jsx';
import TableList from 'views/TableList/TableList.jsx';
import Maps from 'views/Maps/Maps.jsx';
import Upgrade from 'views/Upgrade/Upgrade.jsx';
import UserPage from 'views/UserPage/UserPage.jsx';

var dashRoutes = [
    { path: "/admin/", name: "Dashboard", icon: "design_app", exact: true, component: Dashboard },
    { path: "/admin/icons", name: "Icons", icon: "design_image", exact: false, component: Icons },
    { path: "/admin/maps", name: "Maps", icon: "location_map-big", exact: false, component: Maps },
    { path: "/admin/notifications", name: "Notifications", icon: "ui-1_bell-53", exact: false, component: Notifications },
    { path: "/admin/user-page", name: "User Profile", icon: "users_single-02", exact: false, component: UserPage },
    { path: "/admin/extended-tables", name: "Table List", icon: "files_paper", exact: false, component: TableList },
    { path: "/admin/typography", name: "Typography", icon: "design-2_ruler-pencil", exact: false, component: Typography },
    { redirect: true, path: "/", pathTo: "/", name: "Dashboard" }
];
export default dashRoutes;
