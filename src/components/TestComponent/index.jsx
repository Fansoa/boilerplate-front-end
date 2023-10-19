import { Container } from "./styled";
import PropTypes from "prop-types";

const TestComponent = ({ variant }) => {
  return <Container variant={variant}>TestComponent</Container>;
};

TestComponent.propTypes = {
  variant: PropTypes.oneOf(["bleu", "rouge"]),
};

TestComponent.defaultProps = {
  variant: "bleu",
};

export default TestComponent;
