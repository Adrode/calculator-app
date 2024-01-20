import { ContainerStyled, ButtonsContainer, Button } from "./styled";

const Buttons = () => {

    return (
        <ContainerStyled>
            <ButtonsContainer>
                <Button>9</Button>
                <Button>8</Button>
                <Button>7</Button>
                <Button>6</Button>
                <Button>5</Button>
                <Button>4</Button>
                <Button>3</Button>
                <Button>2</Button>
                <Button>1</Button>
                <Button>0</Button>
            </ButtonsContainer>
            <ButtonsContainer>
                <Button $size>+</Button>
                <Button $size>-</Button>
                <Button $size>*</Button>
                <Button $size>%</Button>
                <Button $size>=</Button>
            </ButtonsContainer>
        </ContainerStyled>
    )
};

export default Buttons;