import React from 'react';
import PictureFeed from './picturefeed';

class HomePage extends React.Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        this.props.fetchPictures()
        //likes here too
    }

    render() {
        const { pictures, session } = this.props
        // if (!pictures) {
        //     return null 
        // } else {
            return (
                <div className="homepage">
                    <h2>Welcome to the Homepage!</h2>
                    <ul className="pictures-feed">
                        {pictures.map((picture, index) => (
                            <PictureFeed 
                            key={index}
                            picture={picture}
                            session={session}
                            //likes
                            //createlike
                            //deletelike 
                            />
                        ))}
                    </ul>
                </div>
            )
        }
    }
// }

export default HomePage; 