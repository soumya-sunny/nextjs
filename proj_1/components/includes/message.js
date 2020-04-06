import React, { Component } from 'react';
import { withRouter } from 'next/router';

const Message = (props) => {
    const handler = () => {
        props.router.push({
            pathname:'/users/profile',
            query:{
                userId:1,
            }
        },'/users/profile/1')
    }
    console.log(props);
    return (
        <>
            <h1>Hi</h1>
            <div>{props.router.pathName}</div>
            <p>Click <span onClick={handler}>here</span></p>
        </>
    )

}

export default withRouter(Message);