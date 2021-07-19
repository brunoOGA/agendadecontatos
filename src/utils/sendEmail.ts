import axios from "axios";
import firebase from 'firebase';

interface IEmail {
  email: string;
  contactName: string;
}

export async function sendEmail({email, contactName}: IEmail): Promise<void> {
  try {
    await axios
    .get(`http://10.0.2.2:3000/dev/sendEmail?email=${email}&contact=${contactName}`);
  } catch(error) {
    console.log(error.message);
  }
}