export class CbtModel {
  public id: number | null;
  public name: string;
  public description: string;
  public webAddress: string;
  public cbtSource: string;
  
  constructor(id: number | null, name: string, description: string, webAddress: string, cbtSource: string) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.webAddress = webAddress;
    this.cbtSource = cbtSource;
  }
}