export class Passion {
  constructor(private title: string, private description: string, private myDescription: string) {};
  getTitle() {
    return this.title;
  }
  getDescription() {
    return this.description;
  }
  getMyDescriptoin() {
    return this.myDescription;
  }
}
