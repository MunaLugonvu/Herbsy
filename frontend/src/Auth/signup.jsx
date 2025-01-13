import React from "react";
import Form from "../components/Forms/form";

const SignUp = () => {
  const fields = [
    { name: "fullName", label: "Full Name", type: "text" },
    { name: "email", label: "Email", type: "email" },
    { name: "password", label: "Password", type: "password" },
  ];

  const handleSignUp = (formData) => {
    // Handle sign up logic here
    console.log("Sign Up Data:", formData);
  };

  return (
    <div>
      <Form
        title="Sign up for an account"
        fields={fields}
        onSubmit={handleSignUp}
        buttonText="Sign Up"
        footerText="Already have an account?"
        footerLink="/signin"
        footerLinkText="Sign In"
      />
    </div>
  );
};

export default SignUp;
