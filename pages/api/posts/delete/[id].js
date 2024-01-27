import db from '../../../../libs/db';
import authorization from '../../../../middlewares/authorization';

const handlerDelete = async (req, res) => {

  if (req.method !== 'DELETE') return res.status(405).end();

  const auth = await authorization(req, res);

  const { id } = req.query;
  
  const deleteSuccess = await db('tb_posts').where({ id }).first();

  const deleteData = await db('tb_posts').where({ id }).del();


  res.status(200);
  res.json({
    message: `Delete Post Data Success [id = ${id}]`,
    deleteSuccess,
    auth
  })

}

export default handlerDelete;
