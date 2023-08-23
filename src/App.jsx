import { useState } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    email: '',
  })

  const [showPreview, setShowPreview] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setShowPreview(true) // Show the preview after submitting
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="имя"
          />
        </div>
        <div>
          <input
            type="text"
            name="number"
            value={formData.number}
            onChange={handleChange}
            placeholder="номер"
          />
        </div>
        <div>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="почта"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {showPreview && (
        <div>
          <h2>Предварительный просмотр данных</h2>
          <p>ФИО: {formData.name}</p>
          <p>Номер: {formData.number}</p>
          <p>Email: {formData.email}</p>
        </div>
      )}
    </div>
  )
}

export default App