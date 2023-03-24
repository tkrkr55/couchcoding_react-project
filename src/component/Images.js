import { useContext } from "react"
import { ImageContext } from "../App"
import { Image } from "./Image"
import MyCard from "./MyCard"

export const Images = () => {
  const {response,isLoading} =useContext(ImageContext)
  return (
    <>
      <h1 className="text-center mt-6 underline txt-2xl">Results for Cats  </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4  gap-4 my-10 max-w-7xl mx-auto px-4" >
        <MyCard/>
        {response.map((data, key)=> <Image key={key} data={data}/>)}
        
      </div>
    </>
  )
}
