import db from '../../../libs/db'
import jwt from 'jsonwebtoken'
import authorization from './../../../middlewares/authorization';


const handlerIndex = async (req, res) => {

  if (req.method !== 'GET') return res.status(405).end();

  const auth = await authorization(req, res);

  const posts = await db('tb_posts');
  const count = await db('tb_posts').where({ status: 'active' }).count('status as active');

  res.status(200);
  res.json({
    message: 'Show Post Data Success',
    data: posts,
    count,
    auth
    // authorization,
    // verify
  })



  // const { authorization } = req.headers;

  // if (!authorization) return res.status(401).end();

  // const authSplit = authorization.split(' ');
  // const [authType, authToken] = [authSplit[0], authSplit[1]];

  // if (authType !== 'Bearer') return res.status(401).end();

  // try {
  //   const verify = jwt.verify(authToken, 'secret');

  //   const posts = await db('tb_posts');
  //   const count = await db('tb_posts').where({ status: 'active' }).count('status as active');

  //   res.status(200);
  //   res.json({
  //     message: 'Show Post Data Success',
  //     data: posts,
  //     count,
  //     // authorization,
  //     verify
  //   })

  // } catch (error) {
  //   res.status(401).end();
  // }

}

export default handlerIndex;