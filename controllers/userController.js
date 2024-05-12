import user from "../models/user.js";

export async function register(req, res) {
    try {
        res.json({message: 'ini register'})
    } catch (error) {
        console.error(error)
        res.status(500).json({message: error.message})
    }
}
