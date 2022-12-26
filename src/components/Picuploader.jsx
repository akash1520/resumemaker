import React from "react";
import { Profilesect } from "./Profilesect";
function PicUploader() {
    const uploadedImage = React.useRef(null)

    function handleImageUpload(e) {
        console.log(e.target.result)
        const [file] = e.target.files;
        if (file) {
            const reader = new FileReader();
            const { current } = uploadedImage;
            reader.onload = (e) => {
                current.src = e.target.result;
            }
            reader.readAsDataURL(file);
        }
    }

    return (
        <div>
            <div className="grid grid-rows-2 md:grid-cols-2"> {/*first section having two other sections*/}
                <div className="grid w-full h-full py-3"> 
                    <label>
                        <input hidden type="file" accept="image/*" onChange={handleImageUpload} />
                        <img ref={uploadedImage} className="border-solid border-black border-2 h-48 w-48 mx-auto rounded-full" />
                    </label>
                </div>
                <Profilesect/>
            </div>
        </div>
    )
}

export default PicUploader;