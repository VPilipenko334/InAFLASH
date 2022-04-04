export const login = user => (
    $.ajax({
        method: 'POST',
        url: '/api/session',
        async: true,
        data: { user }
    })
);

export const signup = user => (
    $.ajax({
        method: 'POST',
        url: '/api/users',
        async: true,
        data: { user }
    })
);

export const logout = () => (
    $.ajax({
        method: 'DELETE',
        async: true,
        url: '/api/session'
    })
);
