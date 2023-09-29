const firebaseConfig = {
    apiKey: "AIzaSyBr_8KsHCOpP2FMu1hCZWA73waLcACeKl8",
    authDomain: "aulasenac-ca1bd.firebaseapp.com",
    projectId: "aulasenac-ca1bd",
    storageBucket: "aulasenac-ca1bd.appspot.com",
    messagingSenderId: "909827746404",
    appId: "1:909827746404:web:f2c10c98534051a7238d71"
  };
  
  // Inicializar o  firebase
  firebaseConfig.inicializeApp(firebaseConfig);

  $(" cadrastro-form").submit(function(event) {
    event.preventDefault();

    var email = $("#cadrastro-email").val();
    var password = $("#cadrastro-password").val();

    firebaseConfig.auth(). createUserWithEmailAndPassword(email, password)
    .the((userCredential)=> {
        alert("cadrastro realizado com sucesso!");
        // Aqui você pode adicionar um redirecionamento, se desejar.
        // por exemplo: window.location.href = "index.html";
    })
    .cath((error)=> {
        alert("Erro: + error.message");
    })
});

