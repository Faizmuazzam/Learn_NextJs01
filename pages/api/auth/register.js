import db from '../../../libs/db'
import bcrypt from 'bcryptjs'

const handlerRegister = async (req, res) => {

  if (req.method !== 'POST') return res.status(405).end();

  const { username, email, password } = JSON.parse(req.body);
  

  const salt = bcrypt.genSaltSync(10);
  const passwordHashed = bcrypt.hashSync(password, salt);

  const register = await db('tb_users').insert(
    {
      username,
      email,
      password : passwordHashed
    }
  );

  const dataRegister = await db('tb_users').where({id : JSON.parse(register)}).first();

  res.status(200);
  res.json({
    message: `Register Successfully`,
    // username,
    // email,
    // password,
    // salt,
    // passwordHashed,
    data: dataRegister,
    // register : JSON.parse(register);
  })

}

export default handlerRegister;