import Title from "./Title";
import Main from "./Main";
import Result from "./Result";
import Buttons from "./Buttons";

function App() {
  return (
    <>
      <Title
        text="Calculator"
      />
      <Main 
        result={<Result />}
        buttons={<Buttons />}
      />
    </>
  );
}

export default App;
