import express from 'express'; // Importing Express framework
import { getHello, getInfo } from './routes'; // Importing route handlers

const app = express(); // Creating an instance of Express
const PORT = process.env.PORT || 3000; // Setting the server port

// Defining routes and attaching route handlers
app.get('/hello', getHello);
app.get('/info', getInfo);

// Starting the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
