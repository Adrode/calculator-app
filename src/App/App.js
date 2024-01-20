import Title from "./Title";
import Main from "./Main";
import Result from "./Result";

function App() {
  return (
    <>
      <Title
        text="Calculator"
      />
      <Main 
        result={<Result />}
      />
    </>
  );
}

export default App;
