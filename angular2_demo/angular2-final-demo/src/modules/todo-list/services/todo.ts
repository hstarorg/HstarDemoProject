export class Todo {
  public status: string;
  constructor(public description: string, public createDate?: number) {
    this.createDate = createDate || Date.now();
  }
}