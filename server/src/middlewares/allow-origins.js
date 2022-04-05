export function allowOrigins(req, res, next) {
  const allowedOrigins = ['localhost:8585']
  const origin = req.headers.origin
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin)
  }
  next()
}
