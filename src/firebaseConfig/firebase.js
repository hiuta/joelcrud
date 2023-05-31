
import { initializeApp } from "firebase/app";
//usamos getFirestore para poder acceder a la base de datos
import { getFirestore} from '@firebase/firestore'



// TODO: Add SDKs for Firebase products that you want to use



const firebaseConfig = {
  apiKey: "AIzaSyDmZxUC2JI06-qIYiIaX7flXmyLs4COt40",
  authDomain: "crudjoel-23d5c.firebaseapp.com",
  projectId: "crudjoel-23d5c",
  storageBucket: "crudjoel-23d5c.appspot.com",
  messagingSenderId: "844552540738",
  appId: "1:844552540738:web:55ef1014784096bb2153db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//para poder conectarrnos a la base de datos
export const db = getFirestore(app)
