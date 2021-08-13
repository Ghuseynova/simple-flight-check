import { v1 as uuidv1 } from 'uuid';
import { getFormatDate, getFormatTime } from './utils/utils';

const URL =
  'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0';

class Api {
  static async fetchFlights(date) {
    const response = await fetch(
      `${URL}/RU/RUB/ru-RU/SVO-sky/JFK-sky/${date}?inboundpartialdate=anytime`,
      {
        method: 'GET',
        headers: {
          'x-rapidapi-key':
            'b986fb2561msh0eb8cac0ecefe26p192bbdjsnc09050cae0e9',
          'x-rapidapi-host':
            'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
        },
      }
    );

    if (response.ok) {
      const json = await response.json();

      const flightList = json.Quotes.map((quote) => {
        const price = `${quote.MinPrice} ₽`;
        const date = getFormatDate(quote.QuoteDateTime);
        const flightTime = getFormatTime(quote.QuoteDateTime);
        const airlane = json.Carriers.filter(
          (carrier) => carrier.CarrierId === quote.OutboundLeg.CarrierIds[0]
        )[0].Name;

        const data = {
          id: uuidv1(),
          departure: 'Moscow (SVO)',
          arrival: 'New York City (JFK)',
          date,
          flightTime,
          airlane,
          price,
        };

        console.log(data);

        return data;
      });

      return flightList;
    }

    return null;
  }
}

export default Api;
