import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { ContactInputConfig } from './ContactInputConfigEs';

import FireForm from './components/FireForm'
function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="bg-white dark:bg-slate-950 flex h-full min-h-screen flex-col items-center justify-center">
      <FireForm formConfig={ContactInputConfig} ></FireForm>
    </main>
  )
}

export default App
