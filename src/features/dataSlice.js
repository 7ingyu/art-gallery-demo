import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    objectId: 39,
    apiData: {},
}

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
      incrementId: (state, action) => {
          let newState = {...state};
          newState.objectId = state.objectId + 1;
          return newState;
      },
      decrementId: (state, action) => {
          return { ...state, objectId: state.objectId - 1};
      },
      setId: (state, action) => {
        return { ...state, objectId: action.payload };
      },
      resetId: () => initialState,
      setApiData: (state, action) => {
        return { ...state, apiData: action.payload };
      },
    }
})

export const { incrementId, decrementId, setId, resetId, setApiData } = dataSlice.actions

export default dataSlice.reducer
