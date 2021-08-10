import React from 'react';
import PictureFeed from './picturefeed';

class HomePage extends React.Component {
    constructor(props) {
        super(props)
    }

    // componentWillMount() {
    //     this.props.fetchPictures()
    //     //likes here too
    // }

    render() {
        return (
            <div className="homepage">
                <h2>Welcome to the Homepage!</h2>
                    <br/>
                <button><Link to="/" className="back-home">Back to the Main Page</Link></button>
                    {/* <ul className="pictures-feed"> */}
                        {/* {pictures.map((picture, index) => (
                            <PictureFeed 
                            key={index}
                            picture={picture}
                            session={session}
                            //likes
                            //createlike
                            //deletelike 
                            />
                        )} */}
                    {/* </ul> */}
             </div>
            )  
        }
}

export default HomePage; 