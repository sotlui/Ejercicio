import Login from "./containers/login/Login";
import Register from "./containers/login/Register";
import PagoFactura from "./containers/page/PagoFactura";
//import Recordar from "./containers/login/Recordar";
import RedirectALanding from './utils/RedirectALanding';


const rutas = [

    {path:'/danecProveedor/factura', component: <PagoFactura/>, exact:true},
    {path:'/danecProveedor/login', component: <Login/>, exact:true},
    {path:'/danecProveedor/login/register', component: <Register/>, exact:true},
    //{path:'/danecProveedor/login', component: Recordar, exact:true},


    {path:'/danecProveedor', component: <Login/>, exact:true},
    {path:'*', component: <RedirectALanding />, exact:true},
];

export default rutas;