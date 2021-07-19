import axios from "axios";

interface Address {
  cep: string;
  city: string;
  street: string;
  district: string;
  number: number;
}

interface Phone {
  number: string;
}

interface Contact {
  name: string;
  phones: Phone[];
  addresses: Address[];
}

interface Response {
  results: [
    {
      name: {
        first: string;
      };
      phone: string;
      location: {
        postcode: string;
        city: string;
        street: {
          name: string;
          number: number;
        }
        state: string;
      }
    }
  ]
}

export async function generateContacts(size: number): Promise<Contact[]> {
  const response = await axios.get<Response>(`https://randomuser.me/api/?results=${size}&nat=br`);

  const contacts = response.data.results.map(element => {
    return {
      name: element.name.first,
      phones: [
        {
          number: element.phone,
        }
      ],
      addresses: [
        {
          cep: element.location.postcode,
          city: element.location.city,
          street: element.location.street.name,
          district: element.location.state,
          number: element.location.street.number,
        }
      ]
    }
  });

  return contacts;
}