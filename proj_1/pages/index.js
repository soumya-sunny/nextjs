import React,{ Component} from 'react';
import axios from 'axios';
import MainLayout from '../components/layouts/mainLayout';
import MyStyle from '../styles/main.css';
import Link from 'next/link';

class Home extends Component {
    static async getInitialProps({pathname,query,asPath,req,res}){
        let userData;

        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
            userData = response.data;
        } catch {
            console.log('error')
        }
        return {
            
            users:userData
        }
    }

    constructor(props){
        super(props)

        this.state = {
            user: this.props.user,
            userData: this.props.userData
        }
    }
    renderUsers =(users)=>{
        // console.log("re"+users);
       return users.map((user,index)=>{
            // console.log(user.name)
            return (<li key={user.id} className="list-group-item">
                 <Link 
                 as={`/users/profile/${user.id}`}
                 href={{pathname:'/users/profile/',
                query:{
                    userId:user.id
                }}}>
                 <a>{user.name}</a>
                 </Link></li>)
        })

    }

    render(){
    //    console.log(this.props.users);
        return(
            <>
                <MainLayout>
                    <h1>Pick a user</h1>
                    <ul className="list-group">
                        {this.renderUsers(this.props.users)}
                    </ul>
                </MainLayout>
            </>
        )
    }
}

export default Home;