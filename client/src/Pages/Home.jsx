import React from 'react'

function Home() {
    const posts = [
        {
          id: 1,
          title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
          desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
          img: "https://sreeks.in/post-1.jpg",
          author: "Prashanth",
          date : "March 15,2020",

        },
        {
          id: 2,
          title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
          desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
          img: "https://sreeks.in/post-2.jpg",
          author: "Prashanth",
          date : "March 15,2020",
        },
        {
          id: 3,
          title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
          desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
          img: "https://sreeks.in/post-3.jpg",
          author: "Prashanth",
          date : "March 15,2020",
        },
        {
          id: 4,
          title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
          desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
          img: "https://sreeks.in/post-1.jpg",
          author: "Prashanth",
          date : "March 15,2020",
        },
      ];
    
  return (
    <section className="container-lg px-5 justify-content-center d-flex mt-5  flex-wrap">
    <div className="col-12 col-lg-9">
        <div className="d-flex flex-column mx-lg-5">
            <div>
                {posts.map((post) => (
                <div className="m-3 d-flex flex-column gap-3">
                    <img src={post.img} className="rounded-4 w-100" alt=""/>
                    <a href=""></a>
                    <h3 className="blog-link post-title">{post.title}</h3>

                    <div className="d-flex flex-wrap gap-3 text-muted">
                        <span> <i className="bi bi-person"> </i> {post.author}</span>
                        <span>Date: {post.date} </span>
                        <span>Categories: <a className="text-decoration-none blog-link" href="">Photography</a></span>
                        <span>Tags: <a className="text-decoration-none blog-link" href="">Photo</a>,<a
                                className="  text-decoration-none blog-link " href="">Image</a></span>
                    </div>
                    <p>{post.desc}
                    </p>
                    <div>
                        <button className="btn btn-outline-secondary btn-md rounded-5">
                            Continue Reading
                        </button>
                    </div>
                </div>

                ))}
            </div>
        </div>
    </div>
    {/* <div className="col-12 col-lg-3 ">
        <div className="m-3 w-100 gap-3 d-flex flex-column">
            <h4 className="fs-4 text-secondary ">Categories</h4>
            <div className="d-flex flex-column categories ">
                <a className="blog-link" href=""><span>Delhi</span> <span>09</span></a>
                <a className=" blog-link" href=""><span>New York</span> <span>09</span></a>
                <a className=" blog-link" href=""><span>Mumbai</span> <span>09</span></a>
                <a className=" blog-link" href=""><span>Dubai</span> <span>09</span></a>
                <a className=" blog-link" href=""><span>Paris </span> <span>09</span></a>
            </div>
        </div>
        <div className="m-3 w-100 gap-3 d-flex flex-column">
            <h4 className="fs-4 text-secondary ">Tags</h4>
            <div className="d-flex flex-wrap gap-2 tags">
                <a href="">Images</a>
                <a href="">Art</a>
                <a href="">Photos</a>
                <a href="">Hand Paintings</a>
                <a href="">Hand Carfts</a>
            </div>
        </div>
        <div className="m-3 w-100 gap-3 d-flex flex-column">
            <h4 className="fs-4 text-secondary">Latest Article</h4>
            <div className="">
                <div className="d-flex gap-2 widget-posts mb-3">
                    <img className="widget-image" src="./assets/img/post-1.jpg" alt=""/>
                    <div className="d-flex flex-column justify-content-between">
                        <a className="blog-link" href="">Elements That You Can Use To Create A New Post On This
                            Template.</a>
                        <span>March 15,2020</span>
                    </div>
                </div>
                <div className="d-flex gap-2 widget-posts mb-3">
                    <img className="widget-image" src="./assets/img/post-2.jpg" alt=""/>
                    <div className="d-flex flex-column justify-content-between">
                        <a className="blog-link" href="">Elements That You Can Use To Create A New Post On This
                            Template.</a>
                        <span>March 15,2020</span>
                    </div>
                </div>
                <div className="d-flex gap-2 widget-posts mb-3">
                    <img className="widget-image" src="./assets/img/post-3.jpg" alt=""/>
                    <div className="d-flex flex-column justify-content-between">
                        <a className="blog-link" href="">Elements That You Can Use To Create A New Post On This
                            Template.</a>
                        <span>March 15,2020</span>
                    </div>
                </div>
            </div>
        </div>
    </div> */}

    </section>
    
  )
}

export default Home