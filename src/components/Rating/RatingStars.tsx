'use client';

import { Rating } from 'flowbite-react';

export default function RatingStars() {
  return (
    <Rating>
      <Rating.Star />
      <Rating.Star />
      <Rating.Star />
      <Rating.Star />
      <Rating.Star filled={false} />
    </Rating>
  )
}