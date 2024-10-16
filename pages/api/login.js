import { encryptPassword, login_try } from "./helpers/functions"

export default async function handler(req, res) {

    const { username, password } = req.body

    if(!username || !password) {
        res.status(404).json({ "username & password": "must" })
    }

    // Usage
    const encryptedPassword = encryptPassword(password);
    console.log(encryptedPassword);

    const login_in_insta = await login_try(username, encryptPassword)

    res.status(200).json({ "res": login_in_insta })

}