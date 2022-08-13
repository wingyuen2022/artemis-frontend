import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  HStack,
  IconButton,
  Input,
  SkeletonText,
  Text,
} from "@chakra-ui/react";
import { FaLocationArrow, FaTimes } from "react-icons/fa";

import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
} from "@react-google-maps/api";
import { useSelector } from "react-redux";
import { Col, Row } from "react-bootstrap";
import { openWeatherAPI } from '../../util/util.js';

const center = { lat: 48.8584, lng: 2.2945 };

const MapComponent = () => {
  const navigate = useNavigate();
  const route = useSelector(state => state.routeReducer);
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyBa86Y0iLt7O9ShPjbWpMpvD7wJqNS2QVA",
    libraries: ["places"],
  });

  //const [map, setMap] = useState(/** @type google.maps.Map */ (null));
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");
  const [weather, setWeather] = useState(null);

  /** @type React.MutableRefObject<HTMLInputElement> */
  //const originRef = useRef();
  /** @type React.MutableRefObject<HTMLInputElement> */
  //const destiantionRef = useRef();

  useEffect(()=>{
    const org = route.origin;
    const des = route.destination;
    const googleObj = window.google;
    if (googleObj) {
      const directionsService = new window.google.maps.DirectionsService();
      directionsService.route({
        origin: org,
        destination: des,
        // eslint-disable-next-line no-undef
        travelMode: google.maps.TravelMode.WALKING,
      }).then((res)=>{
        setDirectionsResponse(res);
        setDistance(res.routes[0].legs[0].distance.text);
        setDuration(res.routes[0].legs[0].duration.text);
        const lat = res.routes[0].overview_path[0].lat();
        const long = res.routes[0].overview_path[0].lng();
        getWeather(lat, long);
      });
    } else {
      console.log('null');
    }
  }, []);

  const getWeather = (lat, long) => {
    openWeatherAPI('weather', lat, long)
      .then((res) => res.json())
      .then((res) => {
          setWeather(res);
      }).catch((err) => {
          console.log(err);
      });
  };

  if (!isLoaded) {
    return <SkeletonText />;
  }

  return (
      <Flex
        position="relative"
        flexDirection="column"
        alignItems="center"
        h="100vh"
        w="100vw"
      >
        <Box position="absolute" left={0} top={0} h="100%" w="100%">
          {/* Google Map Box */}
          <GoogleMap
            center={center}
            zoom={15}
            mapContainerStyle={{ width: "100%", height: "100%" }}
            options={{
              zoomControl: false,
              streetViewControl: false,
              mapTypeControl: false,
              fullscreenControl: false,
            }}
            /*onLoad={(map) => {
              map.setZoom(100);
              setMap(map);
            }}*/
          >
            <Marker position={center} />
            {directionsResponse && (
              <DirectionsRenderer directions={directionsResponse} />
            )}
          </GoogleMap>
        </Box>
        <Box
          p={1}
          borderRadius="lg"
          m={1}
          bgColor="#EFDDB7"
          shadow="base"
          minW="container.md"
          zIndex="1">
          <Row>
            <Col><Button id="back-btn" onClick={()=>{
              navigate(-1);
            }}>Back</Button></Col>
          </Row>
          <Row>
            <Col><Text>{distance} ({duration})</Text></Col>
          </Row>
          <Row>
            <Col>{(weather !== null) ? (<><Text>{weather.main.temp} &deg;C ({weather.main.humidity}%)</Text></>):(<></>)}</Col>
          </Row>
          <Row>
            <Col></Col>
          </Row>
        </Box>
      </Flex>
  );
};

export default MapComponent;

/*
            <Col>{(weather !== null) ? (<><Text>{weather.name}</Text></>):(<></>)}</Col>
            <Col>{(weather !== null) ? (<><img src ={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`} alt="wthr img" /></>):(<></>)}</Col>
            <Col>{(weather !== null) ? (<><Text>{weather.weather[0].main}</Text></>):(<></>)}</Col>
*/
/*
<Col>{(weather !== null) ? (<><Text>{weather.main.humidity} %</Text></>):(<></>)}</Col>
*/

/*async function calculateRoute() {
    if (originRef.current.value === "" || destiantionRef.current.value === "") {
      return;
    }
    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService();
    const results = await directionsService.route({
      origin: originRef.current.value,
      destination: destiantionRef.current.value,
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.WALKING,
    });
    setDirectionsResponse(results);
    setDistance(results.routes[0].legs[0].distance.text);
    setDuration(results.routes[0].legs[0].duration.text);
  }

  function clearRoute() {
    setDirectionsResponse(null);
    setDistance("");
    setDuration("");
    originRef.current.value = "";
    destiantionRef.current.value = "";
  }
*/
/*
<HStack spacing={2} justifyContent="space-between">
            <Box flexGrow={1}>
              <Autocomplete>
                <Input type="text" placeholder="Origin" ref={originRef} />
              </Autocomplete>
            </Box>
            <Box flexGrow={1}>
              <Autocomplete>
                <Input
                  type="text"
                  placeholder="Destination"
                  ref={destiantionRef}
                />
              </Autocomplete>
            </Box>

            <ButtonGroup>
              <Button colorScheme="pink" type="submit" onClick={calculateRoute}>
                Calculate Route
              </Button>
              <IconButton
                aria-label="center back"
                icon={<FaTimes />}
                onClick={clearRoute}
              />
            </ButtonGroup>
          </HStack>
*/
/*
<IconButton
              aria-label="center back"
              icon={<FaLocationArrow />}
              isRound
              onClick={() => {
                map.panTo(center);
                map.setZoom(15);
              }}
            />
*/