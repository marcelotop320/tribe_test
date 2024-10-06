import { getCountry } from "./countryName";

export const formatedData = (data: any) => {
    const list = Object.entries(data).map(([key, value]:[key:string, value:any]) => ({
        id: key,
        countryName: getCountry(key),
        currencyName: value.name,
        conversionRate: value.rate,
        updatedDate: value.date,
    }));
    return list;
    
}