import { useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [code, setCode] = useState('')
  const [language, setLanguage] = useState('Java')
  const [review, setReview] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleReview = async () => {
    if (!code.trim()) return
    setLoading(true)
    setError('')
    setReview('')
    try {
      const response = await axios.post('http://localhost:8080/api/review', {
        code,
        language
      })
      setReview(response.data.review)
    } catch (err) {
      setError('Erro ao conectar com o servidor. Verifique se o back-end está rodando.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container">
      <h1>AI Code Reviewer</h1>
      <p className="subtitle">Analise seu código com Inteligência Artificial</p>

      <div className="form-group">
        <label>Linguagem</label>
        <select value={language} onChange={e => setLanguage(e.target.value)}>
          <option>Java</option>
          <option>TypeScript</option>
          <option>Python</option>
          <option>JavaScript</option>
        </select>
      </div>

      <div className="form-group">
        <label>Cole seu código aqui</label>
        <textarea
          rows={12}
          value={code}
          onChange={e => setCode(e.target.value)}
          placeholder="public class MinhaClasse { ... }"
        />
      </div>

      <button onClick={handleReview} disabled={loading}>
        {loading ? 'Analisando...' : 'Analisar código'}
      </button>

      {error && <p className="error">{error}</p>}

      {review && (
        <div className="result">
          <h2>Resultado da análise</h2>
          <pre>{review}</pre>
        </div>
      )}
    </div>
  )
}

export default App