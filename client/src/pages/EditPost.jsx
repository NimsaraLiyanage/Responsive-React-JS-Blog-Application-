import React,{useState} from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

const EditPost = () => {
  const [title,setTitle]=useState('')
  const [category,setCategory]=useState('Uncategorized')
  const[description,setDescription]=useState('')

  const modules = {
   toolbar:[
            [{'header':[1,2,3,4,5,6,false]}],
            ['bold','italic','underline','strike','blockquote'],
            [{'list':'ordered'},{'list':'bullet'},{'indent':'-1'},{'indent':'+1'}],
            ['link','image'],
            ['clean']
   ],
  }
  const formats =[
    'header',
    'bold','italic','underline','strike','blockquoto',
    'list','bullet','indent',
    'link','image'
  ]

const POST_CATEGORIES = ["Science","Maths","English","Commerce","IT","Art","Sinhala","History"]

  return (
    <section className="create-post">
      <div className="container">
        <h2>Edit Post</h2>
        <p className="form_error-message">
          This is an error message
        </p>
        <form className="form create-post_form">
          <input type="text" placeholder='Title' value={title} onChange={e=>setTitle(e.target.value)}autoFocus/>
          <select name="category" value={category} onChange={e => setCategory(e.target.value)}>
          <option value="Uncategorized">Uncategorized</option>
            {
              POST_CATEGORIES.map(cat =><option key={cat}>{cat}</option>)
            }
             </select>
            <ReactQuill modules={modules} formats={formats} value={description} onChange={setDescription}/>
          <button type="submit" className='btn primary'>Update</button>
         
        </form>
      </div>
    </section>
  )
}

export default EditPost