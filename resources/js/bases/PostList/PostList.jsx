import { error } from "laravel-mix/src/Log";
import { useState, useEffect } from "react";

const handleFetchPost = () => {
    const url = "https://jsonplaceholder.typicode.com/posts";

    return fetch(url)
        .then((response) => response.json())
        .then((data) => {            
            return data;
        })
        .catch((error) => {
            console.log(error);
        });
};

export const PostList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        handleFetchPost()
            .then((data) => {                
                const postsContent = data.slice(0, 5);
                setPosts(postsContent);
            })
            .catch((error) => console.log(error));

        return () => {};
    }, []);

    return (
        <>
            <div className="text-center">
                <h1 className="text-white mt-3">Post List </h1>

                {posts.map((post) => (
                    <div key={post.id} className="row mt-3">
                        <div className="col-6 p-3">
                            <h5 className="text-white text-center">
                                Title: {post.title}
                            </h5>
                        </div>
                        <div className="col-6 p-3">
                            <h5 className="text-white text-center">
                                Body: {post.body}
                            </h5>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};
