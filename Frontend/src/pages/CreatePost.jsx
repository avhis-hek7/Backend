import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function CreatePost() {

    const navigate = useNavigate()

    const handleSubmit = async (e) =>{
        e.preventDefault()

        const fromData = new FormData(e.target)
        axios.post("http://localhost:3000/create-post", fromData)
        .then((res)=>{
            navigate("/feed")
        })
        .catch((err)=>{
            console.log(err);
            alert("Error creating post");
        })


    }




  return (
    <section className='create-post-section'>
        <h1>Create post</h1>

        <form onSubmit={handleSubmit}>
            <input type="file" name='image' accept='image/*' />
            <input type="text" name="caption" placeholder='Enter caption' required />
            <button type='submit'>Submit</button>


        </form>

    </section>
  )
}

export default CreatePost