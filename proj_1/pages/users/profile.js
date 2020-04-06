import React,{ Component} from 'react';
import axios from 'axios';
import MainLayout from '../../components/layouts/mainLayout';
import { requireUser,useAuth0 } from '../../lib/react-auth0-spa';

const Profile =(props)=> {
    const { user } = useAuth0()
        console.log(user)

        return(
            <>
            <MainLayout>
                <br/>
                <h1>User Profile</h1>
               {user &&( <h2>{user.name}</h2>)}
                </MainLayout>
            </>
        )
    
}

Profile.getInitialProps = async ({query}) => {
    // console.log(query);
 
}



export default requireUser(Profile);