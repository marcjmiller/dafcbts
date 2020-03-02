import { CbtDeserializer } from '../../utilities/CbtDeserializer';
import { CbtModel } from '../../models/CbtModel';
const axios = require('axios').default;

export function axiosFetch(url: string): CbtModel[] {
  axios.get(url)
    .then((response: any) => {
      let items: CbtModel[] = CbtDeserializer.deserialize(response.data);
      console.log(items);
      return items;
    })
    .catch((error: any) => console.log(`${error} while fetching from ${url}`));
  return []
}
