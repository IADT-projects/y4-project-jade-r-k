import Button from "react-bootstrap/Button";

//button for form
const FormButton = ({color, text, onClick, isDisabled}) => {

    return (
        <>
        <Button
            variant={color}
            onClick={onClick}
            disabled={isDisabled}
        >{text}</Button>
        </>
    );
  };
  
  export default FormButton;