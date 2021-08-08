import login from "./pages/auth/login";
import register from "./pages/auth/register";
import Home from "./pages/home";
import Landing from "./pages/landing";


export const routes = {
    protectedView:[ 
        { path:"/beranda", Component:Home},
    ],
    unProtectedView:[
        // { path:"/landing", Component:Landing},
        { path:"/login", Component:login},
        { path:"/daftar", Component:register},
    ],
}