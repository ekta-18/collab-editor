import firebase from 'firebase';


var config = {
    
    apiKey: "AIzaSyA0HeNfAC2LlagsXwbelzQN71xU3XLjvbk",
    authDomain: "collab-editor-22010.firebaseapp.com",
    databaseURL: "https://collab-editor-22010.firebaseio.com",
    projectId: "collab-editor-22010",
    storageBucket: "collab-editor-22010.appspot.com",
    messagingSenderId: "488365087389",
    appId: "1:488365087389:web:de53d486830a20a3"
    /*apiKey: "AIzaSyCxrIiOfb2xa2dsWXHf3Zb2tKIg1FCTUiE",
    authDomain: "collab-editor-34737.firebaseapp.com",
    databaseURL: "https://collab-editor-34737.firebaseio.com",
    projectId: "collab-editor-34737",
    storageBucket: "",
    messagingSenderId: "818129299593",
    appId: "1:818129299593:web:a50138d5184709c0"*/
  };

var fire = firebase.initializeApp(config);

export default fire;
