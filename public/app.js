function getRadio() {
    $.getJSON( "//centova.isolationrad.io/external/rpc.php?m=streaminfo.get&username=isolation&charset=&mountpoint=&rid=isolation", function( data ) {
        let track = data['data'][0]['track']
        
        $('p#nowplaying').html(`<strong>Now Playing: </strong> ${track['artist']} with ${track['title']}`)
    })
}

$(function() {
    setInterval(function(){
        getRadio()
    }, 20000);
    getRadio();
})