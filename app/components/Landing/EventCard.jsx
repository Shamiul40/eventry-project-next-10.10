import Image from 'next/image'
import React from 'react'
import googleImage from "/public/assets/events/google-io-2023-1.png"
import Link from 'next/link'
import ActionButtons from '../ActionButtons'

export default function EventCard() {
  return (
    <div className="overflow-hidden rounded-md bg-[#242526]">
          <Image src={googleImage} alt="Event 1" className="w-full" />

          <div className="p-3">
            <Link href="./details.html" className="font-bold text-lg">Google I/O Extended</Link>
            <p className="text-[#9C9C9C] text-sm mt-1">Rangpur, Dhaka, Bangladesh, Rangpur, Bangladesh</p>
            <div className="text-[#737373] text-sm mt-1">
              <span>1k Interested</span>
              <span>|</span>
              <span>40K Going</span>
            </div>

            {/* <!-- Buttons --> */}
            <ActionButtons fromDetails={true}></ActionButtons>
          </div>
        </div>
  )
}
