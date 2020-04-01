const connection = require('../database/connections');

module.exports = {
    async index (req, res) {
        const users = await connection('users').select('*');

        return res.json(users);
    },

    async create(req, res) {
        const { name, email, password } = req.body;

        await connection('users').insert({
            name,
            email,
            password
        })

        return res.json({ email });
    }
}