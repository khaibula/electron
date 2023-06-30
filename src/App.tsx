import { useState } from 'react'
import { SendIcon } from "./SendIcon.tsx";
import { FileIcon } from "./FileIcon.tsx";

function App() {
  const [inputValue, setInputValue] = useState('')

  return (
    <div className="bg-gray-800 flex justify-center items-end h-screen p-10">
      <div className="relative max-w-4xl w-full">
        <input
          type="text"
          placeholder="Send a message"
          className="w-full px-4 py-4 shadow-xl bg-gray-700 rounded-md focus:outline text-white"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          className="absolute p-1 rounded-md md:bottom-3 md:p-2 md:right-3 dark:hover:bg-gray-900 dark:disabled:hover:bg-transparent right-2 disabled:text-gray-400 enabled:bg-brand-purple text-white bottom-1.5 transition-colors disabled:opacity-40"
        >
          <FileIcon />
        </button>
        <button
          className="absolute p-1 rounded-md md:bottom-3 md:p-2 md:right-3 dark:hover:bg-gray-900 dark:disabled:hover:bg-transparent right-2 disabled:text-gray-400 enabled:bg-brand-purple text-white bottom-1.5 transition-colors disabled:opacity-40"
        >
          <SendIcon />
        </button>
      </div>
    </div>
  )
}

export default App
