import { useState, useEffect } from 'react'

const ReviewForm = (props) => {

  const [form, setForm] = useState({
    text: '',
    rating: 0,
    art_id: 0,
    user_id:props.user.id
  })

  useEffect(() => {
    // something to make it reset
  },[])

  const handleSubmit = async (evt) => {
    evt.preventDefault()
    form.art_id = props.art.objectID
    props.addReview(form)
  }

  function refreshPage() {
    window.location.reload(false);
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  return(
    <div className='flex flex-col min-h-full rounded-sm'>
      <h1 className='bg-amber-400/[.7] text-blue-600/[.9] hover:bg-blue-600/[.7] hover:text-amber-400/[.9] font-semibold text-3xl lg:text-5xl text-left'>share a few choice words.</h1>
      <form onSubmit={handleSubmit} >
        <textarea className='bg-black/[.7] text-white rounded-sm mt-2 text-4xl w-full font-semibold border-0' 
          name="text" id="text" 
          onChange={handleChange}
          value={form.text}
        ></textarea>
        <br />
        <button className='bg-green-100/[.45] hover:bg-green-300/[.4] text-white/[.8] hover:text-pink-500/[.8] font-semibold min-w-full text-4xl rounded-sm p-1' onClick={refreshPage}>submit review.</button>
      </form>
    </div>
  )
}

export default ReviewForm