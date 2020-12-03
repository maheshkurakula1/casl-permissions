const { AbilityBuilder } = require('@casl/ability');
const defineAbilityFor = require('./defineAbility')
const Site = require('./schema');

const getSites = (req, res, next) =>{
    if(defineAbilityFor(req.body.userDetails).can('read', 'Site')){
       return next();
    }else{
        res.send({status: false, message: "Access Restricted"})
    }
}

const getAbilities = (req, res, next) => {
    req.Ability = req.body.userDetails ? defineAbilityFor(req.body.userDetails): defineAbilityFor(null);
    const abil = req.Ability.can('read', 'Site');
    console.log(abil, "++++++++++")
    next();
}

module.exports = {
    getSites,
    getAbilities
}