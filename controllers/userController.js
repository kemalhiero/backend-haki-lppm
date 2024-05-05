// controller user

exports.register = async(req, res) => {
    try {
        res.json({message: 'ini register'})
    } catch (error) {
        console.error(error)
        res.status(500).json({message: error.message})
    }
}
