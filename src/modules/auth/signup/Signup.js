import React from "react";
import { Button, Chheckbox, Form, Grid, Checkbox } from "semantic-ui-react";

const styles = {
  root: {
    marginTop: "5%"
  }
};
const Signup = () => (
  <Grid centered style={styles.root}>
    <Grid.Column width={6}>
      <Form>
        <Form.Field>
          <label>Email</label>
          <input type="email" placeholder="Email here..." />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input type="email" placeholder="Password here..." />
        </Form.Field>
        <Form.Field>
          <label>Confirm Password</label>
          <input type="email" placeholder="Confirm Password here..." />
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <Checkbox label="I agree to the Terms and Conditions" />
        </Form.Field>
        <Button type="submit">Sign up</Button>
      </Form>
    </Grid.Column>
  </Grid>
);

export default Signup;
