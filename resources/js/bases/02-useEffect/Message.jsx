import { useEffect } from "react"

export const Message = () => {

    useEffect(() => {
      console.log('Aquí estoy')
    
      return () => {
        console.log('Ya me fuí')
      }
    }, [])
    

  return (
    <>
    <h1>Me rendericé</h1>
    </>
  )
}