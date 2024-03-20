import { Form, Link } from "react-router-dom";

// 3rd party libraries
//import { toast } from 'react-toastify';

// utils
//import customFetch from '../utils/customFetch';

// assets
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";

// components
import FormRow from "../components/FormRow";
import Logo from "../components/Logo";
//import SubmitBtn from '../components/SubmitBtn';

// export const action = async ({ request }: any) => {
//   const formData = await request.formData();
//   const data = Object.fromEntries(formData);

//   try {
//     await customFetch.post('/auth/register', data);
//     toast.success('Registration successful');
//     return redirect('/login');
//   } catch (error) {
//     toast.error(error?.response?.data?.msg);

//     return error;
//   }
// };

const Register = () => {
  return (
    <Wrapper>
      <Form method="post" className="form">
        <Logo />
        <h4>Register</h4>
        <FormRow type="text" name="name" />
        <FormRow type="text" name="lastName" labelText="last name" />
        <FormRow type="text" name="location" />
        <FormRow type="email" name="email" />
        <FormRow type="password" name="password" />
        {/* <SubmitBtn /> */}
        <p>
          Already a member?
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};
export default Register;
