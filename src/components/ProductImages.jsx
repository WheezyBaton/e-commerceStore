"use client";

import Image from "next/image";
import { useState } from "react";

const images = [
      {
            id: 1,
            url: "https://images.pexels.com/photos/30368522/pexels-photo-30368522/free-photo-of-jesien-na-wyspie-muzeow-w-berlinie-niemcy.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
      },
      {
            id: 2,
            url: "https://images.pexels.com/photos/30426268/pexels-photo-30426268/free-photo-of-majestatyczny-krajobraz-snieznych-gor-zima.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
      },
      {
            id: 3,
            url: "https://images.pexels.com/photos/30450013/pexels-photo-30450013/free-photo-of-pilka-powietrzna.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
      },
      {
            id: 4,
            url: "https://images.pexels.com/photos/29572017/pexels-photo-29572017/free-photo-of-czarno-biale-wybrzeze-rabatu-maroko.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
      },
];

const ProductImages = () => {
      const [index, setIndex] = useState(0);

      return (
            <div className="">
                  <div className="h-[500px] relative">
                        <Image
                              src={images[index].url}
                              alt=""
                              fill
                              sizes="50vw"
                              className="object-cover rounded-md"
                        />
                  </div>
                  <div className="flex justify-between gap-4 mt-8">
                        {images.map((img, i) => (
                              <div
                                    className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer"
                                    key={img.id}
                                    onClick={() => setIndex(i)}
                              >
                                    <Image
                                          src={img.url}
                                          alt=""
                                          fill
                                          sizes="30vw"
                                          className="object-cover rounded-md"
                                    />
                              </div>
                        ))}
                  </div>
            </div>
      );
};

export default ProductImages;
