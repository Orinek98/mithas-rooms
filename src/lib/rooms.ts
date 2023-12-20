
export async function getAllRooms(){
    const res = await fetch('http://localhost:3000/api/rooms',{
      cache: 'no-store',
    });
    const data = await res.json();
    return data.results;
  }

  export type dbReservation = {
    id: string,
    user: string,
    room: String,
    checkin: Date,
    checkout: Date
  }
  
  export type dbRooms = {
    id: string,
    name: string,
    slot: number
    price: number
    reservedSlot: number
  }
  
  export type option = {
    value: string | number,
    label: string
  }
  
  export type FormValues = {
    first_name: string,
    last_name: string,
    email: string,
    phone: string,
    country: string,
    room : {
      name: {
        label: string;
        value: number
      },
      slot: {
        label: string;
        value: number
      }
    }[];
  }


  export type FormRoom = {
    room: dbRooms,
    adult: number,
    child: number
  }