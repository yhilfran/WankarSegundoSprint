export /**
 * Clase de cuenta de usuario
 */
class Account {
  constructor(
    public id: string,
    public person: number,
    public username: string,
    public clave: string,
    public rol: string,
    public correo: string
  ) { }

}
