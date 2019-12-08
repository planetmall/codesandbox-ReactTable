import React, { useEffect, useContext } from "react";
import { StoreContext } from "../services/Store";
import { jsonPlaceHolderAPI } from "../services/JsonPlaceHolderAPI";

//Material UI
import MainTable from "./table/MainTable";

export default function Main() {
  const [state, dispatch] = useContext(StoreContext);

  useEffect(() => {
    async function call() {
      const response = await jsonPlaceHolderAPI.call;
      const headers = await Object.keys(response[0]);
      await dispatch({ type: "addData", payload: response });
      await dispatch({ type: "addHeaders", payload: headers });
    }
    call();
  }, [dispatch]);

  console.log(state);

  return <MainTable />;
}
