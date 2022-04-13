import ReviewCard from "../../components/Cards/ReviewCard"

const ReviewIndex = ({user, reviews}) => {
  return(
    <div className="flex-wrap min-h-screen">
      {reviews &&
        reviews.map((review, i) => (
        <ReviewCard 
          review={review}
          key={review.id + i}
        />
      ))}
    </div>
  )
}

export default ReviewIndex