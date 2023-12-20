import React from 'react'
import Link from 'next/link'

export default function Rooms() {
  return (
    <section className='grid gap-y-4 py-6'>
        <div className='flex flex-wrap justify-center gap-y-4 gap-x-4'>
            <article className="card">
                <img
                    className="card__background"
                    src="/rooms/matrimoniale.jpg"
                    alt="Teal 2"
                    width="1920"
                    height="2193"
                />
                <div className="card__content | flow">
                    <div className="card__content--container | flow">
                    <h2 className="card__title text-2xl">Teal</h2>
                    <p className="card__description text-md">
                    This is Mitha’s most luxurious room, characterized by its wonderful double bed...
                    </p>
                    </div>
                    <button className="card__button">Read more</button>
                </div>
                </article>

            <article className="card">
                <img
                    className="card__background"
                    src="/rooms/matrimoniale.jpg"
                    alt="Teal 2"
                    width="1920"
                    height="2193"
                />
                <div className="card__content | flow">
                    <div className="card__content--container | flow">
                    <h2 className="card__title text-2xl">Orange</h2>
                    <p className="card__description">
                    This is Mitha’s most luxurious room, characterized by its wonderful double bed...
                    </p>
                    </div>
                    <button className="card__button">Read more</button>
                </div>
                </article>

            <article className="card">
                <img
                    className="card__background"
                    src="/rooms/matrimoniale.jpg"
                    alt="Teal 2"
                    width="1920"
                    height="2193"
                />
                <div className="card__content | flow">
                    <div className="card__content--container | flow">
                    <h2 className="card__title text-2xl">Blue</h2>
                    <p className="card__description">
                    This is Mitha’s most luxurious room, characterized by its wonderful double bed...
                    </p>
                    </div>
                    <button className="card__button">Read more</button>
                </div>
            </article>
        </div>
        <div className='grid justify-center'>
            <article className="cardxl">
                    <img
                        className="cardxl__background"
                        src="/rooms/bella.jpg"
                        alt="Teal 2"
                        width="1920"
                        height="2193"
                    />
                    <div className="cardxl__content | flowxl">
                        <div className="cardxl__content--container | flowxl">
                            <h2 className="cardxl__title text-2xl">Comm Rooms</h2>
                            <p className="cardxl__description">
                                This is Mitha’s most luxurious room, characterized by its wonderful double bed...
                            </p>
                        </div>
                        <button className="cardxl__button">Read more</button>
                    </div>
            </article>
        </div>
    </section>
  )
}


{/* <h1 className='text-4xl px-10 my-10'>The Rooms</h1> */}