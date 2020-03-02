export class CbtModel {
  private _id: number | null;
  private _name: string;
  private _description: string;
  private _webAddress: string;
  private _cbtSource: string;

  constructor(id: number | null, name: string, description: string, webAddress: string, cbtSource: string) {
    this._id = id;
    this._name = name;
    this._description = description;
    this._webAddress = webAddress;
    this._cbtSource = cbtSource;
  }

  get id(): number | null {
    return this._id;
  }

  set id(id: number | null) {
    this._id = id;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get webAddress(): string {
    return this._webAddress;
  }

  set webAddress(value: string) {
    this._webAddress = value;
  }

  get cbtSource(): string {
    return this._cbtSource;
  }

  set cbtSource(value: string) {
    this._cbtSource = value;
  }
}