window.addEventListener("load",()=>{
    let long;
    let lat;

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition( position=>{
                lat=position.coords.latitude;
                long=position.coords.longitude;

        const proxy='https://cors-anywhere.herokuapp.com/';
        const api='${proxy}https://api.darksky.net/forecast/7d10c7d3641db429ada23e5ef0f820b1/${lat},${long}';

        fetch(api)
            .then(respone=>{
                return response.json();
            })
            .then(data=>{
                console.log(data);
            });
        });
    }
});