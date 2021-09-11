import login from "./pages/auth/login";
import register from "./pages/auth/register";
import QuestionOne from "./pages/home/QuestionOne";
import QuestionTwo from "./pages/home/QuestionTwo";

export const routes = {
    // protectedView:[ 
    //     { path:"/beranda", Component:Home},
    // ],
    unProtectedView:[
        // { path:"/landing", Component:Landing},
        { path:"/question-one", Component:QuestionOne},
        { path:"/question-two", Component:QuestionTwo},
    ],
}