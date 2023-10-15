import Link from "next/link";
import Image from "next/image";

import React from 'react'

const card = () => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
      <Image width={200} height={150} src="/images/products/the-ordinary-retinol-0.2-in-squalane-30ml.webp" alt="prod" className="rounded-xl"/>
      </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions">
        <button className="btn btn-primary">Buy Now</button>
      </div>
    </div>
    </div>
  )
}

export default card