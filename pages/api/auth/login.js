import db from '../../../libs/db'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'


const handlerLogin = async (req, res) => {

  if (req.method !== 'POST') return res.status(405).end();

  const { username, email, password } = JSON.parse(req.body);

  const checkEmail = await db('tb_users').where({ email }).first();

  if (!checkEmail) return res.status(401).end();

  const checkPassword = await bcrypt.compare(password, checkEmail.password);

  if (!checkPassword) return res.status(401).end();

  const token = jwt.sign({
    id: checkEmail.id,
    email: checkEmail.email
  }, 'secret', { expiresIn: '7d' })

  res.status(200);
  res.json({
    message: `Login Successfully`,
    checkEmail,
    passwordTest: checkEmail.password,
    checkPassword,
    token
  })

}

export default handlerLogin;