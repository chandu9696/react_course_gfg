import { useParams } from "react-router";
const ParamOperation = () => {
  const params = useParams<{ x: string; y: string; operator: string }>();
  const { x, y, operator } = params;
  let result = 0;
  if (x && y) {
    switch (operator) {
      case "+":
        result = parseInt(x) + parseInt(y);
        break;
      case "-":
        result = parseInt(x) - parseInt(y);
        break;
      case "*":
        result =parseInt(x) * parseInt(y);
        break;
      default:
        result = parseInt(x) / parseInt(y);
    }
    return <div>{`${x} ${operator ?? "/"} ${y} = ${result}`}</div>;
  }
  return <div>Invalid Arguments</div>;
};
export default ParamOperation;