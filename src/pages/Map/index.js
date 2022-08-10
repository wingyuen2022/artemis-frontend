import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setTitle } from "../../actions";
import MapComponent from "../../components/MapComponent";
import { ChakraProvider, theme } from "@chakra-ui/react";

const Map = () => {
  //const { xxx } = useParams();
  //const [ curXXX, setCurXXX] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  dispatch(setTitle("Map"));

  useEffect(() => {}, []);

  const renderHTML = () => {
    return (
      <>
        <div className="row">
          <div className="col">
            <ChakraProvider theme={theme}>
              <MapComponent />
            </ChakraProvider>
          </div>
        </div>
      </>
    );
  };

  return renderHTML();
};
export default Map;
