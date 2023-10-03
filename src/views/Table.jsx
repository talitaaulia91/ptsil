import {useState, useEffect,React} from 'react';
import ResponsiveDrawer from '../components/Sidebar'
import EnhancedTable from '../components/core/dataTables/DataTables'
import {Link, useNavigate} from 'react-router-dom';



export default function Dashboard(props){
      const navigate = useNavigate ();
      const token = sessionStorage.getItem('token')
      // const user = sessionStorage.getItem('user')
      // const userDetail = JSON.parse(user)


   return(
    <>
        <ResponsiveDrawer>
        <EnhancedTable/>
       </ResponsiveDrawer>
      
    </>
   )
}