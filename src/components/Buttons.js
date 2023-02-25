import { useDispatch }  from 'react-redux';
import { incrementId, decrementId, setId, resetId } from '../features/dataSlice';
import { connect } from 'react-redux';


function Buttons ({ artId }) {
  const dispatch = useDispatch();

  const decrement = () => dispatch(decrementId());
  const increment = () => dispatch(incrementId());
  const custom = (e) => dispatch(setId(Number(e.target.value)));
  const reset = () => dispatch(resetId());

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
          onChange={custom}
        />
        <button
          className="btn btn-sm btn-secondary px-4"
          onClick={increment}
          disabled={artId>= 471581}
        >
          >
        </button>
        <button
          className="btn btn-sm btn-secondary px-4"
          onClick={reset}
        >
          x
        </button>
      </div>
    </div>
  )
}

export default connect((state) => ({artId: state.data.objectId}))(Buttons);