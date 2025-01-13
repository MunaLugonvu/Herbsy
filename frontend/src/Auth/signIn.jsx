import React from 'react';
import Form from '../components/Forms/form';


const SignIn = () => {
    const fields = [
        { name: 'email', label: 'Email', type: 'email' },
        { name: 'password', label: 'Password', type: 'password' }
    ];

    const handleSignIn = (formData) => {
        // Handle sign in logic here
        console.log('Sign In Data:', formData);
    };

    return (
        <div>
            <Form
                title="Sign in to your account"
                fields={fields}
                onSubmit={handleSignIn}
                buttonText="Sign In"
                footerText="Don't have an account?"
                footerLink="/signup"
                footerLinkText="Sign Up"
            />
        </div>
    );
};

export default SignIn;