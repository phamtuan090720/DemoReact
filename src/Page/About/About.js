import React from 'react'
import Nav from '../../Components/Nav';
export default function About() {
    return (
        <>
            <Nav action ={{'item1':"Menu",'item2':"MenuSub"}}/>
            <div className='container'>
                About Page
            </div>
        </>

    )
}
