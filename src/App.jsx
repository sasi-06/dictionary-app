import { useState } from 'react'
import './App.css'

function App() {
  const [word, setWord] = useState('')
  const [meanings, setMeanings] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const searchWord = async () => {
    if (!word.trim()) return
    setLoading(true)
    setError('')
    setMeanings([])
    try {
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      if (!response.ok) throw new Error('Word not found')
      const data = await response.json()
      setMeanings(data[0].meanings || [])
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <div>
        <h1>Dictionary App</h1>
      </div>
      <input
        id="ser"
        type="text"
        placeholder="Enter a word to search meaning"
        value={word}
        onChange={(e) => setWord(e.target.value)}
      />
      <button onClick={searchWord} disabled={loading}>
        {loading ? 'Searching...' : 'Search'}
      </button>
      <br />
      <hr />
      <details id="serchResults">
        <summary>Meanings</summary>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {loading && <p>Loading...</p>}
        {meanings.length > 0 && (
          <>
            <h6>Meaning of the word "{word}"</h6>
            {meanings.map((meaning, index) => (
              <div key={index}>
                <h6>{meaning.partOfSpeech}</h6>
                {meaning.definitions.map((def, idx) => (
                  <p key={idx}>{def.definition}</p>
                ))}
              </div>
            ))}
          </>
        )}
      </details>
    </>
  )
}
export default App
