import * as sql from '../models/consultas.js'
import jwt from 'jsonwebtoken'

// GET
export const getCredenciales = async (req, res) => {
  try {
    const credenciales = await sql.verificarCredenciales(req.body);

    if (credenciales) { // Check if credentials are valid
      const token = jwt.sign({ email: credenciales.email }, "az_AZ"); // Use credenciales.email if available
      res.status(200).json({ token });
    } else {
      res.status(401).json({ message: "Credenciales inválidas" }); // Send specific error message
    }
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).json({ status: false, code: 500, message: "Error al verificar credenciales" });
  }
}

  // POST
  export const postNuevoUsuario = async (req, res) => {
    try {
      const usuario = await sql.registrarUsuario(req.body); // Await the promise
      res.status(201).json({ message: "Usuario creado con éxito", usuario }); // Send success response with user data (optional)
    } catch (error) {
      console.error(error); // Log the error for debugging
      res.status(500).json({ status: false, code: 500, message: "Error al crear usuario" });
    }
  };
