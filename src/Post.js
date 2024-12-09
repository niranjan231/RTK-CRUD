import { useState } from "react";
import "./App.css"
import { postUserData } from "./API/PostApi";





const Post = () => {
    const [userId, setUserId] = useState("")
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const handleUserId = (e) => {
        setUserId(e.target.value)
    }
    const handleTitle = (e) => {
        setTitle(e.target.value)
    }
    const handleBody = (e) => {
        setBody(e.target.value)
    }

    const handleSubmitForm = (e) => {
        e.preventDefault()
        const formdata = { userId, title, body }
        postUserData(formdata)
        .then(res=>{
            console.log(res)
        })
        .catch(err=>{
            console.log(err)
        }
    )}





    return (
        <div>
            <form onSubmit={handleSubmitForm} style={{ margin: "auto" }} class="mb-3, w-50">
                <label for="exampleFormControlInput1" class="form-label"></label>
                <input value={userId} onChange={handleUserId} type="text" class="form-control" placeholder="UserId" />
                <label for="exampleFormControlInput1" class="form-label"></label>
                <input value={title} onChange={handleTitle} type="text" class="form-control" placeholder="title" />
                <label for="exampleFormControlInput1" class="form-label"></label>
                <input value={body} onChange={handleBody} type="text" class="form-control" placeholder="body" />
                <button style={{ marginTop: "10px", border: "none", backgroundColor: "green", color: "white", width: "200px", height: "50px" }}>Submit</button>
            </form>
        </div>
    )
}
export default Post;