import { useState } from 'react'
import InputField from './InputField'
import Button from './Button'
import RepoCard from './RepoCard'

const Home = () => {
  const [username, setUsername] = useState('')
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchRepos = async () => {
    if (username.trim() === '') {
      setRepos([])
      console.log('No repositories found')
      return
    }
    setLoading(true)
    try {
      const response = await fetch(`https://api.github.com/search/repositories?q=user:${username}&sort=stars&order=desc`)
      const data = await response.json()
      setRepos(data.items)
    } catch (error) {
      console.error('Error fetching repos:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col items-center mb-8 w-full">
      <div className="flex mb-4">
        <InputField 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              fetchRepos()
            }
          }} 
        />
        <Button onClick={fetchRepos}>Fetch Repos</Button>
      </div>
      <div className="flex flex-wrap gap-4 justify-center">
        {loading ? (
          <p>Loading...</p>
        ) : repos.length === 0 ? (
          <p>No repositories found</p>
        ) : (
          repos.map((repo) => (
            <RepoCard key={repo.id} repo={repo} />
          ))
        )}
      </div>
    </div>
  )
}

export default Home
