import { useState } from "react";

const PostForm = () => {


    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")


    function handleFormSubmit(e) {
        e.preventDefault();
    }

    function handleInputChangeTitle(e) {
        setTitle(e.target.value);
      }
    
      function handleInputChangeBody(e) {
        setBody(e.target.value);
      }

    return (
        <>
            <h1 className="text-white text-center border-top border-white mt-3 p-3">Create a New Post</h1>

            <div className="row">
                <div className="col-12 d-flex justify-content-center">
                <br className="border border-white" />
                

                <form onSubmit={handleFormSubmit}>
                    <div className="input-group my-4">
                        <span className="input-group-text">Title</span>
                        <input
                            className="form-control w-50 "
                            type="text"
                            name="search"
                            autoComplete="off"
                            value={title}
                            onChange={handleInputChangeTitle}
                        />
                    </div>

                    <div className="input-group">
                        <span className="input-group-text">Body</span>
                        <input
                            className="form-control w-50 "
                            type="text"
                            name="search"
                            autoComplete="off"
                            value={body}
                            onChange={handleInputChangeBody}
                        />
                    </div>

                    <div className="d-flex justify-content-center">
                    <button type="submit" className="btn btn-warning mt-3">
                        Create
                    </button>
                    </div>

                </form>

                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    
                <div className="text-white text-center">
                {title ? <h4 className="mt-3"> {title}</h4>: <h4 className="mt-3">Your new post Title</h4> }
                </div>

                <div className="text-white text-center">
                {body ? <h4 className="mt-3"> {body}</h4>: <h4 className="mt-3">Your new post Boddy</h4> }
                </div>

                </div>
            </div>
        </>
    );
};

export default PostForm;
