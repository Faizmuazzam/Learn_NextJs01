import db from '../../../libs/db'
import authorization from '../../../middlewares/authorization';

const handlerCreate = async (req, res) => {

  // try {
  if (req.method !== 'POST') return res.status(405).end();

  const auth = await authorization(req, res);

  const { title, desc, status } = JSON.parse(req.body);

  const create = await db('tb_posts').insert(
    {
      title,
      desc,
      status
    }
  );

  const sendData = await db('tb_posts').where({id : JSON.parse(create)}).first();

  res.status(200);
  res.json({
    message: `Created Successfully`,
    sendData,
    auth
  })

  // } catch (error) {
  //   res.json({
  //     message: error
  //   })
  // }

}

export default handlerCreate;