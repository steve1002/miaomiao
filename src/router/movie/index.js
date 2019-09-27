export default {
    path:"/movie",
    component:() => import("@/views/Movie"),
    children:[{
                path:'action',
                component:() => import("@/components/action")
             },
            {
                path:'comedy',
                component:() => import("@/components/comedy")
            },
            {
                path:'/movie',
                redirect:'/movie/action'
            }
    ]
}