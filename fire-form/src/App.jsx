import { useState } from "react";
import { ContactInputConfig } from "./ContactInputConfigEs";

import FireForm from "./components/FireForm";
function App() {
  const [count, setCount] = useState(0);

  const handleFormData = (formValues) => {
    console.log("Handle Form Data called");
    console.log(formValues);
  };

  return (
    <main className="bg-white dark:bg-slate-950 flex h-full grow min-h-screen flex-col items-center justify-center">
      <FireForm
        formConfig={ContactInputConfig}
        handleFormData={handleFormData}
      ></FireForm>
    </main>
  );
}

export default App;
