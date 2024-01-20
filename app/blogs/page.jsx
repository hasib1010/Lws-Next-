import Link from 'next/link';
import React from 'react';

const page = () => {
    const blogs = [
        {
            id: 1,
            title: "blog 1",
            description: "blog 1 description"
        },
        {
            id: 2,
            title: "blog 2",
            description: "blog 2 description"
        },
        {
            id: 3,
            title: "blog 3",
            description: "blog 3 description"
        },
    ]
    return (
        <div className='w-fit mx-auto mt-32'>
            Blogs page {blogs.length}
            {
                blogs.map(blog=>
                 <li key={blog.id}>
                   <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
                </li>)
            }
        </div>
    );
};

export default page;