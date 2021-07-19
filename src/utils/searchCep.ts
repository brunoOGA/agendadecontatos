import axios from "axios";
import { Alert } from "react-native";

interface Address {
  city: string;
  street: string;
  district: string;
}

export async function searchCEP(cep: string): Promise<Address> {

  const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
  if (response.data.erro) {
    Alert.alert("Houve um problema", "CEP inválido");
    return {
      city: '',
      street: '',
      district: '',
    };
  } else {
    return {
      city: String(response.data.localidade),
      street: String(response.data.logradouro),
      district: String(response.data.bairro),
    };
  }
}