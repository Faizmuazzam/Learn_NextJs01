import db from '../../../../libs/db';
import authorization from '../../../../middlewares/authorization';

const handlerUpdate = async (req, res) => {

  if (req.method !== 'PUT') return res.status(405).end();

  const auth = await authorization(req, res);

  const { id } = req.query;

  const { title, desc, status } = JSON.parse(req.body);


  const update = await db('tb_posts').where({ id }).update({
    title,
    desc,
    status
  })

  const updatedData = await db('tb_posts').where({ id }).first();

  res.status(200);
  res.json({
    message: `Update Post Data Success [id = ${id}]`,
    updatedData,
    auth
  })

}

export default handlerUpdate;
