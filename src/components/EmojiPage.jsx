import { useEffect, useState } from 'react'

const EmojiPage = () => {
  const [emojis, setEmojis] = useState({})
  const [loading, setLoading] = useState(true) // Add loading state

  useEffect(() => {
    const fetchEmojis = async () => {
      try {
        const response = await fetch('https://api.github.com/emojis')
        const data = await response.json()
        setEmojis(data)
        setLoading(false) // Set loading to false after data is fetched
      } catch (error) {
        console.error('Error fetching emojis:', error)
        setLoading(false) // Set loading to false even if there is an error
      }
    }

    fetchEmojis()
  }, [])

  return (
    <div className="p-8 text-center">
      <h1 className="text-2xl font-bold mb-4">GitHub Emojis</h1>
      {loading ? ( // Show loading indicator if loading is true
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-4 gap-4">
          {Object.entries(emojis).map(([name, url]) => (
            <div key={name} className="flex flex-col items-center">
              <img src={url} alt={name} className="w-12 h-12" />
              <span>{name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default EmojiPage
