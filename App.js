import React, {useState} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import Loading from './components/contents/Loading';
import Main from './components/contents/Main';

const App = () => {
  const [loadingState, setLoadingState] = useState(false);

  setTimeout(() => {
    console.log('change loading state!');
    setLoadingState(true);
  }, 1000);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>{loadingState ? <Main /> : <Loading />}</SafeAreaView>
    </>
  );
};

export default App;
