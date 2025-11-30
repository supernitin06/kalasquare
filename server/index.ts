import http from 'http';
import app from './server.js';  // <- IMPORTANT: .js after TS compiles
import dotenv from 'dotenv';


dotenv.config();
const PORT = process.env.PORT || 5000;


const server = http.createServer(app);

server.listen(PORT, () => {
  console.log('server running on port', `http://localhost:${PORT}`);
});
