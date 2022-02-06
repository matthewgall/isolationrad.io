function getRadio() {
    let ts = Math.floor(Date.now() / 1000)
    $.getJSON( `https://cast1.asurahosting.com:2199/external/rpc.php?m=streaminfo.get&username=matthew1&charset=&mountpoint=&rid=matthew1&ts=${ts}`, function( data ) {
        let track = data['data'][0]['track']
        
        $('p#nowplaying').html(`<strong>Now Playing: </strong> ${track['artist']} - ${track['title']}`)
    })
}

$(function() {
    setInterval(function(){
        getRadio()
    }, 5000);
    getRadio();
})