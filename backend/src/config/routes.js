const express = require('express')

module.exports = function(server) {

    /*
     * Rotas privadas
     */
    const protectedApi = express.Router()
    server.use('/api', protectedApi)

    protectedApi.use(auth)//Aqui fazemos ele passar pelo auth feito anteriormente
    
    const BillingCycle = require('../api/billingCycle/billingCycleService')// Rotas do Ciclo de Pagamento, agora são protegidas
    BillingCycle.register(protectedApi, '/billingCycles')

    /*
     * Rotas publicas
     */
    const openApi = express.Router()
    server.use('/oapi', openApi)

    const AuthService = require('../api/user/AuthService')
    openApi.post('/login', AuthService.login)//para fazer o login
    openApi.post('/signup', AuthService.signup)//para fazer o cadastro
    openApi.post('/validateToken', AuthService.validateToken)//para verificar o token
}