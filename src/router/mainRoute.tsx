import {createBrowserRouter} from "react-router-dom"
import Layout from "../components/common/Layout"


export const mainRoute= createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children:[
            {
                element: <></>
            }
        ]
    }
])