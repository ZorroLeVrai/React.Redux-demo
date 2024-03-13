import { useSelector } from "react-redux";

const ErrorMessage = ({message}) => {
  return (
    <div>
      {message}
    </div>
  );
};

const ErrorDisplay = () => {
  const errorMessage = useSelector((state) => state.error.message);

  return ( 
    errorMessage ? <ErrorMessage message={errorMessage} />: null
  );
};
 
export default ErrorDisplay;