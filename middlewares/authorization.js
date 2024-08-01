import jwt from 'jsonwebtoken'

const authorization = async (req, res) => {
  return new Promise((resolve, reject) => {

    const { authorization } = req.headers;
  
    if (!authorization) return res.status(401).end();
  
    const authSplit = authorization.split(' ');
    const [authType, authToken] = [authSplit[0], authSplit[1]];
  
    if (authType !== 'Bearer') return res.status(401).end();
  
    const verify = jwt.verify(authToken, 'secret', (err, decode) => {
      if (err) return res.status(403).end();
      return resolve(decode);
    });
  
    
    return verify;
  })
}

export default authorization;
