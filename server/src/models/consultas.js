import data from './querys.js'
import bcrypt from 'bcryptjs'

export const verificarCredenciales = async (email, password) => {
  const consulta = "SELECT email FROM usuarios WHERE email = $1 AND password = $2"
  const values = [email, password]
  const { rows: [usuario], rowCount }  = await data(consulta, values)
  const { password: passwordEncriptada } = usuario
  const passwordEsCorrecta = bcrypt.compareSync(password, passwordEncriptada)
  console.log(passwordEsCorrecta)
  if (!passwordEsCorrecta || !rowCount)
  throw { code: 401, message: "Email o contraseña incorrecta" }
  if (credenciales) {
    return jwt.sign(email, "az_AZ")
  }
}

export const registrarUsuario = async (usuario) => {
    let { email,  password, rol, lenguage } = usuario
    const passwordEncriptada = bcrypt.hashSync(password)
    password = passwordEncriptada
    const values = [email, password, rol, lenguage]
    const consulta = "INSERT INTO usuarios (id, email, password, rol, lenguage) values (DEFAULT, $1, $2, $3, $4);"
   await data(consulta, values)
    }