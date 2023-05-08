import axios from "axios";

export const fetchData = () => {
  return (dispatch) => {
    axios
      .get(
        "https://api.plentys.pk/api/v1/public/banner?mobile=1&cityId=1"
      )
      .then((response) => {
        console.log(response.data.data);
        dispatch({ type: "BANNER", payload: response.data.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};


//`https://api.plentys.pk/api/v1/public/banner?mobile=1&cityId=1`,