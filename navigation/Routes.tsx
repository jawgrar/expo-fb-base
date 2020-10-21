import React, { useContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebaseProvider";
import AppStack from "./AppStack";
import AuthStack from "./AuthStack";
import { AuthUserContext } from "./AuthUserProvider";

const Routes = () => {
  const { user, setUser } = useContext<any>(AuthUserContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // onAuthStateChanged returns an unsubscriber
    const unsubscribeAuth = auth.onAuthStateChanged(async (authUser: any) => {
      try {
        await (authUser ? setUser(authUser) : setUser(null));
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    });

    // unsubscribe auth listener on unmount
    return unsubscribeAuth;
  }, []);

  if (isLoading) {
    console.log("Routes loading...");
    return null;
  }

  if (!user) return <AuthStack />;

  return <AppStack />;
};

export default Routes;
