require('dotenv').config()

const config = {
  api: {
    port: process.env.API_PORT || 3000,
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'unmalsecreto',
  },
  mysql: {
      host: process.env.MYSQL_HOST,
      user: process.env.MYSQL_USER ,
      password: process.env.MYSQL_PASS || 'hQ8gtxIQ9o',
      database: process.env.MYSQL_DB || 'vyU7DCqzKX',
  },
}

module.exports = { config };