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