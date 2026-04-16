import { useState } from 'react'

export const useContactForm = (setNotification) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('https://formspree.io/f/mqkvnjed', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setNotification({
          type: 'success',
          message: 'TRANSMISSION SUCCESSFUL: Your message has been received by the system.'
        })
        setFormData({ name: '', email: '', message: '' })
      } else {
        setNotification({
          type: 'error',
          message: 'CRITICAL ERROR: Data transmission failed. Please try again.'
        })
      }
    } catch {
      setNotification({
        type: 'error',
        message: 'SYSTEM OFFLINE: Could not establish a secure uplink. Please check your connection.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return {
    formData,
    isSubmitting,
    handleChange,
    handleSubmit
  }
}
