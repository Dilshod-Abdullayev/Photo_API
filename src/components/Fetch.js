import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import loaderAction from "../redux/action/loaderAction";
import Loader from "./Loader";
import Boxs from "./Boxs";
const Fetch = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const load = useSelector((state) => state.loaderReducer);
  useEffect(() => {
    fetch("https://api.slingacademy.com/v1/sample-data/photos")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setData(data.photos);
        dispatch(loaderAction(false));
      })
      .catch((error) => {
        setError(error);
        dispatch(loaderAction(false));
      });
  }, [dispatch]);

  if (load.loader) {
    return <Loader />;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div>
      <Boxs data={data} />
    </div>
  );
};

export default Fetch;
