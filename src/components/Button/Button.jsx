import PropTypes from "prop-types";
import { Box } from "components/Box";
import { LoadMore } from "./Button.styled";

const Button = ({onLoadMore}) => (
    <Box  display="flex" alignItems="center" justifyContent="center" mt={3}>
      <LoadMore type="buttton" onClick={onLoadMore}>Load more</LoadMore>
    </Box>
    )

Button.propTypes = {
    onLoadMore: PropTypes.func.isRequired,
}


export default Button;