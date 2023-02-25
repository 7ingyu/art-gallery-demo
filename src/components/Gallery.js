import { connect } from 'react-redux';

function Gallery ({
  title, primaryImage, artistDisplayName, medium, objectID
}) {
  if (!!medium) {
    return (
      <div className="text-center mt-4">
        <h2>
          {title}
        </h2>
        <div>({medium})</div>
        {!!artistDisplayName && <div className="h3">By, {artistDisplayName}</div>}
        {!!primaryImage &&
          <img className="img-fluid mt-4" src={primaryImage} alt={title} />
        }
      </div>
    );
  } else {
    return (
      <div className="text-center mt-4">Loading...</div>
    );
  }
}

export default connect((state) => ({...state.data.apiData}))(Gallery);