import React, { useEffect, useState } from "react";
import { SafeAreaView, StatusBar } from "react-native";
import Loading from "./components/contents/Loading";
import Main from "./components/contents/Main";

const App = () => {
  const [loadingState, setLoadingState] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      console.log("change loading state!");
      setLoadingState(true);
    }, 5000);
  }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        {loadingState ? <Main /> : <Loading />}
      </SafeAreaView>
    </>
  );
};

export default App;
