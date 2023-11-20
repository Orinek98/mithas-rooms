import { getAllRooms } from "@/lib/rooms";

export default async function RoomsPage() {
    const data = await getAllRooms();

  return (
    <div>
        {data.map((room) =>(
            <div key={room.id}>
                {room.name}
            </div>
        )
        )}
    </div>
  )
}
