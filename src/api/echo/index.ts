import { parse } from "url";

export = (req: any, res: any) => {
  const { query } = parse(req.url, true);
  res.end("Hello world" + JSON.stringify(query));
};
