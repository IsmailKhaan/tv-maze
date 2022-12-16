import React, { useEffect, useState } from "react";
import ArrowLeft from "./ArrowCircleLeft";
import ArrowRight from "./ArrowCircleRight";

function DownPagination({
  list = 0,
  setPage,
  page,
  lastPage
}) {
  let [blue, setblue] = useState([true]);
  let [inc, setinc] = useState(0);
  
  useEffect(() => {
    if (page) {
      let temp = [...blue];
      temp = [false];
      temp[page-1] = true;
      setblue(temp);
    }
  }, [page]);

  if (lastPage < inc + 5) {
    list = lastPage - inc;
    if (list < 0) {
      list = 1;
      setinc(0);
      let temp = [...blue];
      temp = [false];
      temp[0] = true;
      setblue(temp);
    }
  }
  
  if (lastPage < inc + 5) {
    list = lastPage - inc;
    if (list < 0) {
      list = 1;
      setinc(0);
      let temp = [...blue];
      temp = [false];
      temp[0] = true;
      setblue(temp);
    }
  }

  return (
    <div className="flex mt-10 mb-10 justify-start">
      <div
        className="cursor-pointer"
        onClick={() => {
          if (parseInt(inc) - 5 >= 0) {
            setinc(parseInt(inc) - 5);
            let temp = [...blue];
            temp = [false];
            temp[inc - 5] = true;
            setblue(temp);
            setPage(inc - 5 + 1);
            localStorage.setItem("page", (inc - 5 + 1))
          }
        }}
      >
        <ArrowLeft />
      </div>
      {[...Array(list)].map((x, i) => (
        <div
          className="w-fit font-[600] cursor-pointer p-2 px-4 rounded-[50px] mx-3"
          style={{
            backgroundColor: blue[i + inc] ? "#27221C" : "#F6F7F9",
            color: blue[i + inc] ? "#ffff" : "#000000",
          }}
          key={i}
          onClick={() => {
            let temp = [...blue];
            temp = [false];
            temp[i + inc] = true;
            setblue(temp);
            setPage(i + 1 + inc);
            localStorage.setItem("page", (i + 1 + inc))
          }}
        >
          {i + 1 + inc}
        </div>
      ))}
      <div
        className="cursor-pointer"
        onClick={() => {
          if (lastPage > inc + 5) {
            setinc(parseInt(inc) + 5);
            let temp = [...blue];
            temp = [false];
            temp[inc + 5] = true;
            setblue(temp);
            setPage(inc + 5 + 1);
            localStorage.setItem("page", (5 + 1 + inc))
          }
        }}
      >
        <ArrowRight />
      </div>
    </div>
  );
}

export default DownPagination;
