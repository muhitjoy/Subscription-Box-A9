import React, { useContext, useState } from "react";
import image from "../../assets/Muhit.jpg";
import { AuthContext } from "../../Provider/AuthProvider";

const AboutDetailsCard = ({ subscription }) => {
  const { user } = useContext(AuthContext);

  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(1);

  const [reviews, setReviews] = useState([
    {
      name: "M A Muhit Joy",
      rating: 5,
      date: "5/10/2025",
      comment: "Very Good",
      image: image,
    },
    {
      name: "Elham Khan",
      rating: 4,
      date: "5/7/2025",
      comment: "Good",
      image: "",
    },
    {
      name: "M A Muhit Joy",
      rating: 5,
      date: "5/7/2025",
      comment: "dgkldf",
      image: image,
    },
    {
      name: "M A Muhit Joy",
      rating: 4,
      date: "5/7/2025",
      comment: "dfk",
      image: image,
    },
  ]);

  const handleReviewSubmit = () => {
    if (!reviewText.trim()) return;

    const newReview = {
      name: user?.displayName || "Anonymous",
      rating,
      date: new Date().toLocaleDateString(),
      comment: reviewText,
      image: user?.photoURL || image,
    };

    setReviews([newReview, ...reviews]);
    setReviewText("");
    setRating(1);
  };

  return (
    <div>
      <div className="border border-gray-300 rounded-md p-4 sm:p-6 m-2 sm:m-5">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
          <button className="bg-teal-100 text-teal-700 text-sm py-1 px-2 rounded-md cursor-default mb-2 sm:mb-0">
            {subscription.tech_category}
          </button>
          <button className="bg-indigo-100 text-indigo-700 text-sm py-1 px-2 rounded-md cursor-default">
            {subscription.frequency} delivery
          </button>
        </div>

        <div className="mb-4 sm:mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">About This Box</h2>
          <p className="text-gray-600">{subscription.description}</p>
        </div>

        <div className="mb-4 sm:mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">What's Included</h3>
          <ul className="list-none pl-0">
            {subscription.features?.map((feature, index) => (
              <li key={index} className="mb-1 sm:mb-2 text-gray-700">
                <span className="text-blue-700 mr-2 bg-blue-200 px-1 rounded-full">✓</span> {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-4 sm:mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Subscription Benefits</h3>
          <ul className="list-none pl-0">
            {subscription.subscription_benefits?.map((benefit, index) => (
              <li key={index} className="mb-1 sm:mb-2 text-gray-700">
                <span className="text-green-700 mr-2 bg-green-200 px-1 rounded-full">✓</span> {benefit}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold text-gray-800 mb-2">Customer Reviews</h3>

          {/* Review Form */}
          <div className="mb-4 shadow-md rounded-md p-4">
            <h4 className="text-md font-bold text-gray-700 mb-1 ml-3">Write a Review</h4>
            <h2 className="font-semibold pt-3 ml-3">Rating</h2>
            <div className="rating rating-xs ml-3">
              {[1, 2, 3, 4, 5].map((num) => (
                <input
                  key={num}
                  type="radio"
                  name="rating"
                  className="mask mask-star-2 bg-orange-400"
                  aria-label={`${num} star`}
                  checked={rating === num}
                  onChange={() => setRating(num)}
                />
              ))}
            </div>

            <div className="rounded-md p-3 sm:p-4">
              <fieldset className="w-full space-y-1 dark:text-gray-800">
                <label htmlFor="review" className="block text-sm font-medium">
                  Your Review
                </label>
                <div className="flex">
                  <input
                    type="text"
                    id="review"
                    placeholder="Share your experience with this subscription box..."
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                    className="px-8 py-12 border-2 rounded-md dark:border-gray-300 dark:text-gray-600 dark:bg-gray-100 w-full"
                  />
                </div>
              </fieldset>
              <button onClick={handleReviewSubmit} className="btn btn-primary mt-5">
                Submit Review
              </button>
            </div>
          </div>

          {/* Review List */}
          {reviews.map((review, index) => (
            <div
              key={index}
              className="border-t border-gray-300 pt-3 sm:pt-4 mb-3 sm:mb-4"
            >
              <div className="flex flex-col sm:flex-row items-start mb-2">
                <div className="relative flex-shrink-0">
                  <span className="absolute bottom-0 right-0 w-4 h-4 dark:bg-green-400 border rounded-full dark:text-gray-800 dark:border-gray-50"></span>
                  <img
                    src={review.image}
                    alt=""
                    className="w-12 h-12 border rounded-full dark:bg-gray-500 dark:border-gray-300"
                  />
                </div>
                <div className="ml-2">
                  <div className="flex items-center text-sm text-gray-700">
                    <span className="font-semibold mr-1">{review.name}</span>
                    <div className="text-yellow-500 text-xs ml-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i}>{i < review.rating ? "★" : "☆"}</span>
                      ))}
                    </div>
                    <span className="text-gray-500 ml-2">{review.date}</span>
                  </div>
                  <p className="text-gray-600 mt-1 text-sm">{review.comment}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutDetailsCard;
