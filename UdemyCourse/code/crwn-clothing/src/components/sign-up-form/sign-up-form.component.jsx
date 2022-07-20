import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { createAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import "./sign-up-form.styles.scss";
const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const handleChange = (event) => {
    console.log(event.target.value);
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      await createAuthUserWithEmailAndPassword(email, password);
    } catch (error) {
      console.log("user creation encountered an error: ", error);
    }
  };
  return (
    <div className='sign-up-container'>
      {/* <div> */}
      <h2>Don't have an account ?</h2>
      <span>Sign up with your email and password</span>
      {/* <h1>Sign up with your email and password</h1> */}
      <form onSubmit={handleSubmit}>
        <FormInput
          label={"Display Name"}
          required
          type='text'
          onChange={handleChange}
          name='displayName'
          value={displayName}
        />
        <FormInput
          label={"Email"}
          required
          type='email'
          onChange={handleChange}
          name='email'
          value={email}
        />
        <FormInput
          label={"Password"}
          required
          type='password'
          onChange={handleChange}
          name='password'
          value={password}
        />
        <FormInput
          label={"Comfirm Password"}
          required
          type='password'
          onChange={handleChange}
          name='confirmPassword'
          value={confirmPassword}
        />

        <Button type='submit'>Sign Up</Button>
      </form>
    </div>
  );
};
export default SignUpForm;
