export const setChat = (chat) => {
    return {
        type: "SET_CHAT",
        payload: chat
    }
};

export const setTitle = (title) => {
    return {
        type: "SET_TITLE",
        payload: title
    }
};

export const setTrip = (trip) => {
    return {
        type: "SET_TRIP",
        payload: trip
    }
};

export const setUser = (user) => {
    return {
        type: "SET_USER",
        payload: user
    }
};

<<<<<<< HEAD:src/actions/index.js
export const addItem = (itemToAdd) => {
    return {
      type: "cart/addItem",
      payload: itemToAdd,
    };
  };
  
  // Create your changeItemQuantity action creator here.
export const changeItemQuantity = (name, newQuantity) => {
    return {
      type: "cart/changeItemQuantity",
      payload: { name: name, newQuantity: newQuantity },
    };
  };

export const setCurrency = (currency) => {
    return {
      type: "currencyFilter/setCurrency",
      payload: currency,
    };
  };

// export const loadData = () => {
//     return {
//       type: "inventory/loadData",
//       payload: inventoryData,
//     };
//   };

export const setSearchTerm = (term) => {
    return {
      type: "searchTerm/setSearchTerm",
      payload: term,
    };
  };
  
export const clearSearchTerm = () => {
    return {
      type: "searchTerm/clearSearchTerm",
    };
  };
=======
export const setOrigin = (origin) => {
    return {
        type: "SET_ORIGIN",
        payload: origin
    }
};

export const setDestination = (destination) => {
    return {
        type: "SET_DESTINATION",
        payload: destination
    }
};
>>>>>>> 92048e0439afce18da89679b9d8d4e095c9df0ba:client/src/actions/index.js
