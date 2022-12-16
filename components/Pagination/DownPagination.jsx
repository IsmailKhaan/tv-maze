import React, { useEffect, useState } from "react";
import ArrowCircleLeft from "../Icon/ArrowCircleLeft";
import ArrowCircleRight from "../Icon/ArrowCircleRight";

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
      temp[page - 1] = true;
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
    <div className="flex items-center my-8 gap-2">
      <button
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
        <ArrowCircleLeft />
      </button>
      {[...Array(list)].map((x, i) => (
        <button
          className="border-2 rounded-full px-3 py-1"
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
        </button>
      ))}
      <button
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
        <ArrowCircleRight />
      </button>
    </div>
  );
}

export default DownPagination;
