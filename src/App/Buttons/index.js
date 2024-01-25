import { useState } from "react";
import { ContainerStyled, ButtonsContainer, Button } from "./styled";

const Buttons = () => {
    const [inputNumber, setInputNumber] = useState("");
    const [inputSymbol, setInputSymbol] = useState("");
    const [operationsCounter, setOperationsCounter] = useState(0);
    const [numbers, setNumbers] = useState([{}]);

    const setOperation = () => {
        if (inputNumber === "") {
            return;
        }

        setNumbers(
            numbers => [
                ...numbers,
                {
                    number: inputNumber,
                    symbol: inputSymbol,
                }
            ]
        );
        setOperationsCounter(operationsCounter => operationsCounter + 1);
        setInputNumber(inputNumber => inputNumber = "");
        setInputSymbol(inputSymbol => inputSymbol = "");
        console.log(numbers, "inputNumber:", inputNumber, " inputSymbol: ", inputSymbol);
    };

    const onSymbolChange = (option) => {
        setInputSymbol(inputSymbol => inputSymbol + option);
        setOperation();
    };

    const onOperationSubmit = () => {
        setOperation();
        let result = 0;
        for (let step = 1; step <= operationsCounter; step++) {
            switch (numbers[step].symbol) {
                case "1":
                    result += Number(numbers[step].number) + Number(numbers[step + 1]);
                    break;
                case "2":
                    result += Number(numbers[step].number) - Number(numbers[step + 1]);
                    break;
                case "3":
                    result += Number(numbers[step].number) * Number(numbers[step + 1]);
                    break;
                case "4":
                    result += Number(numbers[step].number) / Number(numbers[step + 1]);
                    break;
                default:
                    break;
            }
       };

        console.log(result);
        return result;
    };

    return (
        <>
            <ContainerStyled>
                <ButtonsContainer>
                    <Button
                        onClick={() => setInputNumber(inputNumber => inputNumber + 9)}
                    >9</Button>
                    <Button
                        onClick={() => setInputNumber(inputNumber => inputNumber + 8)}
                    >8</Button>
                    <Button
                        onClick={() => setInputNumber(inputNumber => inputNumber + 7)}
                    >7</Button>
                    <Button
                        onClick={() => setInputNumber(inputNumber => inputNumber + 6)}
                    >6</Button>
                    <Button
                        onClick={() => setInputNumber(inputNumber => inputNumber + 5)}
                    >5</Button>
                    <Button
                        onClick={() => setInputNumber(inputNumber => inputNumber + 4)}
                    >4</Button>
                    <Button
                        onClick={() => setInputNumber(inputNumber => inputNumber + 3)}
                    >3</Button>
                    <Button
                        onClick={() => setInputNumber(inputNumber => inputNumber + 2)}
                    >2</Button>
                    <Button
                        onClick={() => setInputNumber(inputNumber => inputNumber + 1)}
                    >1</Button>
                    <Button
                        onClick={() => setInputNumber(inputNumber => inputNumber + 0)}
                    >0</Button>
                </ButtonsContainer>
                <ButtonsContainer>
                    <Button
                        $size
                        onClick={() => onSymbolChange(1)}
                    >+</Button>
                    <Button
                        $size
                        onClick={() => onSymbolChange(2)}
                    >-</Button>
                    <Button
                        $size
                        onClick={() => onSymbolChange(3)}
                    >*</Button>
                    <Button
                        $size
                        onClick={() => onSymbolChange(4)}
                    >%</Button>
                    <Button
                        $size
                        onClick={() => onOperationSubmit()}
                    >=</Button>
                </ButtonsContainer>
            </ContainerStyled >
            <div>{inputNumber}</div>
        </>
    )
};

export default Buttons;