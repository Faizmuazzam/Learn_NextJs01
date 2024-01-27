const postApi = (req, res) => {
  res.status(200);
  res.json({
    message : 'Ini Testing Json PostApi'
  })
}

export default postApi;