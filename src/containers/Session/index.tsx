import React, { useEffect, useState } from "react";
import SessionItem from "../../components/SessionItem";
import { Requests } from "../../utils/requests";
import { sesType } from "../../utils/types";
import Bid from "../../components/Bid";

const index = () => {
  const [ses, setSes] = useState<sesType[]>([]);
  async function getSession() {
    const res = await Requests.getAllSessions();
    if (res.status === 200) {
      console.log("we got these data", res.data);
      setSes(res.data);
    }
  }
  useEffect(() => {
    getSession();
  }, []);
  console.log(ses);
  const [details, setDetails] = useState(false);

  return (
    <div className="flex px-4 -translate-y-48 gap-5 flex-wrap">
      {details && (
        <div className="w-[40rem] h-[45rem] bg-white flex flex-col items-center rounded-lg">
          <div className="w-[75%] my-10 bg-slate-400">
            <span>title</span>
          </div>
          <div className="h-[75%] w-full overflow-y-scroll border-b">
            <div className="p-10">
              <div className="max-w-[40%] bg-prim text-yellow-200 rounded-b-xl rounded-tr-xl mb-6 p-4">
                Lorem ipsum dolor
              </div>
              <div className="max-w-[40%] bg-primary text-yellow-200 rounded-b-xl rounded-tl-xl ml-auto mb-6 p-4">
                Lorem ipsum dolor
              </div>
              <div className="max-w-[40%] bg-prim text-yellow-200 rounded-b-xl rounded-tr-xl mb-6 p-4">
                Lorem ipsum dolor
              </div>
              <div className="max-w-[40%] bg-primary text-yellow-200 rounded-b-xl rounded-tl-xl ml-auto mb-6 p-4">
                Lorem ipsum dolor
              </div>
              <div className="max-w-[40%] bg-prim text-yellow-200 rounded-b-xl rounded-tr-xl mb-6 p-4">
                Lorem ipsum dolor
              </div>
              <div className="max-w-[40%] bg-primary text-yellow-200 rounded-b-xl rounded-tl-xl ml-auto mb-6 p-4">
                Lorem ipsum dolor
              </div>
              <div className="max-w-[40%] bg-prim text-yellow-200 rounded-b-xl rounded-tr-xl mb-6 p-4">
                Lorem ipsum dolor
              </div>
              <div className="max-w-[40%] bg-primary text-yellow-200 rounded-b-xl rounded-tl-xl ml-auto mb-6 p-4">
                Lorem ipsum dolor
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-[15rem] border-[1.5px] border-gray-400 rounded-xl overflow-hidden mt-3">
              <input
                type="text"
                name="nom"
                className="border-none h-12 w-full px-4 focus-within:outline-none"
              />
            </div>
            <div className="bg-nav rounded-lg h-[2.5rem] flex items-center justify-center w-[10rem] cursor-pointer mt-4">
              Log in
            </div>
          </div>
        </div>
      )}
      <div className="flex items-center flex-col">
        <div className="bg-primary h-[45rem] w-[72rem] flex flex-col">
          <div className="">EN cours</div>
          <div className="flex flex-col">
            {/* ATO NY SESSION NO MILAHATRA */}
            {ses.map((session, index) => (
              <SessionItem key={index} {...session} setDetails={setDetails} />
            ))}
          </div>
          <div className="flex flex-col">ffffffff</div>
        </div>
      </div>
    </div>
  );
};

export default index;
