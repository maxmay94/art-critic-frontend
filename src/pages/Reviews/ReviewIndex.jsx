import ReviewCard from "../../components/Cards/ReviewCard"

const ReviewIndex = ({user, reviews, deleteReview}) => {
  console.log('REVIEWS ',reviews)
  return(
    <div className="min-h-screen">
      <h1 className='mx-20 my-5 font-semibold rounded-sm border-0 bg-amber-500/[.7] text-black/[.8] hover:text-white/[.8] text-6xl'> judgement. </h1>
      <div className="bg-black/[.6] p-5 lg:mx-20 sm:mx-5 min-h-full rounded">
        <div className="m-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
          {reviews ?
            reviews.map((review, i) => (
              review.art_id &&
              <div key={review.id} className="group relative" >
                <ReviewCard 
                  review={review}
                  user={user}
                  deleteReview={deleteReview}
                />
              </div>
          ))
          :
            <div> 
              <h1 className='mx-20 my-5 font-semibold rounded-sm border-0 bg-amber-500/[.7] text-black/[.8] hover:text-white/[.8] text-6xl'> no reviews yet. </h1>
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default ReviewIndex