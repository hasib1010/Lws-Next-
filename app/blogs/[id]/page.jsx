import React from 'react';

const page = ({params}) => {
const {title, id, description} = params;
// console.log(title);
    return (
        <div>
            <h1>Page of blog {id}</h1>
            <p>{title}</p>
            <p>{description}</p>
        </div>
    );
};

export default page;