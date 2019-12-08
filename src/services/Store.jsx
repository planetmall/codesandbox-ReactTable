import React, { createContext, useReducer } from "react";

export const StoreContext = createContext({});

const initialState = {
  data: [],
  sorted: [],
  headers: [],
  path: "id",
  order: "asc",
  page: 0,
  rowsPerPage: 10
};

function reducer(state, action) {
  switch (action.type) {
    case "addData":
      return { ...state, data: action.payload };
    case "addHeaders":
      return { ...state, headers: action.payload };
    case "sortHeader":
      if (state.order === "asc") {
        return { ...state, order: "desc", path: action.payload };
      } else {
        return { ...state, order: "asc", path: action.payload };
      }

    case "updateCompleted":
      const datas = [...state.data];
      const index = datas.indexOf(action.payload);
      datas[index] = { ...datas[index] };
      datas[index].completed = !datas[index].completed;
      return { ...state, data: datas };
    case "handleFirstPageButtonClick":
      return { ...state, page: 0 };
    case "handleBackButtonClick":
      return { ...state, page: state.page - 1 };
    case "handleNextButtonClick":
      return { ...state, page: state.page + 1 };
    case "handleLastPageButtonClick":
      return {
        ...state,
        page: Math.max(0, Math.ceil(state.data.length / state.rowsPerPage) - 1)
      };
    case "onChangePage":
      return { ...state, page: action.payload };
    case "handleChangeRowsPerPage":
      return { ...state, page: 0, rowsPerPage: action.payload };
    default:
      throw new Error("Action type must be defined");
  }
}

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StoreContext.Provider value={[state, dispatch]}>
      {children}
    </StoreContext.Provider>
  );
};

export default Store;
