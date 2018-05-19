import React from "react";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Page404 = () => (
  <div>
    <h1>404 - Page not found</h1>
    <Button>
      <Link to="/">Comeback Home</Link>
    </Button>
  </div>
);

export default Page404;
