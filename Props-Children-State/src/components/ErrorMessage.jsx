
/* Yaha par props ko argument mai pass karne ke bajae Usko destructure kar liya hai aur items mai leliya hai */

const ErrorMessage = ({ items }) => {
  return <>{items.length === 0 && <h3>I am Still Hungry</h3>}</>;
};
export default ErrorMessage;
