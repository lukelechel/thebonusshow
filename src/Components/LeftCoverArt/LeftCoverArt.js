import React from 'react'
import './LeftCoverArt.css'

class LeftCoverArt extends React.Component {
    render() {
        return (
            <div id="leftCoverArt">
                <img
                    srcSet="../../resources/images/thebonusshow-cover-small.png 400w,
                            ../../resources/images/thebonusshow-cover-medium.png 1000w"
                    src="../../resources/images/thebonusshow-cover-full.jpg"
                    alt="The Bonus Show cover art" />
            </div>
        )
    }
}

export default LeftCoverArt