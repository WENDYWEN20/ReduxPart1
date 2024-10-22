import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {nanoid} from '@reduxjs/toolkit'

import { postAdded } from './postsSlice.js'
export const AddPostForm=()=>{
    const [title,setTitle]=useState('')
    const [content,setContent]=useState('')
    const onTitleChanged=e=>setTitle(e.target.value)
    const onContentChanged=e=>setContent(e.target.value)

    const dispatch=useDispatch()
    const onSavePostClicked=()=>{
        if (title&&content){
            dispatch(
                postAdded({
                    id: nanoid(),
                    title,
                    content
                })
            )
                setTitle('')
                setContent('')
        }
    }

    return (
        <section>
<h2>Add a New Post</h2>

 <form>
    <label htmlFor='postTitle'>
        Post Title:
    </label>
    <input type='text' id='postTitle' name='postTitle' value={title} onChange={onTitleChanged}></input>
    <label htmlFor='postContent'>
        Content:
    </label>
    <input type='text' id='postTitle' name='postTitle' value={title} onChange={onContentChanged}></input>

 


 </form>
  <button type="button" onClick={onSavePostClicked}>Save Post </button>
        </section>
    )


}