$(() => {
    $(".stdout").append(`<span>start calling main ...</span>`)
    window.api.send('toMain', 'captureLogs')
    
    window.api.receive("fromMain", (data) => {
        console.log(`Received ${data} from main process`)
        $(".stdout").append(`<span>Received: ${data}</span>`)
    })
})
