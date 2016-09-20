export class Todo {
  public status: string;
  public id: string;
  constructor(public description: string, public createDate?: number) {
    this.id = Math.random().toString(16).replace('.', '');
    this.createDate = createDate || Date.now();
    this.status = 'Processing';
  }
}