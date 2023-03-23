import Image from "next/image"
import { useEffect, useState } from "react"
import { BsFillPlayFill, BsPlay } from "react-icons/bs"
import { HiInformationCircle } from "react-icons/hi"
import { baseUrl } from "../constants/movie"
import { Movie } from "../typings"

interface Props {
    netflixOriginals: Movie[]
}

function Banner({ netflixOriginals }: Props) {

    const [movie, setMovie] = useState<Movie | null>(null)

    useEffect(() => {
        setMovie(netflixOriginals[
            Math.floor(
                Math.random() * netflixOriginals.length)
        ])
    }, [netflixOriginals])


    return (
        <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end
        lg:pb-12">
            <div className="absolute top-0 left-0 fill h-[100vh] w-[100%] -z-10 ">
                <Image
                    src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
                    fill
                    objectFit="cover"
                    alt={""}
                />
            </div>

            <h1 className="text-2xl font-bold lg:text-7xl md:text-4xl ">
                {movie?.title || movie?.name || movie?.original_name}</h1>
            <p className="max-w-xs drop-shadow-lg text-xs md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">
                {movie?.overview}
            </p>

            <div className="flex space-x-3">
                <button className="bannerButton bg-white text-black">
                    <BsFillPlayFill
                        className="
                        h-4 w-4 text-black md:h-7 md:w-7"/>Play</button>
                <button className="bannerButton bg-[gray]/70">More Info 
                <HiInformationCircle className="h-5 w-5 md:h-8 md:w-8"/></button>
            </div>
        </div>
    )
}

export default Banner