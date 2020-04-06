import React,{ Component} from 'react';
import MainLayout from '../components/layouts/mainLayout';
import Message from '../components/includes/message';

class About extends Component {
    render(){
        return(
            <>
                <MainLayout>
                <h1>About</h1>
                <Message/>
                </MainLayout>
            </>
        )
    }
}

export default About;