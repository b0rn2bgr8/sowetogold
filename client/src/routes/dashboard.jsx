import Statistics from 'views/Statistics/Statistics.jsx';
import Articles from 'views/Articles/Articles.jsx';
import Category from 'views/Category/Category.jsx';
import advertisements from 'views/advertisements/advertisements.jsx';
import Videos from 'views/Videos/Videos.jsx';

var dashRoutes = [
    { path: "/admin/", name: "Statistics", icon: "business_chart-bar-32", exact: true, component: Statistics},
    { path: "/admin/articles", name: "Articles", icon: "education_paper", exact: false,  component: Articles },
    { path: "/admin/manage_category", name: "Manage Category", icon: "design_bullet-list-67", exact: false,  component: Category },
    { path: "/admin/manage_advertisements", name: "Manage ads", icon: "files_single-copy-04", exact: false, component: advertisements },
    { path: "/admin/videos", name: "Videos", icon: "media-1_button-play",exact: false, component: Videos },
    // { redirect: true, path: "/admin/", pathTo: "/admin/",  name: "Dashboard" }
];
export default dashRoutes;
