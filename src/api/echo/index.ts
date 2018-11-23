import { parse } from "url";
import * as http from "http";

export = (req: Request, res: http.ServerResponse) => {
  const { query } = parse(req.url, true);
  res.end("Hello world" + JSON.stringify(query));
};
