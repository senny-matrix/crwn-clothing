import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../utlis/firebase/firebase.util";

// const SignIn = () => {
//   useEffect(async () => {
//     const response = await getRedirectResult(auth);
//     if (response) {
//       const userDocRef = await createUserDocumentFromAuth(response.user);
//     }
//   }, []);

  const SignIn = () => {
      useEffect(() => {
          async function getUserInfo() {
              const response = await getRedirectResult(auth);
              return response;
          }
          getUserInfo().then(response => {
              if (response) {
                 const userDocRef = createUserDocumentFromAuth(response.user);
             }
          })
          
      }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  //   const logGoogleRedirectUser = async () => {
  //     const { user } = await signInWithGoogleRedirect();
  //     console.log(user);
  //   };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign In With Google Pop Up</button>
      <button onClick={signInWithGoogleRedirect}>
        Sign In With Google Redirect
      </button>
    </div>
  );
};

export default SignIn;
