const firebaseConfig = {
    apiKey: "AIzaSyBr_8KsHCOpP2FMu1hCZWA73waLcACeKl8",
    authDomain: "aulasenac-ca1bd.firebaseapp.com",
    projectId: "aulasenac-ca1bd",
    storageBucket: "aulasenac-ca1bd.appspot.com",
    messagingSenderId: "909827746404",
    appId: "1:909827746404:web:f2c10c98534051a7238d71"
};
// Inicializar o Firebase
firebase.initializeApp(firebaseConfig);

$("#login-form").submit(function(event) {
event.preventDefault();

var email = $("#email").val();
var password = $("#password").val();

firebase.auth().signInWithEmailAndPassword(email, password)
.then((userCredential) => {
    alert("Login realizado com sucesso!");
    
})
.catch((error) => {
    alert("Erro: login invalido" + error.message);
});
});