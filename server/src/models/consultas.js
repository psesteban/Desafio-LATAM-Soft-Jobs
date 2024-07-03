import data from './querys.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
const { JWT_SECRET } = process.env

export const verificarCredenciales = async ({ email, password }) => {
  const consulta = 'SELECT * FROM usuarios WHERE email = $1;'
  const values = [email]
  const usuario = await data(consulta, values)

  try {
    const { password: passwordEncriptada, email: userEmail } = usuario[0]
    const passwordEsCorrecta = bcrypt.compareSync(password, passwordEncriptada)
    if (!passwordEsCorrecta || usuario.length === 0) throw console.error('Email o contraseña incorrecta')
    return jwt.sign(userEmail, JWT_SECRET)
  } catch (error) {
    return error
  }
}

export const registrarUsuario = async (usuario) => {
  let { email, password, rol, lenguage } = usuario
  const passwordEncriptada = bcrypt.hashSync(password)
  password = passwordEncriptada
  const values = [email, password, rol, lenguage]
  const consulta = 'INSERT INTO usuarios (id, email, password, rol, lenguage) values (DEFAULT, $1, $2, $3, $4);'
  return await data(consulta, values)
}

export const entregarDatos = async (email) => {
  const consulta = 'SELECT * FROM usuarios WHERE email = $1;'
  const values = [email]
  const datos = await data(consulta, values)
  const { rol, lenguage } = datos[0]
  const user = [
    {
      email,
      rol,
      lenguage
    }
  ]
  return user
}
