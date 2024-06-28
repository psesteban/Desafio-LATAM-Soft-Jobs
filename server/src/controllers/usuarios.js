import * as sql from '../models/consultas.js'

// GET
export const getCredenciales = (req, res) => sql.verificarCredenciales(req.body)
  .then((token) => res.status(200).json({ token }))
  .catch((error) => res.status(500).json(error)
  )

// POST
export const postNuevoUsuario = (req, res) => sql.registrarUsuario(req.body)
  .then((result) => res.status(200).json(result))
  .catch((error) => res.status(500).json({ status: false, code: 500, message: error })
  )

export const getDatos = (req, res) => sql.entregarDatos(req.user)
  .then((result) => res.status(200).json(result))
  .catch((error) => res.status(500).json(error)
  )
