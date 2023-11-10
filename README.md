# fire-form
fire-form is a React component designed for easy and quick form creation. It leverages a configuration object to build forms dynamically and includes a callback function prop to handle form submissions.




## Installation

Install fire-form with npm

```bash
  npm install fire-form
  cd my-project
```
    
## Features

**Configuration Object:**
Pass an object to define form fields, validation, and layout.

Below is an example of a formConfig object for fire-form. This object defines the structure of the form, including field types, placeholders, validation rules, and any other necessary configurations:

```bash export const SampleFormConfig = {
  welcomePage: {
    title: "Welcome to the Journey 🌟",
    description: "Your adventure begins here. Get started in just a few minutes!",
    buttonText: "Start Now",
  },
  thanksPage: {
    title: "Thank You! 🚀",
    description: "We've received your submission and will be in touch soon!",
    buttonText: "Go Back Home",
    href: "/home",
  },
  inputs: [
    {
      name: "fullName",
      type: "text",
      placeholder: "Enter your full name",
      title: "Full Name",
      required: true,
    },
    // Add more input configurations here
  ],
  button: {
    text: "Submit Form 📬",
    tailwindClasses: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",
  },
};
```
**Submission Callback:** Includes a prop to pass a submission function which receives form values upon user submission.
## Usage

```bash 
import FireForm from 'fire-form';

const formConfig = {
  // ...define your form structure here...
};

const handleFormData = (values) => {
  console.log('Form Data', values);
};

<FireForm
  formConfig={formConfig}
  handleFormData={handleFormData}
/>
```

## Accepted Types

The component accepts various field types such as text, number, email, password, checkbox, radio, and select alongside custom validation rules defined within the configuration object.

## Documentation
For more details on the configuration structure and available types, refer to the full documentation provided with the package.


