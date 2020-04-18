function getRadio() {
    let ts = Math.floor(Date.now() / 1000)
    $.getJSON( `//centova.isolationrad.io/external/rpc.php?m=streaminfo.get&username=isolation&charset=&mountpoint=&rid=isolation&ts=${ts}`, function( data ) {
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
