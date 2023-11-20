import { getAllRooms } from "@/lib/rooms";
import type { dbRooms } from "@/lib/rooms";

export default async function RoomsPage() {
    const data = await getAllRooms();

  return (
    <div>
        {data.map((room: dbRooms ) =>(
            <div key={room.id as string}>
                {room.name}
            </div>
        )
        )}
    </div>
  )
}
