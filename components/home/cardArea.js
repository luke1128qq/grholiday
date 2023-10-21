import React from "react";

export default function CardArea() {
    const cardList = [
        {
            src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",
            alt: "123456789",
        },
        {
            src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
            alt: "123456789",
        },
        {
            src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png",
            alt: "123456789",
        },
        {
            src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/12.png",
            alt: "123456789",
        },
        {
            src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/15.png",
            alt: "123456789",
        },
        {
            src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/18.png",
            alt: "123456789",
        },
    ];
    return (
        <div className="d-flex row justify-content-center">
            {cardList.map((v, i) => {
                return (
                    <>
                        <div
                            className="card col-4 mx-3 my-3"
                            style={{ width: "350px" }}
                            key={i}
                        >
                            <img
                                src={v.src}
                                className="card-img-top"
                                alt="..."
                            />
                            <div className="card-body d-flex justify-content-center">
                                <p className="card-text">{v.alt}</p>
                            </div>
                        </div>
                    </>
                );
            })}{" "}
            
        </div>
    );
}
