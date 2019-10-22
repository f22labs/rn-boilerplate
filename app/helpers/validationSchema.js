import * as Yup from 'yup';

const loginValidationSchema = Yup.object({
  username: Yup.string().required('Username is Required'),
  password: Yup.string()
    .min(6, 'Password must contain atleast 6 characters')
    .max(30, 'Password cannot exceed 30 characters')
    .required('Password is Required'),
});

export { loginValidationSchema };
