import {useState, useEffect,React} from 'react';
import ResponsiveDrawer from '../components/Sidebar'
import Content from '../components/Content'
import {Link, useNavigate} from 'react-router-dom';



export default function Dashboard(props){
      const navigate = useNavigate ();
      const token = sessionStorage.getItem('token')
      // const user = sessionStorage.getItem('user')
      // const userDetail = JSON.parse(user)
      // api.defaults.headers.common['Authorization'] = `Bearer ${token}`;


   return(
    <>
        <ResponsiveDrawer >
        <Content/>
       </ResponsiveDrawer>
      
    </>
   )
}