// what do we want to be able to do to the pictures?
//  find a picture --> fetchPicture (show)
//  see all pictures --> fetchPictures (index)
// add a picture --> createPicture (create)
// delete a picture --> deletePicture (destroy)

export const fetchPicture = (pictureId) => {
    return $.ajax({ 
        method: "GET",
        url: `api/picture/${pictureId}`
    })
};

export const fetchPictures = () => {
    return $.ajax({ 
        method: "GET",
        url: '/api/pictures'
    })
}

export const createPicture = (picture) => {
    return $.ajax({
        method: "POST",
        url: `/api/pictures/${picture}`,
        data: {picture}
    })
}

export const deletePicture = (pictureId) => {
    return $.ajax({ 
        method: "DELETE",
        url: `/api/pictures/${pictureId}`
    })
}