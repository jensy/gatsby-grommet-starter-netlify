import React from "react";
import { Link } from "gatsby";
import { Box, Text } from "grommet";

const Navbar = class extends React.Component {
  render() {
    return (
      <Box>
        <Box>
          <Link to="/about">
            <Text>About</Text>
          </Link>
        </Box>

        <Box>
          <Link to="/contact">
            <Text>Contact</Text>
          </Link>
        </Box>

        <Box>
          <Link to="/contact/examples">
            <Text>Examples</Text>
          </Link>
        </Box>
      </Box>
    );
  }
};

export default Navbar;
