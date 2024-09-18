import { useState } from 'react'
import './App.css'

export function App() {
  const [input, setInput] = useState<string>('')
  const [resultWord, setResultWord] = useState<{ exists: boolean; count: number } | null>(null)

  function handleCheck(){
    const lowerCaseInput = input.toLowerCase()
    const count = lowerCaseInput.split('a').length - 1
    const exists = count > 0
    
    setResultWord({exists, count})
  }

  return (
    <div>
      <h1>Digite uma palavra</h1>
      <input 
        type="text" 
        value={input}
        onChange={(e)=> setInput(e.target.value)}
        placeholder='Digite uma palavra'
      />
      <button onClick={handleCheck}>Verificar</button>
      {resultWord && (
        <div>
          <p>{resultWord.exists ? `Existe 'a' na palavra.` : `Não existe 'a' na palavra`}</p>
          <p>Quantidade de 'a' : {resultWord.count}</p>
        </div>
      )
      }
    </div>
  )
}

