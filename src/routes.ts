import { Request, Response } from 'express';
import os from 'os';
import { format } from 'date-fns'; 


export const getHello = (req: Request, res: Response) => {
  const name = req.query.name || 'World'; 
  res.setHeader('Content-Type', 'application/json');
  res.json({ greeting: `Hello, ${name}` }); 
};

// المعالج للمسار /info
export const getInfo = (req: Request, res: Response) => {
  const clientAddress = req.ip; 
  const hostName = os.hostname(); 
  const headers = req.headers; 
  const requestTime = format(new Date(), "yyyy-MM-dd'T'HH:mm:ssxxx"); 
 
  const responseData = {
    time: requestTime,
    client_address: clientAddress,
    host_name: hostName,
    headers
  };

  res.setHeader('Content-Type', 'application/json'); 
  res.json(responseData); 
};
