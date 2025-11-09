import React from "react";


const categories = [
  {  img: "src/assets/Ctg/paan-corner_web.avif" },
  {  img: "src/assets/Ctg/Slice-2_10.avif" },
   {  img: "src/assets/Ctg/Slice-3_9.avif" },
    {  img: "src/assets/Ctg/Slice-4_9.avif" },
     {  img: "src/assets/Ctg/Slice-5_4.avif" },
      {  img: "src/assets/Ctg/Slice-6_5.avif" },
       {  img: "src/assets/Ctg/Slice-7_3.avif" },
        {  img: "src/assets/Ctg/Slice-8_4.avif" },
         {  img: "src/assets/Ctg/Slice-9_3.avif" },
          {  img: "src/assets/Ctg/Slice-10.avif" },
           {  img: "src/assets/Ctg/Slice-11.avif" },
            {  img: "src/assets/Ctg/Slice-12.avif" },
             {  img: "src/assets/Ctg/Slice-13.avif" },
              {  img: "src/assets/Ctg/Slice-14.avif" },
               {  img: "src/assets/Ctg/Slice-15.avif" },
                {  img: "src/assets/Ctg/Slice-16.avif" },
                 {  img: "src/assets/Ctg/Slice-17.avif" },
                  {  img: "src/assets/Ctg/Slice-18.avif" },
                   {  img: "src/assets/Ctg/Slice-19.avif" },
                    {  img: "src/assets/Ctg/Slice-20.avif" },
                   
];

export default function Categories() {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <h2 className="text-lg font-semibold mb-4">Shop by Category</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-10 gap-2">
        {categories.map((cat) => (
          <div key={cat.name} className="flex flex-col items-center">
            <div className="w-40 h-40 flex items-center justify-center mb-2   ">
              <img
                src={cat.img}
                alt={cat.name}
                className="object-contain w-full h-full rounded-lg"
                loading="lazy"
              />
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
}
