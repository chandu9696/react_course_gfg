import { useParams } from "react-router-dom"

export default function HotelDetails()
{
    const userParams = useParams<{ hotelID: string }>();
    // console.log(userParams.hotelID)
    return(
        <>
        <h2>Creatting call with respect to Hotel Id's</h2>
        <p>{userParams.hotelID}</p>
        </>
    )
}