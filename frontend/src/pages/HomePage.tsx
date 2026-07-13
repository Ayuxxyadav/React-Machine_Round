import { useState } from "react"


export const HomePage = () => {
  
    const [name ,setName] = useState("")
    const [email ,setEmail] = useState("")
    const [mobileNumber ,setMobileNumber] = useState("");
    const [feedback ,setFeedback] = useState("")
    const [rating,setRating] = useState("")
 

    const[loading,setLoading]= useState(false);
    const[error ,setError]= useState("");
    const[success,setSuccess]= useState(false);


   function handleSubmit(){
      if(!name || !email || !mobileNumber || !feedback || !rating){
        return setError("all field required");
      }
    }
  
    return (
    <>
    
      <h1 className="text-blue-600 text-6xl text-center my-5 py-10">User Feedback Form </h1>

     <div>

     <div className="flex text-4xl gap-8 text-blue-400 px-25 py-4 ">
        <h1 >1. Name </h1>
        <input  className ="bg-yellow-200 rounded-md "type="text"  placeholder=" " value={name}   onChange={(e)=>setName(e.target.value)}/> 
     </div>
          <div className="flex text-4xl gap-8 text-blue-400 px-25 py-4 ">
        <h1 >2. Email </h1>
        <input  className ="bg-yellow-200 rounded-md "type="text"  placeholder=" " value={email}   onChange={(e)=>setEmail(e.target.value)}/> 
     </div>
          <div className="flex text-4xl gap-8 text-blue-400 px-25 py-4 ">
        <h1 >3. Mobile Number </h1>
        <input  className ="bg-yellow-200 rounded-md "type="text"  placeholder=" " value={mobileNumber}   onChange={(e)=>setMobileNumber(e.target.value)}/> 
     </div>
          <div className="flex text-4xl gap-8 text-blue-400 px-25 py-4 ">
        <h1 >4. FeedBack </h1>
        <input  className ="bg-yellow-200 rounded-md "type="text"  placeholder=" " value={feedback}   onChange={(e)=>setFeedback(e.target.value)}/> 
     </div>
        <div className="flex text-4xl gap-8 text-blue-400 px-25 py-4 ">
        <h1 >5. Rating </h1>
        <input  className ="bg-yellow-200 rounded-md "type="text"  placeholder=" " value={rating}   onChange={(e)=>setRating(e.target.value)}/> 
     </div>


     </div> 
   


    {error && <p className="text-red-500 text-2xl text-center">{error}</p>}
      {success && <p className="text-green-500 text-2xl text-center">Submitted successfully!</p>}
    <button 
    className=" text-4xl gap-8 text-blue-400 px-50 py-4  text-red-600"
     disabled={loading}
     onClick={()=>handleSubmit()}
     > {loading ? "Submitting.." : "Submit"} </button>
    
     
    
    </>

  )
}
