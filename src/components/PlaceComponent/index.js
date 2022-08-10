import React, { useEffect, useRef } from "react";
import { Spinner } from "react-bootstrap";
import { useJsApiLoader, Autocomplete } from "@react-google-maps/api";

const PlaceComponent = ({placeholder}) => {
    useEffect(()=>{

    }, []);

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: "AIzaSyBa86Y0iLt7O9ShPjbWpMpvD7wJqNS2QVA",
        libraries: ["places"],
    });

    /** @type React.MutableRefObject<HTMLInputElement> */
    const ref = useRef();

    if (!isLoaded) {
        return <Spinner />;
    }

    return (
        <Autocomplete>
            <input id={placeholder.toLowerCase()} type="text" name="origin-form" placeholder={placeholder} ref={ref} />
        </Autocomplete>
    );
}

export default PlaceComponent;
