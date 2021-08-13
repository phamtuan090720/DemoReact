import React from 'react';
import Nav from '../../Components/Nav';
export default function Home() {
    return (
        <>
            <Nav action={{ 'item1': "Sức Khỏe", 'item2': "Lối Sống" }} />
            <div>
                Home Page
            </div>
        </>

    )
}