"use client";
import React from "react";
import { useParams } from "next/navigation";

function page() {
  const params = useParams();
  const id = params?.id;

  return (
    <div className="flex flex-grow justify-center pt-20">Welcome {id}</div>
  );
}

export default page;
