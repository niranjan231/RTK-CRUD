import "./App.css";
import { FetchApi } from "./API/FetchApi";
import { useEffect, useState } from "react";
import { deleteApi } from "./API/DeleteApi";
import { updateApi } from "./API/UpdateApi";




const Card = () => {
    const [data, setdata] = useState([])
    useEffect(() => {
        FetchApi()
            .then(res => {
                console.log(res.data)
                setdata(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])




    // Delete method
    const handleDeleteCard = (postId) => {
        deleteApi(postId)
            .then((res) => {
                setdata(data.filter((item2) => item2.id !== postId))
                console.log(`Post with ID ${postId} deleted successfully.`);
            })
            .catch(err => {
                console.log(err)
            })
    }



    // Update Api



    return (
        <div className="card-1">
            {data.map((item) => {
                return <div class="card" style={{ width: "18rem" }}>
                    <div class="card-body">
                        <h5 class="card-title">{item.title}</h5>
                        <p class="card-text">{item.body}</p>
                        <p class="card-text">{item.catchPhrase}</p>
                        <a onClick={() => handleDeleteCard(item.id)} href="#" class="btn btn-primary">Delete</a>
                        <a  href="#" class="btn btn-primary">Edit</a>
                    </div>
                </div>
            })
            }
        </div>
    )
}
export default Card;