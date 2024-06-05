import google from "./img/google.png";
import github from "./img/github.png";
import facebook from "./img/facebook.png";
import {
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import "./App.css";
import app from "./firebase.init";
import { useState } from "react";
import Form from "./components/Form/Form";

const auth = getAuth(app);

function App() {
  const [user, setUser] = useState([]);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const googleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const githubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const facebookSignIn = () => {
    signInWithPopup(auth, facebookProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const allSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser([]);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="">
      <div>
        <Form></Form>
      </div>
      <div>
      {user.uid ? (
        <button onClick={allSignOut}>Sign Out!</button>
      ) : (
        <div className="w-80 h-40 bg-orange-100 m-auto mt-9 content-center">
          <div>
            <p className="text-4xl font-bold pb-2 text-center">Sign In With!</p>
          </div>
          <div className="w-72 flex flex-row h-20 m-auto gap-1.5 p-1 space-x-6 rounded-xl cursor-pointer">
            <img src={google} onClick={googleSignIn} alt="" />
            <img src={github} onClick={githubSignIn} alt="" />
            <img src={facebook} onClick={facebookSignIn} alt="" />
            {/* <button onClick={googleSignIn}>Google Sign In!</button>
            <button onClick={githubSignIn}>Github Sign In!</button>
            <button onClick={facebookSignIn}>Facebook Sign In!</button> */}
          </div>
        </div>
      )}
      {user.uid && <h3> Hey {user.displayName}</h3>}
      </div>
    </div>
  );
}

export default App;
