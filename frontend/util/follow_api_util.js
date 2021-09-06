export const createFollow = followerId => (
    $.ajax({
        method: 'POST',
        url: '/api/follows',
        data: { id: followerId }
    })
);

export const deleteFollow = followId => (
    $.ajax({
        method: 'DELETE',
        url: `/api/follows/${followId}`
    })
)