import { CbtModel } from '../models/CbtModel';

export class CbtDeserializer {
  static deserialize(items: any): CbtModel[] {
    if (items.map) {
      return items.map((item: any) => {
        return new CbtModel(
          item.id,
          item.name,
          item.description,
          item.webAddress,
          item.cbtSource
        );
      });
    }
    return [];
  }
}