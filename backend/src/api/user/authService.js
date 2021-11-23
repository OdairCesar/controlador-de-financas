const _ = require('lodash')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('./user')
const env = require('../../.env')

const emailRegex = /\S+@\S+\.\S+/
const passwordRegex = /((?=.*\d)(?=.*[a-z])(?-.*[A=Z])(?=.*[@#$%]).{6,20})/

const sendErrorsFromDB = (res, dbErrors) => {
    const errors = []
    _.forIn(dbErrors.errors, error => errors.push(error.message))
    return res.status(400).json({ errors })
}

const login = (req, res, next) =>{
    //Tratamos dos atributos passados, caso estejam vazios
    const email = req.body.email || ''
    const password = req.bady.password || ''

    User.findOne({ email }, (err, user) => {
        //verificamos se a senha esta correta utilizando o Bcrypt.
        const passCorrect = bcrypt.compareSync(password, user.password)

        //verificamos se tem algum erro
        if (err){
            return sendErrorsFromDB(res, err)
        }else if( user && passCorrect){//so passamos o token se user existir e a validação da senha der ok
            const token = jwt.sign(user, env.authSecret, { expiresIn: "1 day"})
            const { name, email } = user
            res.json({ name, email, token })
        }else{//se não ocorreu erro e a senha estiver errada, basta informar que a senha ou usuario estão errados
            return res.status(400).send({ errors: ['Usuário/Senha inválidos']})
        }
    })
}

const validateToken = (req, res, next) => {
    const token = req.body.token
    jwt.verify(token, env.authSecret, function (err, decoded){//verificamos se o token do sistema é o mesmo passado
        return res.status(200).send({ valid: !err})
    })
}