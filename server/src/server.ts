import "dotenv/config";
import http from "http";
import app from "./app";

import { sequelize } from "./database";
import { startSocketServer } from "./socket";

const SERVER_PORT = +(process.env.SERVER_PORT || 6666);
const server = http.createServer(app);

const startServer = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ force: false, alter: false });
    startSocketServer(server);

    server.listen(SERVER_PORT, () => {
      console.log(`Server start working on port: ${SERVER_PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
};

startServer();
