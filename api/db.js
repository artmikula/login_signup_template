const mariadb = require("mariadb");

const pool = mariadb.createPool({
  host: "",
  user: "",
  password: "",
  database: "",
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
