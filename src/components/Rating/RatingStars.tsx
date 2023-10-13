'use client';

import { Component } from "react"
import { Rating } from 'flowbite-react';

class RatingStars extends Component {

  render() {
    return (
      <div className="mb-1 mt-1 flex items-center">
        <Rating>
          <Rating.Star />
          <Rating.Star />
          <Rating.Star />
          <Rating.Star />
          <Rating.Star filled={true} />
        </Rating>
        <span className="ml-3 mr-2 rounded bg-primary-100 px-2.5 py-0.5 text-xs font-semibold text-primary-800">
          <p>
            5.0
          </p>
        </span>
      </div>
    )
  }
  
}

export default RatingStars