import {useState} from 'react'
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function Write() {
    const [value, setValue] = useState("");
  return (
    <section className="container-lg justify-content-center  px-lg-5 d-flex mt-3  flex-wrap">
    <div className="col-12 col-lg-9 ">
        <form className="m-5">
            <div className="mb-3">
                <label for="title" className="form-label">Post Title</label>
                <input type="text" className="form-control" id="title"/>
            </div>
            <div className="mb-3">
                <label for="categories" className="form-label">Categories</label>
                <select className="form-select" id="categories" aria-label="Default select example">
                    <option selected>Delhi</option>
                    <option value="1">New York</option>
                    <option value="2">Mumbai</option>
                    <option value="3">Dubai</option>
                    <option value="4">Paris</option>
                </select>
            </div>
            <label for="tags" className="form-label">Tags</label>
            <div className="form-check mb-3">
                <input type="checkbox" className="btn-check" id="btn-check1" autocomplete="off"/>
                <label className="btn btn-outline-secondary rounded-5 btn-sm" for="btn-check1">
                    Images
                </label>
                <input type="checkbox" className="btn-check" id="btn-check2" autocomplete="off" />
                <label className="btn btn-outline-secondary rounded-5 btn-sm" for="btn-check2">
                    Art
                </label>
                <input type="checkbox" className="btn-check" id="btn-check3" autocomplete="off"/>
                <label className="btn btn-outline-secondary rounded-5 btn-sm" for="btn-check3">
                    Hand Carfts
                </label>
            </div>
            <div className="mb-3">
                <label for="formFile" className="form-label">Featured Image</label>
                <input className="form-control" type="file" id="formFile"/>
              </div>
            <div className="mb-3">
                <label for="editor" className="form-label"> Post Content</label>
                <ReactQuill className="editor" theme="snow" value={value} onChange={setValue} />
            </div>
            <div className='mt-5'>
               <button type="submit" className="btn btn-secondary">Publish</button>
            </div>
        </form>
    </div>
</section>
  )
}

export default Write