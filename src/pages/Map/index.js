import MapComponent from "../../components/MapComponent";
import { ChakraProvider, theme } from "@chakra-ui/react";

const Map = () => {

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
