import { RouteInfo } from './sidebar.metadata';

//Sidebar menu Routes and data
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard', icon: 'ft-droplet', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    //{ path: '/appuser', title: 'App User', icon: 'ft-droplet', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    //{ path: '/invoice', title: 'Invoice', icon: 'ft-droplet', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    {
        path: '', title: 'Medcine Detail', icon: 'ft-home', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: [
            { path: '/product', title: 'Product', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            //{ path: '/autoorder', title: 'Auto Order', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/wholesaler', title: 'Vendor List', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/comingproduct', title: 'Out Of Stock', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            //{ path: '/soldproduct', title: 'Sold Product', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/expireproduct', title: 'Expire Report', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/availableproduct', title: 'Available Product', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            //{ path: '/expirethismonth', title: 'Expire this month', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
           // { path: '/offer', title: 'Offer', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          /* {
            path: '', title: 'Performance', icon: '', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false, submenu: [
                { path: '/fastsale', title: 'Fast Moving', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                { path: '/slowsale', title: 'Slow Moving', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                { path: '/nosale', title: 'No Sale', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            ]
        },*/
        ]
    },
    
    {
        path: '', title: 'Medcine Selling', icon: 'ft-home', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: [
            //{ path: '/billing', title: 'Billing', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: 'chemist/invoice', title: 'Print Invoice', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            //{ path: '/viewinvoice', title: 'View Invoice', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/todaysold', title: 'Sales Report', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/customersales', title: 'Customer Sales Report', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            //{ path: '/addtocart', title: 'Add To Cart', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/vendorbill', title: 'Vendor Bill', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/payment', title: 'Vendor Payment', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            
        ]
    },
    {
        path: '', title: 'Medcine Category', icon: 'ft-home', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: [
            { path: '/category', title: 'Category', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/subcategory', title: 'SubCategory', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },
    /*{
        path: '', title: 'Website Data', icon: 'ft-home', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: [
            { path: '/blog', title: 'Blog', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/cms', title: 'Cms', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/contact', title: 'Contact', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/review', title: 'Review', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/carrier', title: 'Carrier', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/services', title: 'Services', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/faq', title: 'Faq', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/meta', title: 'Meta', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/testimonial', title: 'Testimonial', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/social', title: 'Social Link', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },*/
]; 
export const Subuser: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard', icon: 'ft-droplet', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    {
        path: '', title: 'Medcine Detail', icon: 'ft-home', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: [
            { path: '/product', title: 'Product', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/comingproduct', title: 'Coming Product', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/soldproduct', title: 'Sold Product', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/expireproduct', title: 'Expire Product', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/availableproduct', title: 'Available Product', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/expirethismonth', title: 'Expire this month', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/offer', title: 'Offer', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },
    {
        path: '', title: 'Medcine Selling', icon: 'ft-home', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: [
            { path: '/billing',title: 'Billing', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/todaysold', title: 'Today Sell', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/addtocart', title: 'Add To Cart', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },
];

export const Front: RouteInfo[] = [
    { path: '/home', title: 'Home', icon: 'ft-droplet', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    { path: '/hfaq', title: 'Faq', icon: 'ft-droplet', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    { path: '/htestimonial', title: 'Testimonial', icon: 'ft-droplet', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    { path: '/hblog', title: 'Blog', icon: 'ft-droplet', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    { path: '/hproduct', title: 'Product', icon: 'ft-droplet', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
]; 