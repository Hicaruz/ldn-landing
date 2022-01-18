// import axios from "axios";
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyD-jzu43n_H1FRH-abCeS7r2mTLvm723v4",
    authDomain: "liga-del-nexo.firebaseapp.com",
    projectId: "liga-del-nexo",
    storageBucket: "liga-del-nexo.appspot.com",
    messagingSenderId: "316322501202",
    appId: "1:316322501202:web:b2bfa0eaf04c2ec0a5858b",
    measurementId: "G-PJXGYF16GH"
};

let firebaseApp

if (!getApps().length) {
    firebaseApp = initializeApp(firebaseConfig);
} else {
    firebaseApp = getApp()
}
const db = getFirestore();
const storage = getStorage(firebaseApp)

const base_path = ""
export const GET_USER = base_path + '/login';

export async function getStatic() {
    const config = collection(db, 'config');
    const snapshot = await getDocs(config);
    const [_static] = snapshot.docs.map(doc => doc.data());
    return _static;
}

export const saveSourceToStorage = async (parentFolder, sourcesPath, folder, file) => {
    const path = `${parentFolder}/${sourcesPath}/${folder}/${file.name}`
    const fileRef = ref(storage, path)

    await uploadBytes(fileRef, file.data)
    const fileDownloadUrl = await getDownloadURL(fileRef)
    return fileDownloadUrl
}



export async function getPartners(){
    const config = collection(db, 'partners');
    const snapshot = await getDocs(config);
    const partners = snapshot.docs.map(doc => doc.data());
    return partners;
}