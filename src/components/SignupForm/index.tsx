import * as React from "react";
import Form from "react-bootstrap/lib/Form";
import Feedback from "react-bootstrap/lib/Feedback";
import {FormikBag, FormikErrors, FormikValues, InjectedFormikProps, withFormik} from "formik";
import * as EmailValidator from "email-validator";
import Button from "react-bootstrap/lib/Button";
import {faExclamation, faSpinner} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "gatsby";
import "./style.less";

export interface IFormOutput {
  name: string;
  email: string;
  emailCopy: string;
  password: string;
  organisation: string;
  policyAcceptance: boolean;
}

interface IProps {
  onFormSubmit(v: IFormOutput): Promise<void>;
}

const FormControl = ({name, label, type = "text", touched, error, handleChange, handleBlur, message}) => (
  <Form.Group controlId={name}>
    <Form.Control
      type={type}
      name={name}
      isValid={touched && !error}
      isInvalid={touched && error}
      onChange={handleChange}
      onBlur={handleBlur}
      placeholder={label}
    />
    {message && <Form.Text>{message}</Form.Text>}
    {error && <Feedback type="invalid">{error}</Feedback>}
  </Form.Group>
);

const InnerForm = (props: InjectedFormikProps<IProps, IFormOutput>) => {
  const {
    touched,
    isValid,
    isSubmitting,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    error,
  } = props;

  const defaultProps = {
    handleBlur,
    handleChange,
  };
  const termsLabel = <label>I agree to the <Link to="/terms/">Terms of Use</Link>, <Link to="/privacy/">Privacy Policy</Link> and <Link to="/cookie/">Cookie Policy</Link></label>;

  return (
    <Form noValidate={true} onSubmit={handleSubmit} id="signup-form">
      <FormControl name="name" label="Name" error={errors.name} touched={touched.name} {...defaultProps} />
      <FormControl name="email" label="Email" error={errors.email} touched={touched.email} {...defaultProps} />
      <FormControl name="emailCopy" label="Confirm Email" error={errors.emailCopy} touched={touched.emailCopy} {...defaultProps} />
      <FormControl name="password" label="Password" type="password" error={errors.password} touched={touched.password} {...defaultProps} />
      <FormControl
        name="organisation"
        label="Organisation's Name"
        error={errors.organisation}
        touched={touched.organisation}
        message="If your organisation already has an account with Impactasaurus, please request an invite from your colleagues"
        {...defaultProps}
      />
      <Form.Group>
        <Form.Check
          name="policyAcceptance"
          label={termsLabel}
          onChange={handleChange}
          isInvalid={touched.policyAcceptance && errors.policyAcceptance}
          feedback={errors.policyAcceptance}
        />
      </Form.Group>
      <Button style={{width: "100%"}} type="submit" disabled={!isValid || isSubmitting}>
        {isSubmitting && <FontAwesomeIcon icon={faSpinner} spin={true} style={{marginRight: "0.2em", fontSize: "0.8em"}}/> }
        Get Started
      </Button>
      {error && <span style={{color: "red"}}><FontAwesomeIcon icon={faExclamation} style={{marginRight: "0.5em", marginLeft: "0.1em", marginTop: "1em"}}/>{error}</span>}
    </Form>
  );
};

const SignupForm = withFormik<IProps, IFormOutput>({
  validate: (values: IFormOutput, p: IProps) => {
    const errors: FormikErrors<IFormOutput> = {};
    if (values.policyAcceptance !== true) {
      errors.policyAcceptance = "To use Impactasaurus you must accept the terms of use and privacy policy" as any;
    }
    if (!values.name || values.name.length === 0) {
      errors.name = "Please provide your name";
    }
    if (!values.email || values.email.length === 0) {
      errors.email = "Please provide your email address";
    }
    if (values.email && !EmailValidator.validate(values.email)) {
      errors.email = "Your email does not appear to be valid";
    }
    if (values.email !== values.emailCopy) {
      errors.emailCopy = "The email addresses don't match";
    }
    if (!values.password || values.password.length === 0) {
      errors.password = "Please provide a password";
    }
    if (values.password && values.password.length < 6) {
      errors.password = "Passwords should be at least 6 characters long";
    }
    if (!values.organisation || values.organisation.length === 0) {
      errors.organisation = "Please provide your organisation\'s name";
    }
    return errors;
  },
  handleSubmit: (v: FormikValues, formikBag: FormikBag<IProps, IFormOutput>): void => {
    formikBag.setError(undefined);
    formikBag.setSubmitting(true);
    formikBag.props.onFormSubmit(v as IFormOutput)
      .catch((e: Error) => {
        formikBag.setSubmitting(false);
        console.error(e);
        if (e.message.includes("already")) {
          formikBag.setError(`User with email address ${v.email} already exists`);
        } else {
          if (Sentry) {
            Sentry.captureMessage(e.message);
          }
          formikBag.setError(`Signup failed. Please refresh and try again, if that doesn't work, please drop us an email at support@impactasaurus.org`);
        }
      });
  },
  mapPropsToValues: (p: IProps): IFormOutput => {
    return {
      name: "",
      email: "",
      emailCopy: "",
      password: "",
      organisation: "",
      policyAcceptance: false,
    };
  },
})(InnerForm);

export default SignupForm;
