export const fetchCurrentUser = (userId) => {
    return $.ajax({
        method: "GET",
        url: `api/users/${userId}`
    })
};