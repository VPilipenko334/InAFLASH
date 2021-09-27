// what do we want to be able to do to the pictures?
//  find a picture --> fetchPicture (show)
//  see all pictures --> fetchPictures (index)
// add a picture --> createPicture (create)
// delete a picture --> deletePicture (destroy)


export const fetchPicture = (pictureId) => {
    return $.ajax({
        method: "GET",
        url: `api/pictures/${pictureId}`
    })
};

export const fetchPictures = () => (
    $.ajax({
        method: 'GET',
        url: 'api/pictures',
    })
);

export const createPicture = (formData) => {
    return $.ajax({
        method: 'POST',
        url: '/api/pictures',
        data: formData,
        contentType: false,
        processData: false,
    })
}

export const deletePicture = (pictureId) => {
    return $.ajax({
        method: "DELETE",
        url: `/api/pictures/${pictureId}`
    })
}