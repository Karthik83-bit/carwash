import React, { useState } from 'react'
import { features } from '../data'
import BookingForm from './BookingForm'

function Home() {
    const [Features, setFeatures] = useState(features)
  return (
    <div>Home
    <div>
        {
            Features.map(ele=>{
              return  <h1>
                    {ele.name}
                </h1>
            })
        }
    </div>
    <BookingForm/>
    </div>
  )
}

export default Home