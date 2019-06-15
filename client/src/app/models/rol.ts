export class Rol {
  constructor(id = '', name = '', state = true) {
    this.id = id;
    this.name = name;
    this.state = state;
  }
  id: string;
  name: string;
  state: boolean;
}
