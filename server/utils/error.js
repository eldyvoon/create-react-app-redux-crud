module.exports.handleError = (err, errMsg, res) => {
	res.json({
		success: false,
		error: `${errMsg}. ${err}` 
	})
}