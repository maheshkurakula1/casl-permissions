const defineAbilityFor = require('./defineAbility')
const Site = require('./schema');
const checkAccess = require('./middleware');

module.exports = app => {
    app.post('/sites',checkAccess.getAbilities, getSites);
    app.post('/create', createSite);
};

const getSites = async (req, res) => {
    try {
        console.log("Sample get api", req.Ability.can('read', 'Site'))
        const query = await Site.accessibleBy(req.Ability, 'read');
        // const allSites = await query.find({'is_active': true});
        // console.log(allSites, "####")
        return res.send({status: true, message: "sample get api", data: query})
    } catch (error) {
        console.log(error)
        return res.send({status: false, error})
    }
    
}

const createSite = async(req, res) => {
    try {
        console.log(req.body,"!!!")
        const createSite = await Site.create({siteName: req.body.siteName, orgName: req.body.org, is_active: true})
        // .accessibleBy(defineAbilityFor(req.body.userDetails))
        console.log(createSite, "Site Created")
        return res.send({status: true, message: "Site Created", data: createSite})
    } catch (error) {
        console.log(error)
        return res.send({status: false, error})
    }
}