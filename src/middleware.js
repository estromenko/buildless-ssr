export function loggingMiddleware(req, res, next) {
  const now = new Date(Date.now()).toLocaleTimeString();
  console.info(now, req.originalUrl, req.method, res.statusCode);
  next();
}

export function errorHandlingMiddleware(err, _req, res, _next) {
  console.error(err.stack);
  res.status(500).send("Internal Server Error");
}
