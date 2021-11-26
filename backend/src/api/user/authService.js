const _ = require('lodash')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('./user')
const env = require('../../.env')

const emailRegex = /\S+@\S+\.\S+/
const passwordRegex = /((?=.*\d)(?=.*[a-z])(?=.*[A=Z])(?=.*[@#$%]).{6,20})/

const sendErrorsFromDB = (res, dbErrors) => {
    const errors = []
    
    _.forIn(dbErrors.errors, error => errors.push(error.message))
    return res.status(400).json({ errors })
}

//Segurança para efetuar logins
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
    //Tratamos dos atributos passados, caso estejam vazios
    const token = req.body.token || ''

    //verificamos atraves do jwt, se o token do sistema, é o mesmo passado pelo usuario
    jwt.verify(token, env.authSecret, function (err, decoded){
        return res.status(200).send({ valid: !err})
    })
}

//Segurança para efetuar cadastros 
const signup = (req, res, next) => {
    //Tratando os dados recebidos
    const name = req.body.name || ''
    const email = req.body.email || ''
    const password = req.boby.password || ''
    const confirmPassword = req.body.confirmPassword || ''

    //Validando o formado do e-mail digitado
    if(!email.match(emailRegex)){
        return res.status(400).send({ 
            errors: ['O e-mail informa está inválido']
        })
    }

    //Validando o formato da senha digitada
    if(!password.match(passwordRegex)){
        return res.status(400).send({
            errors: ['Senha precisa ter: uma letra maiúscula, uma letra minúscula, um número, um caractere especial(@#$%) e tamanha entre 6-20']
        })
    }

    //Validando a senha de confirmação
    const salt = bcrypt.genSaltSync()
    const passwordHash = bcrypt.hashSync(password, salt)
    if(!bcrypt.compareSync(confirmPassword, passwordHash)){
        return res.status(400).send({
            errors: ['Senhas não conferem']
        })
    }

    //Verificando se o usuario já existe na base de dados
    User.findOne({ email }, (err, user) => {
        if(err){
            return sendErrorsFromDB(res, err)
        }else if(user){
            return res.status(400).send({
                errors: ['Usuário já cadastrado']
            })
        }else{
            const newUser = new User({ name, email, password: passwordHash})
            newUser.save(err => {
                if(err){
                    return sendErrorsFromDB(res, err)
                }else{//Tudo estando ok, nós logamos na conta criada
                    login(req, res, next)
                }
            })
        }
    })
}

module.exports = { login, signup, validateToken }