import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utlis/firebase/firebase.util";

import SingUpForm from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign In With Google Pop Up</button>
      <SingUpForm />
    </div>
  );
};

export default SignIn;
