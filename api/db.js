const mariadb = require("mariadb");

const pool = mariadb.createPool({
  host: "mariadb",
  user: "user01",
  password: "mypass01",
  database: "member_db",
});

module.exports = {
  getConnection: function () {
    return new Promise(function (resolve, reject) {
      pool
        .getConnection()
        .then(function (connection) {
          resolve(connection);
        })
        .catch(function (error) {
          reject(error);
        });
    });
  },
};
