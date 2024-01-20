import { MainStyled } from "./styled";

const Main = ({ result, buttons }) => (
    <MainStyled>
        {result}
        {buttons}
    </MainStyled>
);

export default Main;