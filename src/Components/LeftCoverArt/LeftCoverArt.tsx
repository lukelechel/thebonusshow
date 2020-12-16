import React from 'react'
import './LeftCoverArt.css'

const awsResourceUriPrefix = "https://thebonusshow-resources.s3.us-east-2.amazonaws.com/"

const LeftCoverArt = () => (<img
    srcSet={`${awsResourceUriPrefix}thebonusshow-cover-small.png 400w,
            ${awsResourceUriPrefix}thebonusshow-cover-medium.png 1000w`}
    src={`${awsResourceUriPrefix}thebonusshow-cover-full.jpg`}
    alt="The Bonus Show cover art"
    id="cover-art" />)

export default LeftCoverArt