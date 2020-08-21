export class QuestionModel {
  public id: number;
  public cbtId: number;
  public text: string;

  constructor(id: number, cbtId: number, text: string) {
    this.id = id;
    this.cbtId = cbtId;
    this.text = text;
  }
}
