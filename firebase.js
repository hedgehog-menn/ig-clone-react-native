import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBg2tYaWxbZE93DbiZvC2BIMH_5YG-VlSo',
  authDomain: 'rn-instagram-clone-live-847dc.firebaseapp.com',
  projectId: 'rn-instagram-clone-live-847dc',
  storageBucket: 'rn-instagram-clone-live-847dc.appspot.com',
  messagingSenderId: '793333680995',
  appId: '1:793333680995:web:ba853ef918312fde71e156',
  measurementId: 'G-ESPX1WEBJS',
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;
