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
        password: "##########"

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

export async function PUT(request : Request){

    const data = await request.json()
    const { roomId, a, c, email, checkInReq, checkOutReq } = data
    console.log("server: ", roomId, a, c, email, checkInReq, checkOutReq )

    const dbconnection = await mysql.createConnection({
        host: "localhost",
        database: "hotel",
        user: "root",
        password: "ghepardo98"

    })

    try {
        const query = `INSERT INTO Reservations (user, room, checkin, checkout, adult, child)
        VALUES(
            '${email}',
            '${roomId}',
            '${checkInReq}',
            '${checkOutReq}',
            '${a}',
            '${c}'
        );`
                
        await dbconnection.execute(query);
        dbconnection.end();

        console.log("server data: ",data)

        return NextResponse.json({ results: "ok"})
    } catch (error : any) {
        return NextResponse.json({error: error.message})
    }
}

