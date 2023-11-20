import type { dbReservation } from "@/lib/rooms"
import mysql from "mysql2/promise"
import { NextResponse } from 'next/server'

export async function POST(request : Request){

    const data = await request.json()
    const { checkInReq, checkOutReq, count, name } = data
    console.log("server: ", checkInReq, checkOutReq)

    const dbconnection = await mysql.createConnection({
        host: "localhost",
        database: "hotel",
        user: "root",
        password: "ghepardo98"

    })


    try {
        const query = `SELECT * 
            FROM ROOMS 
            WHERE name NOT IN ( 
                SELECT room FROM RESERVATIONS 
                WHERE NOT (checkout < DATE('${checkInReq}') 
                            OR checkin > DATE('${checkOutReq}')))`
                
        const values = [] as dbReservation[]
        const [data] = await dbconnection.execute(query, values);
        dbconnection.end();

        console.log("server data: ",data)

        return NextResponse.json({ results: data})
    } catch (error : any) {
        return NextResponse.json({error: error.message})
    }
}

// SELECT *
// FROM Rooms
// WHERE name NOT IN (
//     SELECT room FROM Reservations
//     WHERE NOT (checkout   < '2023-12-18'
//                OR
//                checkin > '2023-12-20'))

// WHERE checkin = DATE('${checkInReq}')



// `Select * FROM RESERVATIONS WHERE NOT
//         checkin BETWEEN ${checkIn} AND ${checkOut} AND WHERE NOT
//         checkout BETWEEN ${checkIn} AND ${checkOut}`


// `Select * 
//             FROM RESERVATIONS 
//             WHERE checkin > DATE('${checkInReq}') `


