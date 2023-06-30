import { useState } from 'react'
import { SendIcon } from "./SendIcon.tsx";
import { FileIcon } from "./FileIcon.tsx";

function App() {
  const [inputValue, setInputValue] = useState('')

  const chooseFileHandler = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.mp4'; // Можете изменить тип файла или оставить "*/*" для любого типа файла

    input.onchange = (event: Event) => {
      // @ts-ignore
      const file = event?.target?.files?.[0];
      console.log('file', file)
    };

    input.click();
  }

  return (
    <div className="bg-gray-800 flex justify-center items-end h-screen p-10">
      <div className="relative max-w-4xl w-full">
        <input
          type="text"
          placeholder="Send a message"
          className="w-full px-4 py-4 pl-10 shadow-xl bg-gray-700 rounded-md focus:outline text-white outline-none"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          className="absolute p-1 left-2 bottom-4 transition-colors"
          onClick={chooseFileHandler}
        >
          <FileIcon />
        </button>
        <button
          className="absolute p-1 right-2 bottom-4 transition-colors"
        >
          <SendIcon />
        </button>
      </div>
    </div>
  )
}

export default App
