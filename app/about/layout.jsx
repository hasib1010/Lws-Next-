import React from 'react';

import Link from "next/link";
const aboutlayout = ({ children }) => {
    return (
        <div>
            <nav>
                <ul className="flex gap-6 mx-auto w-fit">
                    <li><Link href={'/about/mission'}>Mission</Link></li>
                    <li><Link href={'/about/vision'}>Vision</Link></li>    
                </ul>
            </nav>
            {children}
        </div>
    );
};

export default aboutlayout;