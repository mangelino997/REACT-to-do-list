import React, { Fragment } from 'react';

const Headers = (prop: { reset: () => void }) => {
    // Show todays date
    const op = { weekday: "long", month: "short", day: "numeric" };
    const today = new Date();
    let date = today.toLocaleDateString("en-ES", op);
    let hour = today.getHours() + ':' + today.getMinutes();
    // Show Location
    var options = {
        enableHighAccuracy: true,
        timeout: 6000,
        maximumAge: 0
    };
    navigator.geolocation.getCurrentPosition(success, error, options);
    function success(position: any) {
        var coordenadas = position.coords;
        console.log('Tu posición actual es:');
        console.log('Latitud : ' + coordenadas.latitude);
        console.log('Longitud: ' + coordenadas.longitude);
        console.log('Más o menos ' + coordenadas.accuracy + ' metros.');
    };
    function error(error: any) {
        console.warn('ERROR(' + error.code + '): ' + error.message);
    };

    return (
        <Fragment>
            <div className="header">
                <div className="clear">
                    <i className="fa fa-refresh" onClick={prop.reset}></i>
                </div>
                <div className="box-today">
                    <p className="today-day">AR</p> </div>
                <div id="date">{date}</div>
                <div id="hour">{hour}</div>
            </div>
        </Fragment>
    )
}
export default Headers;