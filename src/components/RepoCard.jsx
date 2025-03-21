const RepoCard = ({ repo }) => {
  return (
    <div className="border border-gray-300 p-4 w-full max-w-xs text-left rounded mx-auto bg-white shadow">
      <h3 className="text-xl font-bold">{repo.name}</h3>
      <p className="text-gray-700">{repo.description}</p>
      <p className="text-yellow-500">⭐ {repo.stargazers_count}</p>
      <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
        View Repository
      </a>
    </div>
  )
}

export default RepoCard
