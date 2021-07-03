import * as React from "react";
import Form from "react-bootstrap/lib/Form";
import Feedback from "react-bootstrap/lib/Feedback";
import {FormikBag, FormikErrors, FormikValues, InjectedFormikProps, withFormik} from "formik";
import * as EmailValidator from "email-validator";
import Button from "react-bootstrap/lib/Button";
import {faExclamation, faSpinner} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { Link, Trans } from "gatsby-plugin-react-i18next";
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
  t: (s: string, o?: any) => string;
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
    t,
  } = props;

  const defaultProps = {
    handleBlur,
    handleChange,
  };
  const termsLabel = (
    <label>
      <Trans
        i18nKey="signup.form.legal"
        components={{
          tLink: <Link to="/terms/" />,
          pLink: <Link to="/privacy/" />,
          cLink: <Link to="/cookie/" />,
        }}
      />
    </label>
  );

  return (
    <Form noValidate={true} onSubmit={handleSubmit} id="signup-form">
      <FormControl name="name" label={t("signup.form.name")} error={errors.name} touched={touched.name} {...defaultProps} />
      <FormControl name="email" label={t("signup.form.email")} error={errors.email} touched={touched.email} {...defaultProps} />
      <FormControl name="emailCopy" label={t("signup.form.confirm")} error={errors.emailCopy} touched={touched.emailCopy} {...defaultProps} />
      <FormControl name="password" label={t("signup.form.password")} type="password" error={errors.password} touched={touched.password} {...defaultProps} />
      <FormControl
        name="organisation"
        label={t("signup.form.org")}
        error={errors.organisation}
        touched={touched.organisation}
        message={t("signup.form.existingOrg")}
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
        {t("signup.form.button")}
      </Button>
      {error && <span style={{color: "red"}}><FontAwesomeIcon icon={faExclamation} style={{marginRight: "0.5em", marginLeft: "0.1em", marginTop: "1em"}}/>{error}</span>}
    </Form>
  );
};

const SignupForm = withFormik<IProps, IFormOutput>({
  validate: (values: IFormOutput, p: IProps) => {
    const {t} = p;
    const errors: FormikErrors<IFormOutput> = {};
    if (values.policyAcceptance !== true) {
      errors.policyAcceptance = t("signup.errors.mustAccept") as any;
    }
    if (!values.name || values.name.length === 0) {
      errors.name = t("signup.errors.nameNeeded");
    }
    if (!values.email || values.email.length === 0) {
      errors.email = t("signup.errors.emailNeeded");
    }
    if (values.email && !EmailValidator.validate(values.email)) {
      errors.email = t("signup.errors.invalidEmail");
    }
    if (values.email !== values.emailCopy) {
      errors.emailCopy = t("signup.errors.emailMismatch");
    }
    if (!values.password || values.password.length === 0) {
      errors.password = t("signup.errors.passwordNeeded");
    }
    if (values.password && values.password.length < 6) {
      errors.password = t("signup.errors.passwordLength");
    }
    if (!values.organisation || values.organisation.length === 0) {
      errors.organisation = t("signup.errors.orgNameNeeded");
    }
    return errors;
  },
  handleSubmit: (v: FormikValues, formikBag: FormikBag<IProps, IFormOutput>): void => {
    const {t} = formikBag.props;
    formikBag.setError(undefined);
    formikBag.setSubmitting(true);
    formikBag.props.onFormSubmit(v as IFormOutput)
      .catch((e: Error) => {
        formikBag.setSubmitting(false);
        console.error(e);
        if (e.message.includes("already")) {
          formikBag.setError(t("signup.errors.emailAlreadyExists", {email: v.email}));
        } else {
          if (Sentry) {
            Sentry.captureMessage(e.message);
          }
          formikBag.setError(t("signup.errors.signupFailed"));
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
