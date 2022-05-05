
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

//function TwatComponent({userId, id, title})
//{
//    const twatElement = new HTMLDivElement()
//
//    usernam
//}




(async () => {
    const posts =  await get_posts()
    //console.log(posts[0])

    const users = await get_users()
    console.log(users[0])
})()

console.log('buga buga')
