// Replace with your dev values

const serverPort = process.env.SERVER_PORT || 3001;
const publicWeb = './server/www';

const cosmos = {
  name: 'my-heroes-db',
  key: 'VBXJsJKnmpd4r1LiDBlxWru5XZBdMcJ4hq8DTDOLAogojOsiw74rztcXvWcX5yIJcF8CLp2bGA2iwtRFimRDvg==',
  port: 10255
};

module.exports = {
  publicWeb,
  serverPort,
  cosmos
};
