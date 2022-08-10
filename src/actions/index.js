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