import React from "react";

export default function CardArea() {
    const cardList = [
        {
            src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
            alt: "1",
        },
        {
            src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
            alt: "2",
        },
        {
            src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",
            alt: "3",
        },
        {
            src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
            alt: "4",
        },
        {
            src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png",
            alt: "5",
        },
        {
            src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
            alt: "6",
        },
    ];
    return (
        <div className="d-flex row justify-content-center">
            {cardList.map((v, i) => {
                return (
                    <>
                        <div
                            className="card col-3 mx-3 my-3"
                            // style={{ width: "18rem" }}
                            key={i}
                        >
                            <img
                                src={v.src}
                                className="card-img-top"
                                alt="..."
                            />
                            <div className="card-body">
                                <p className="card-text">{v.alt}</p>
                            </div>
                        </div>
                    </>
                );
            })}{" "}
        </div>
    );
}
