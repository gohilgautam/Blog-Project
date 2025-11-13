module.exports.success = (status, error, message, result) => {
    return { status, error, message, result }
}

module.exports.error = (status = 500, error, message) => {
    return { status, error, message }
}