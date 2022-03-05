import './index.css'

const HistoryDetails = props => {
  const {historyResult, onDelete} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyResult
  const deleteUser = () => {
    onDelete(id)
  }

  return (
    <li className="list-container">
      <p className="time">{timeAccessed}</p>
      <div className="flex-container">
        <div>
          <div className="triple-container">
            <img className="logo-image" src={logoUrl} alt="domain logo" />
            <div className="logo-container">
              <p className="title">{title}</p>
              <p className="href-link" href={domainUrl}>
                {domainUrl}
              </p>
            </div>
          </div>
        </div>

        <div>
          <button
            testid="delete"
            className="button"
            type="button"
            onClick={deleteUser}
          >
            <img
              className="delete-icon"
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
              alt="delete"
            />
          </button>
        </div>
      </div>
    </li>
  )
}

export default HistoryDetails
