$(() => {
    $(".stdout").append(`<span>srart running </span>`)
    window.api.send('toMain', 'captureLogs')
    
    window.api.receive("fromMain", (data) => {
        console.log(`Received ${data} from main process`)
        $(".stdout").append(`<span>${data}</span>`)
    })
})
