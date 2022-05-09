
async function get_posts()
{
    const posts_url = 'https://jsonplaceholder.typicode.com/posts'
    const posts = await (await fetch(posts_url)).json()

    return posts
}

async function get_users()
{
    const users_url = 'https://jsonplaceholder.typicode.com/users'
    const users = await (await fetch(users_url)).json()

    return users
}


// (we show the username of the user with id equal to userId from post)
function TwatComponent({imageID, username, body})
{
    const twatCard= document.createElement('div')
    //twatCard.innerText = body
    twatCard.className = 'twat-card'

    const proPicElement = document.createElement('div')
        proPicElement.className = "twat-author-picture"

        const proPicImage = document.createElement('img')
            proPicImage.src = `https://picsum.photos/id/${imageID}/100`
            console.log(`Image source: ${proPicImage.src}`)
        proPicElement.appendChild(proPicImage)
    twatCard.appendChild(proPicElement)

    // twat body area (author name + twat body proper)
    const twatBodyDisplay = document.createElement('div')
        twatBodyDisplay.className = "twat-body-display"
    twatCard.appendChild(twatBodyDisplay)

    // author name display
    const twatAuthorElement = document.createElement('a')
    twatAuthorElement.innerText = username
        twatAuthorElement.href="#0"
        twatAuthorElement.className = "twat-author-name"
    twatBodyDisplay.appendChild(twatAuthorElement)

    // twat body proper
    const twatBodyElement = document.createElement('div')
        twatBodyElement.innerText = body
        twatBodyElement.className = "twat-body"
    twatBodyDisplay.appendChild(twatBodyElement)

    return twatCard
}

function addTwatElements(twatElements)
{
    const twatFeedElement = document.getElementById('twat-feed')
    twatElements.forEach(twat => twatFeedElement.appendChild(twat))
}




const main = async () => {
    const users = await get_users()
    const posts =  await get_posts()
    const imageIDs = users.map(user => {
        return Math.floor(Math.random() * 1024)
    })

    const twats = posts.map(post => {
        // select a user 
        const userIndex = Math.floor(Math.random() * users.length)

        return TwatComponent({username: users[userIndex].name, body: post.body, imageID: imageIDs[userIndex]})
    })



    //const twats = []
    //for(let i = 0; i < 10; ++i) 
    //    twats.push(TwatComponent({userId: 123, id: 1234, body: 'Twat body here!!! Yay! lol I dunno what to twat'}, []))

    addTwatElements(twats)
}

console.log('buga buga')

window.onload = main
