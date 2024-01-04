const notFound = (req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`)
    res.status(404)
    next(error)
}

//overwrite default error handler
const errorHandler = (err, req, res, next) => {
    let statusCode = res.statusCode === 200 ? 500 : res.statusCode
    let message = err.message
    
    //check for mongoose bad object ID
    if (err.name === 'CastError' && err.kind === 'ObjectID') {
        message = `Resource Not Found. Sorry!`
        statusCode = 404
    }

    res.status(statusCode).json({
    message,
    stack: process.env.NODE_ENV === 'production' ? 'Aw pancakes' : err.stack
})
}

export {notFound, errorHandler}