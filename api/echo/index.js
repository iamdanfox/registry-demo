const { parse } = require("url");

module.exports = (req, res) => {
  const { query } = parse(req.url, true);
  res.end("Hello world" + JSON.stringify(query));
};