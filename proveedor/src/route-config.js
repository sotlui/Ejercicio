import Login from "./containers/login/Login";
import Recordar from "./containers/login/Recordar";
import Register from "./containers/login/Register";
import PagoFactura from "./containers/facturas/PagoFactura";
import RedirectALanding from './utils/RedirectALanding';


const rutas = [

    {path:'/danecProveedor/factura', component: <PagoFactura/>, exact:true},
    {path:'/danecProveedor/login', component: <Login/>, exact:true},
    {path:'/danecProveedor/register', component: <Register/>, exact:true},
    {path:'/danecProveedor/recordar', component: <Recordar />, exact:true},


    {path:'/danecProveedor', component: <Login/>, exact:true},
    {path:'*', component: <RedirectALanding />, exact:true},
];

export default rutas;