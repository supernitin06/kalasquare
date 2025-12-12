import http from 'http';
import app from './server.js';  // <- IMPORTANT: .js after TS compiles
import dotenv from 'dotenv';


dotenv.config();
const PORT = process.env.PORT;


const server = http.createServer(app);

server.listen(PORT, () => {
  console.log('server running on port', `http://localhost:${PORT}`);
});

server.on('error', (err: NodeJS.ErrnoException) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`❌ Port ${PORT} is already in use. Please stop the process using this port or use a different port.`);
    console.error(`   To find the process: netstat -ano | findstr :${PORT}`);
    console.error(`   To kill the process on Windows: taskkill /PID <PID> /F`);
  } else {
    console.error('Server error:', err);
  }
  process.exit(1);
});