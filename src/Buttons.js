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
    <div>
      <div className="input-group justify-content-center" role="group">
        <button
          className="btn btn-sm btn-secondary px-4"
          onClick={decrement}
          disabled={artId <= 1}
        >
          {`<`}
        </button>
        <input
          type="number"
          value={artId}
          onChange={(e) => setArtId(e.target.value)}
        />
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