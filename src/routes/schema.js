
const Schema = ()=>{

        return [

            {
                path:'/',
                pageName:'home',
            },
            {
                path:'/login',
                pageName:'login',
                chunk:
                [{
                    page:'login',
                    name:'login',
                },]
            },
            {
                path:'/signup',
                pageName:'signup',
                chunk:
                [{
                    page:'signup',
                    name:'signup',
                },]
            },
            {
                path:'*',
                pageName:'error',
                redux:'error',
            },


        ]
}

export default Schema;