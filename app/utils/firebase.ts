import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


type authtype = { email: string, password: string }
function EmailPasswordAuth({ email, password }: authtype) {
    alert("calles")
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            alert(user.email)
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)

            // ..
        });
}

export default EmailPasswordAuth;

