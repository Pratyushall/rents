const handler = async (req, res) => {
  if (req.method === "GET") {
    return "It's get";
  }
  return JSON.stringify(req);
};

export default handler;
