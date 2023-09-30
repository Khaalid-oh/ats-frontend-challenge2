import Image from 'next/image';
import React, {useState} from 'react'
Image

function DP() {
  const [displayImage, setDisplayImage] = useState<string | null>(null);

   const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
     if (e.target.files && e.target.files.length > 0) {
       const file = e.target.files[0];

       if (file && file.size > 1024 * 1024) {
         alert("Image size exceeds 1MB");
         return;
       }

       const reader = new FileReader();

       reader.onloadend = () => {
         setDisplayImage(reader.result as string);
       };

       reader.readAsDataURL(file);
     }
   };

  return (
    <>
      {!displayImage ? (
        <label
          className="bg-gray-300 w-7 h-7 rounded-full cursor-pointer"
          htmlFor="dp"
        >
          <span className='hidden'>Upload image</span>
          <input
            id="dp"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
          />
        </label>
      ) : (
        <div className="w-7 h-7 flex items-center justify-center rounded-full">
          <Image src={displayImage} alt="Preview" height="5" width="5" className='rounded-full w-7 h-7'/>
        </div>
      )}
    </>
  );
}

export default DP
