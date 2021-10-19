import React from 'react';
var datetime = () => {
    var showdate = new Date();
    var displaytodaysdate = (showdate.getMonth()+1) + '/' + showdate.getDate() + '/' + showdate.getFullYear();
    var dt = showdate.toDateString();
    var displaytime = showdate.getHours() + ':' + showdate.getMinutes() + ':' + showdate.getSeconds();
    return (
        <div>
     
            {dt} = {displaytime}
        </div>
        
    )
}

export default datetime;