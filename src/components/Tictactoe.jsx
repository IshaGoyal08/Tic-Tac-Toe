import React, { useRef, useState } from "react";
import circle from "/circle.png";
import cross from "/cross.png";

let data = ["", "", "", "", "", "", "", "", ""];
const Tictactoe = () => {
  let [count, setCount] = useState(0);
  let [lock, setLock] = useState(false);
  let titleref = useRef(null);
  let box1 = useRef(null);
  let box2 = useRef(null);
  let box3 = useRef(null);
  let box4 = useRef(null);
  let box5 = useRef(null);
  let box6 = useRef(null);
  let box7 = useRef(null);
  let box8 = useRef(null);
  let box9 = useRef(null);
  let box_array = [box1, box2, box3, box4, box5, box6, box7, box8, box9];

  const toggle = (e, num) => {
    if (lock) {
      return 0;
    }
    if (count % 2 == 0) {
      e.target.innerHTML = `<img src='${cross}' alt=""/>`;
      data[num] = "x";
      setCount(++count);
    } else {
      e.target.innerHTML = `<img src='${circle}' alt=""/>`;
      data[num] = "o";
      setCount(++count);
    }
    checkwin();
  };
  const checkwin = () => {
    if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
      won(data[2]);
    } else if (data[3] === data[4] && data[4] === data[5] && data[5] !== "") {
      won(data[5]);
    } else if (data[6] === data[7] && data[7] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[0] === data[3] && data[3] === data[6] && data[6] !== "") {
      won(data[6]);
    } else if (data[1] === data[4] && data[4] === data[7] && data[7] !== "") {
      won(data[7]);
    } else if (data[2] === data[5] && data[5] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[0] === data[4] && data[4] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[2] === data[4] && data[4] === data[6] && data[6] !== "") {
      won(data[6]);
    }
  };
  const won = (winner) => {
    setLock(true);
    if (winner === "x") {
      titleref.current.innerHTML = `Congratulations : <img  src='${cross}' class="px-[20px]  h-[50px]" alt=""/> Wins`;
    } else {
      titleref.current.innerHTML = `Congratulations : <img src='${circle}' class="px-[20px]  h-[50px]" alt=""/>  Wins`;
    }
  };

  const reset = () => {
    setLock(false);
    data = ["", "", "", "", "", "", "", "", ""];
    titleref.current.innerHTML = `Tic-Tac-Toe game In <span class="text-[#26ffcb] pl-4">React</span>`;
    box_array.map((e) => {
      e.current.innerHTML = "";
    });
  };
  return (
    <div>
      <div className="container flex flex-col items-center justify-center  ">
        <h1
          ref={titleref}
          className="title flex items-center justify-center text-2xl md:text-5xl font-bold pt-10 pb-7 text-white "
        >
          Tic-Tac-Toe game In{" "}
          <span className="text-[#26ffcb] pl-3 md:pl-4">React</span>{" "}
        </h1>
        <div className="board max-sm:h-[350px] max-sm:w-[320px] h-[550px] w-[510px] flex ">
          <div className="row1">
            <div
              ref={box1}
              className="boxes max-sm:h-[30px] max-sm:w-[30px] px-[50px] py-[50px] flex h-[160px] w-[160px] bg-[#1f3540] border-solid border-4 border-[#0f1b21] cursor-pointer rounded-md"
              onClick={(e) => {
                toggle(e, 0);
              }}
            ></div>
            <div
              ref={box2}
              className="boxes max-sm:h-[30px] max-sm:w-[30px] px-[50px] py-[50px] flex h-[160px] w-[160px] bg-[#1f3540] border-solid border-4 border-[#0f1b21] cursor-pointer rounded-md"
              onClick={(e) => {
                toggle(e, 1);
              }}
            ></div>
            <div
              ref={box3}
              className="boxes max-sm:h-[30px] max-sm:w-[30px] px-[50px] py-[50px] flex h-[160px] w-[160px] bg-[#1f3540] border-solid border-4 border-[#0f1b21] cursor-pointer rounded-md"
              onClick={(e) => {
                toggle(e, 2);
              }}
            ></div>
          </div>
          <div className="row2">
            <div
              ref={box4}
              className="boxes max-sm:h-[30px] max-sm:w-[30px] px-[50px] py-[50px] flex h-[160px] w-[160px] bg-[#1f3540] border-solid border-4 border-[#0f1b21] cursor-pointer rounded-md"
              onClick={(e) => {
                toggle(e, 3);
              }}
            ></div>
            <div
              ref={box5}
              className="boxes max-sm:h-[30px] max-sm:w-[30px] px-[50px] py-[50px]  flex h-[160px] w-[160px] bg-[#1f3540] border-solid border-4 border-[#0f1b21] cursor-pointer rounded-md"
              onClick={(e) => {
                toggle(e, 4);
              }}
            ></div>
            <div
              ref={box6}
              className="boxes max-sm:h-[30px] max-sm:w-[30px] px-[50px] py-[50px] flex h-[160px] w-[160px] bg-[#1f3540] border-solid border-4 border-[#0f1b21] cursor-pointer rounded-md"
              onClick={(e) => {
                toggle(e, 5);
              }}
            ></div>
          </div>
          <div className="row3">
            <div
              ref={box7}
              className="boxes max-sm:h-[30px] max-sm:w-[30px] px-[50px] py-[50px] flex h-[160px] w-[160px] bg-[#1f3540] border-solid border-4 border-[#0f1b21] cursor-pointer rounded-md"
              onClick={(e) => {
                toggle(e, 6);
              }}
            ></div>
            <div
              ref={box8}
              className="boxes max-sm:h-[30px] max-sm:w-[30px] flex px-[50px] py-[50px] h-[160px] w-[160px] bg-[#1f3540] border-solid border-4 border-[#0f1b21] cursor-pointer rounded-md"
              onClick={(e) => {
                toggle(e, 7);
              }}
            ></div>
            <div
              ref={box9}
              className="boxes max-sm:h-[30px] max-sm:w-[30px] flex px-[50px] py-[50px] h-[160px] w-[160px] bg-[#1f3540] border-solid border-4 border-[#0f1b21] cursor-pointer rounded-md"
              onClick={(e) => {
                toggle(e, 8);
              }}
            ></div>
          </div>
        </div>
        <button
          onClick={() => reset()}
          className="reset w-[150px] h-[50px] cursor-pointer border-none outline-none rounded-[50px] bg-[#1f3540] text-[#26ffcb] text-xl max-sm:mb-0 sm:mr-10 sm:mb-2 "
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Tictactoe;