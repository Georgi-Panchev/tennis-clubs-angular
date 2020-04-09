const jwt = require('jsonwebtoken');

function authenticate(request, response, next) {
    const authHeader = request.get('Authorization');
    if (!authHeader) {
        return response.status(401)
            .json({ message: 'Not Authorized!' });
    }

    const token = authHeader.split(' ')[1];

    let decodedToken;
    try {
        decodedToken = jwt.verify(token, 'verysecuresecret');
    } catch (error) {
        return response.status(401)
            .json({ message: 'Token Is Invalid!', error });
    }

    return decodedToken;
}

module.exports = {
    isAuth: (request, response, next) => {
        const decodedToken = authenticate(request, response, next);

        request.userId = decodedToken.userId;
        next();
    },

    isAdmin: (request, response, next) => {
        const decodedToken = authenticate(request, response, next);
        if (decodedToken.roles.length === 0) {
            return response.status(401)
                .json({ message: 'Not Authorized!' });
        }

        request.userId = decodedToken.userId;
        next();
    }
};

