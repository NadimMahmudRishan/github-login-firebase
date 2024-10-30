import {
  GithubAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
} from "firebase/auth";
import app from "../../Firebase/firebase.config";
import { useState } from "react";
const Login = () => {
  const providerGit = new GithubAuthProvider();
  const providerGoogle = new GoogleAuthProvider();
  const auth = getAuth(app);
  const authGoogle = getAuth(app);
  const [login, setlogin] = useState(null);

  const handelLoginGithub = () => {
    signInWithPopup(auth, providerGit)
      .then((result) => {
        console.log(result.user);
        setlogin(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const handelLoginGoogle = () => {
    signInWithPopup(authGoogle, providerGoogle)
      .then((result) => {
        console.log(result.user);
        setlogin(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handelSignOut = () => {
    signOut(auth)
      .then((result) => {
        console.log(result);
        setlogin(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      {login ? (
        <div>
          <h2 className="text-center text-4xl font-bold m-7">You are login Successfully.</h2>
          <button
            className="btn-primary bg-slate-300 px-5 py-2 rounded-md mx-auto m-10 text-center"
            onClick={handelSignOut}
          >
            Log Out
          </button>
        </div>
      ) : (
        <div className="flex justify-center m-10">
          <button
            className="btn-primary bg-slate-300 px-5 py-2 rounded-md mx-auto"
            onClick={handelLoginGithub}
          >
            Login with github
          </button>
          <button
            className="btn-primary bg-slate-300 px-5 py-2 rounded-md mx-auto"
            onClick={handelLoginGoogle}
          >
            Login with Google
          </button>
        </div>
      )}
    </div>
  );
};

export default Login;
