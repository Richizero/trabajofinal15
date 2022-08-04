import { initializeApp } from "firebase/app";
import { getDatabase} from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDAJN0jgN7TPzh7ulz9BoDfV8WLX6prQus",
  authDomain: "actividad-15-d0b5f.firebaseapp.com",
  databaseURL: "https://actividad-15-d0b5f-default-rtdb.firebaseio.com",
  projectId: "actividad-15-d0b5f",
  storageBucket: "actividad-15-d0b5f.appspot.com",
  messagingSenderId: "339531946731",
  appId: "1:339531946731:web:3d1a527e3d82c5b34a3cae"
};

const db = initializeApp(firebaseConfig);

export default getDatabase(db);