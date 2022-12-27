import React from "react";
// function PicUploader() {
//     const uploadedImage = React.useRef(null)

//     function handleImageUpload(e) {
//         console.log(e.target.result)
//         const [file] = e.target.files;
//         if (file) {
//             const reader = new FileReader();
//             const { current } = uploadedImage;
//             reader.onload = (e) => {
//                 current.src = e.target.result;
//             }
//             reader.readAsDataURL(file);
//         }
//     }

//     return (
//         <>
            
//                 <div className="grid w-full h-full py-3"> 
//                     <label>
//                         <input hidden type="file" accept="image/*" onChange={handleImageUpload} />
//                         <img ref={uploadedImage} className="border-solid border-black border-2 h-48 w-48 mx-auto rounded-full" />
//                     </label>
//                 </div>
                
//             </>
       
//     )
// }



export const Picuploader = () => {

    const uploadedImage = React.useRef(null);

    function handleImageUpload(e){
        console.log(e.target.result)
        const [file]=e.target.files
        if(file){
            const reader= new FileReader();
            const {current} = uploadedImage;
            reader.onload=(e)=>{
                current.src=e.target.result
            }
            reader.readAsDataURL(file)
        }
    }

  return (
    <>
        <div className="grid w-full h-full py-3">
            <label>
                <input hidden type="file" accept="image/*" onChange={handleImageUpload} />
                <img ref={uploadedImage} className="border-solid border-black border-2 h-48 w-48 mx-auto rounded-full"/>
            </label>
        </div>
    </>
  )
}




export default Picuploader;