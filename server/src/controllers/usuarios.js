import * as sql from '../models/consultas.js'
import jwt from 'jsonwebtoken'

// GET
export const getCredenciales = async (req, res) => {
  try {
    const { email, password } = req.body
    const credenciales = await sql.verificarCredenciales(email, password)
    console.log(credenciales)
   
 
  } catch (error) {
    console.error(error); 
    res.status(500).json({ status: false, code: 500, message: "Error al verificar credenciales" })
  }
}

  // POST
  export const postNuevoUsuario = async (req, res) => {
    try {
      const usuario = await sql.registrarUsuario(req.body)
      res.status(201).json({ message: "Usuario creado con éxito", usuario }); 
    } catch (error) {
      console.error(error) 
      res.status(500).json({ status: false, code: 500, message: "Error al crear usuario" });
    }
  }
