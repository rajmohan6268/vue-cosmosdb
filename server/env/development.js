// Replace with your dev values

const serverPort = process.env.SERVER_PORT || 3001;
const publicWeb = './server/www';

const cosmos = {
  accountName: 'connect-heroes',
  databaseName: 'heroes-db',
  key: 'xMbFw8yPdlifWwvhvO3tCGCzGY6Gi92qazoeILYbHNU4Vx5NqvVbU24VGEuD0c27kp8hTpNvKHkTF48x734ulg==',
  port: 10255
};

module.exports = {
  publicWeb,
  serverPort,
  cosmos
};
