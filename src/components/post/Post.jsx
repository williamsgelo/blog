import "./post.css"

export default function Post() {
    return (
        <div className="post">
            <img
                className="postImg"
                src="https://images.unsplash.com/photo-1674763124932-d0105f1a0e7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                alt=""
            />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">
                    Lorem ipsum dolor sit amet consectetur.
                </span>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores voluptate
                maxime necessitatibus libero? Eos, tempore? Nostrum esse voluptas excepturi possimus
                nobis, amet, debitis unde odio vero tempora impedit vitae maxime!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores voluptate
                maxime necessitatibus libero? Eos, tempore? Nostrum esse voluptas excepturi possimus
                nobis, amet, debitis unde odio vero tempora impedit vitae maxime!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores voluptate
                maxime necessitatibus libero? Eos, tempore? Nostrum esse voluptas excepturi possimus
                nobis, amet, debitis unde odio vero tempora impedit vitae maxime!
            </p>
        </div>
    )
}
