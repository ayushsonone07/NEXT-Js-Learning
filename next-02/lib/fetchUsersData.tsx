
export default async function fetchUsersData() {
    
    const res = await fetch('https://jsonplaceholder.typicode.com/users/1/posts')
    
    if(!res.ok) throw new Error('Failed to fetch data') 

  return res.json()
  
}
