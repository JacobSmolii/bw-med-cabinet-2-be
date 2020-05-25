// Update with your config settings.


module.exports = {

  development: {
    client: 'postgresql',
    useNullAsDefault: true,
    migrations: {
      directory: './database/migrations'
    },
    connection: {
      filename: './database/medCabinet.sqlite3'
    }
  },
  pool:{
    afterCreate:(conn,done) => {
      conn.run("PRAGMA foreign_key = ON",done)
    }
  },

  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
  },
};


