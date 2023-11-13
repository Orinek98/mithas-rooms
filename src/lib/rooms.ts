
export async function getAllRooms(){
    const res = await fetch('http://localhost:3000/api/rooms',{
      cache: 'no-store',
    });
    const data = await res.json();
    return data.results;
  }