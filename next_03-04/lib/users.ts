export async function getUsersData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }
  export async function getUserData(userId:string) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }
  export async function getUserPostData(userId:string)  {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }
   