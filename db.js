const massive = require('massive');
const connectionString = config.DBlink;
const massiveInstance = massive.connectSync({connectionString : connectionString})
module.exports = massiveInstance
// done
