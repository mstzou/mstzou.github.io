$(() => {
    $(".stdout").append(`<span>start calling main ...</span>`)
    window.api.send('StartBackgroundJob')
    
    window.api.receive("UpdateBackgroundJobStatus", (data) => {
        console.log(`Received ${data} from main process`)
        $(".stdout").append(`<span>Received: ${data}</span>`)
    })
})
