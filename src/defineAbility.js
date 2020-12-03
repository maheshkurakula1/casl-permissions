const casl = require('@casl/ability')
const { AbilityBuilder, Ability } = casl;

module.exports = (user)=> {

  const { can, cannot, rules } = new AbilityBuilder();
    console.log(user)

  if (user.isOwner) {
    can('manage', 'Site'); // read-write access to everything
  } else if(user.isSiteAdmin) {
    console.log("**************")
    can(['read', 'update'], 'Site', {'is_active': false})
    // cannot(['create', 'delete'], 'Site')
  }

  // cannot('read', 'Site');

  return new Ability(rules);
}