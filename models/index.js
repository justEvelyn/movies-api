const {Movie} = require('./Movie')
const {User} = require('./User')

User.belongsToMany(Movie, {through: "reviews"})
Movie.belongsToMany(User, {through: "reviews"})

//swag testingg 


module.exports = { Movie, User}