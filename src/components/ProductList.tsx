import Link from "next/link";
import Image from "next/image";

const ProductList = () => {
      return (
            <div className=" mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
                  <Link
                        href="/test"
                        className="w-full lex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
                  >
                        <div className="relative w-full h-80">
                              <Image
                                    src="https://images.pexels.com/photos/19534490/pexels-photo-19534490/free-photo-of-wielkie-ciasto.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
                                    alt=""
                                    fill
                                    sizes="25vw"
                                    className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
                              />

                              <Image
                                    src="https://images.pexels.com/photos/30142112/pexels-photo-30142112/free-photo-of-przytulne-zimowe-zakupy-z-rekawiczkami-i-pomaranczami.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
                                    alt=""
                                    fill
                                    sizes="25vw"
                                    className="absolute object-cover rounded-md"
                              />
                        </div>
                        <div className="flex justify-between">
                              <span className="font-medium">Product Name</span>
                              <span className="font-semibold">49PLN</span>
                        </div>
                        <div className="text-sm text-gray-500">
                              My description
                        </div>
                        <button className="rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white">
                              Add to Cart
                        </button>
                  </Link>
                  <Link
                        href="/test"
                        className="w-full lex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
                  >
                        <div className="relative w-full h-80">
                              <Image
                                    src="https://images.pexels.com/photos/19534490/pexels-photo-19534490/free-photo-of-wielkie-ciasto.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
                                    alt=""
                                    fill
                                    sizes="25vw"
                                    className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
                              />

                              <Image
                                    src="https://images.pexels.com/photos/30142112/pexels-photo-30142112/free-photo-of-przytulne-zimowe-zakupy-z-rekawiczkami-i-pomaranczami.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
                                    alt=""
                                    fill
                                    sizes="25vw"
                                    className="absolute object-cover rounded-md"
                              />
                        </div>
                        <div className="flex justify-between">
                              <span className="font-medium">Product Name</span>
                              <span className="font-semibold">49PLN</span>
                        </div>
                        <div className="text-sm text-gray-500">
                              My description
                        </div>
                        <button className="rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white">
                              Add to Cart
                        </button>
                  </Link>
                  <Link
                        href="/test"
                        className="w-full lex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
                  >
                        <div className="relative w-full h-80">
                              <Image
                                    src="https://images.pexels.com/photos/19534490/pexels-photo-19534490/free-photo-of-wielkie-ciasto.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
                                    alt=""
                                    fill
                                    sizes="25vw"
                                    className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
                              />

                              <Image
                                    src="https://images.pexels.com/photos/30142112/pexels-photo-30142112/free-photo-of-przytulne-zimowe-zakupy-z-rekawiczkami-i-pomaranczami.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
                                    alt=""
                                    fill
                                    sizes="25vw"
                                    className="absolute object-cover rounded-md"
                              />
                        </div>
                        <div className="flex justify-between">
                              <span className="font-medium">Product Name</span>
                              <span className="font-semibold">49PLN</span>
                        </div>
                        <div className="text-sm text-gray-500">
                              My description
                        </div>
                        <button className="rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white">
                              Add to Cart
                        </button>
                  </Link>
                  <Link
                        href="/test"
                        className="w-full lex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
                  >
                        <div className="relative w-full h-80">
                              <Image
                                    src="https://images.pexels.com/photos/19534490/pexels-photo-19534490/free-photo-of-wielkie-ciasto.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
                                    alt=""
                                    fill
                                    sizes="25vw"
                                    className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
                              />

                              <Image
                                    src="https://images.pexels.com/photos/30142112/pexels-photo-30142112/free-photo-of-przytulne-zimowe-zakupy-z-rekawiczkami-i-pomaranczami.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
                                    alt=""
                                    fill
                                    sizes="25vw"
                                    className="absolute object-cover rounded-md"
                              />
                        </div>
                        <div className="flex justify-between">
                              <span className="font-medium">Product Name</span>
                              <span className="font-semibold">49PLN</span>
                        </div>
                        <div className="text-sm text-gray-500">
                              My description
                        </div>
                        <button className="rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white">
                              Add to Cart
                        </button>
                  </Link>
            </div>
      );
};

export default ProductList;
