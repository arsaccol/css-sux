
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
function TwatComponent({userId, id, body}, users)
{
    const twatElement = document.createElement('div')
    twatElement.innerText = body
    twatElement.className = 'twat-card'

    return twatElement
}

function addTwatElements(twatElements)
{
    const twatFeedElement = document.getElementById('twat-feed')
    twatElements.forEach(twat => twatFeedElement.appendChild(twat))
}




const main = async () => {
    //const users = await get_users()
    //console.log(users[0])
    
    //const posts =  await get_posts()
    //console.log(posts[0])


    const twats = []
    for(let i = 0; i < 100; ++i) 
        twats.push(TwatComponent({userId: 123, id: 1234, body: 'Das ist twat!'}, []))

    addTwatElements(twats)
}

console.log('buga buga')

window.onload = main
