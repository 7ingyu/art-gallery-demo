export default function Buttons ({
  artId, setArtId
}) {

  const decrement = () => {
    if (artId > 1) {
      setArtId(artId - 1);
    }
  }

  const increment = () => {
    if (artId < 471581) {
      setArtId(artId + 1)
    }
  }

  return (
    <div className="d-flex justify-content-center">
      <div className="btn-group" role="group">
        <button
          className="btn btn-sm btn-secondary px-4"
          onClick={decrement}
          disabled={artId <= 1}
        >
          {`<`}
        </button>
        <button
          className="btn btn-sm btn-secondary px-4"
          onClick={increment}
          disabled={artId>= 471581}
        >
          >
        </button>
      </div>
    </div>
  )
}