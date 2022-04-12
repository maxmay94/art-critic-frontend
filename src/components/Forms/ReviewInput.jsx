const ReviewInput = ({ form, handleChange }) => {
  return (
    <div>
      <label htmlFor="text">Review</label>
      <textarea name="text" id="text" cols="30" rows="10"></textarea>
    </div>
  )
}

export default ReviewInput