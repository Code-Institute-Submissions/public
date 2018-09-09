var restaurants = [
    {
        name: "Chapter One Restaurant",
        address: "18-19 Parnell Square N, Rotunda, Dublin 1",
        lat: 53.3543114,
        lon: -6.3345046
    },
    {
        name: "Liberty Grill",
        address: "32 Washington St, Centre, Cork, T12 T880",
        lat: 51.897749,
        lon: -8.482450
    },
    {
        name: "The Cottage Restaurant",
        address: "Jamestown, Carrick-On-Shannon, Co. Leitrim",
        lat: 53.9294075,
        lon: -8.1031368
    },
    {
        name: "Bruce & Laura Mulcahy",
        address: "Main St, Kenmare, Co. Kerry",
        lat: 51.8798241,
        lon: -9.582556
    },
    {
        name: "The Courthouse Restaurant",
        address: "Main St, Kinlough, Co. Leitrim",
        lat: 54.4475779,
        lon: -8.2875277
    },
    {
        name: "The Tannery",
        address: "Quay Street, Dungarvan, Co Waterford",
        lat: 52.08864,
        lon: -7.61677
    },
];

/* Calculate distance between two points in Earth in KM */
function getDistance(lat1, lon1, lat2, lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2 - lat1); // deg2rad below
    var dLon = deg2rad(lon2 - lon1);
    var a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in km
    return d;
}

function deg2rad(deg) {
    return deg * (Math.PI / 180)
}
