function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
  function deg2rad(deg) {
    return deg * (Math.PI / 180);
  }

  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2 - lat1); // deg2rad below
  var dLon = deg2rad(lon2 - lon1);
  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c; // Distance in km
  return d;
}

function orderStores(stores, sortBy) {
  return stores.sort((store1, store2) => {
    let compare1, compare2;
    if (sortBy === 'price') {
      compare1 = store1.price.h || 10000;
      compare2 = store2.price.h || 10000;
    } else {
      compare1 = store1[sortBy];
      compare2 = store2[sortBy];
    }
    if (compare1 < compare2) {
      return -1;
    }
    if (compare1 > compare2) {
      return 1;
    }
    return 0;
  });
}

export { getDistanceFromLatLonInKm, orderStores };
