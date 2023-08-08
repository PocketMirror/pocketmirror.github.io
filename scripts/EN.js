const shows = [
    //     {
    //     Name: "Ensaio Aberto",
    //     Data: "20/06/23",
    //     Time: "8:30 PM",
    //     LocalS: "heilige Pocket",
    //     Street: "Marechal deodoro 6969",
    //     Block: "Centro",
    //     City: "Santa Cruz do Sul",
    //     Value: null,
    //     Cents: 50,
    //     Link: 'https://youtube.com',
    //     Button: 'Buy 👨🏿‍🚒'
    // },
]


    shows.forEach((show)=> {
        console.log('loading shows')
        const div = document.createElement('div')
        const title = document.createElement('h2')
        const time = document.createElement('p')
        const place = document.createElement('p')
        const valueF = document.createElement('p')
        let value = null
    
        console.log('injecting shows')
        div.classList.add('show')
        title.innerHTML = show.Name
        time.innerHTML = `Date:${show.Data}<br>At ${show.Time}`
        place.innerHTML = `Local:<br>${show.LocalS}<br>${show.Street} - ${show.Block}<br>${show.City}`
        
        console.log('indentifing value')
        if (show.Value == null) {
            value = 'Free'
            console.log('value free')
        } else if (typeof show.Value === "number") {
            value = `$${show.Value},${show.Cents}`
            console.log('value number')
        }else if (typeof show.Value === "string") {
            value = show.Value
            console.log('value other')
        }else {
            console.error('Value undefined')
        }
      
        valueF.innerHTML = `Entrada:<br>${value}`
        
        div.appendChild(title)
        div.appendChild(time)
        div.appendChild(place)
        div.appendChild(valueF)
    
        if (typeof show.Link === "string") {
            const link = document.createElement('a')
     
            link.innerHTML = show.Button
            link.href = show.Link
    
            div.appendChild(link)
         }
    
        document.getElementById('insideS').appendChild(div)
    
    
    })
    if(shows.length === 0) {
        const no = document.createElement('p')
    
        no.classList.add('message')
        no.innerHTML = "Looks like we doesn't have nothing here... Yet"
        document.getElementById('insideS').appendChild(no)
        
    }