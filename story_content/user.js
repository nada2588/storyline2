function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6HRh4rjL5cZ":
        Script1();
        break;
  }
}

function Script1()
{
  
    <script type="module">
        // Import the functions you need from the SDKs you need
        import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
        import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-analytics.js";
        import { getAuth ,GoogleAuthProvider,signInWithRedirect, getRedirectResult } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

        // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries
      
        // Your web app's Firebase configuration
        // For Firebase JS SDK v7.20.0 and later, measurementId is optional
        const firebaseConfig = {
          apiKey: "AIzaSyBRgfhcELCrgSrWJjJpakmTgiv7L6XENbM",
          authDomain: "storyline-d9e68.firebaseapp.com",
          projectId: "storyline-d9e68",
          storageBucket: "storyline-d9e68.appspot.com",
          messagingSenderId: "955920927208",
          appId: "1:955920927208:web:6a8035148bf816278ffc5d",
          measurementId: "G-S96VQ7TCMC"
        };
      
        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const provider = new GoogleAuthProvider(app);
        const auth = getAuth(app);
        const analytics = getAnalytics(app);
        googleBtn.addEventListener('click', (e) => {
            signInWithRedirect(auth, provider);
            getRedirectResult(auth)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access Google APIs.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;

    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...

    alert(user.displayName);
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });

        } )
      </script>
}

