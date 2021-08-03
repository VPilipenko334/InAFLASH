//signup --> makes an AJAX request that creates a new user 
//login --> should make an AJAX request that creates a new session 
//logout --> makes an AJAX request that deletes the currest session


export const signup = (user) => {
    return $.ajax({
        url: 'api/user',
        method: 'POST',
        data: {user}
    })
}

export const login = (session) => {
    return $.ajax({
        url: '/api/session',
        method: 'POST',
        data: {session}
    })
}

export const logout = (sessionId) => {
    return $.ajax({
        url: `api/session/${sessionId}`,
        method: 'DELETE'
    })
}

