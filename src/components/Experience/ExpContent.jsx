import React from "react";
import ExpCard from "./ExpCard";

const ExpContent = () => {
  return (
    <div className="flex flex-row lg:m-10">
      <div className=" hidden lg:block  box-shape bg-[#4a4b53] w-28 h-28 py-4 px-4 m-4 items-center justify-center ">
        <p className="text-[#fff] pr-6 py-4 text-3xl">2023</p>
      </div>
      <div className="hidden lg:flex flex-col ">
        <div className=" w-8 h-8 my-4 mx-6 rounded-full bg-[#e5b96d] custom-shadow "></div>
        <div className="lg:h-96 w-1 bg-[#fff] m-10"></div>
      </div>
      {/* <div className="lg:hidden flex flex-col ">
        <ExpCard
          title="React Developer"
          location="New Delhi ,india "
          description="orem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.orem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Aldus PageMaker including versions of Lorem Ipsum.orem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
        ></ExpCard>
      </div> */}

      <div className="flex flex-row ">
        <ExpCard
          title="React Developer "
          location="New Delhi ,india "
          description="orem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.orem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Aldus PageMaker including versions of Lorem Ipsum.orem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
        ></ExpCard>
      </div>
    </div>
  );
};

export default ExpContent;
