import React from "react";

const GiftCard = () => {
  return (
    <section>
      <div className="giftbanner">
        <div className="max-w-6xl px-7 m-auto ">
          <h1 className="pt-8 text-[30px] text-white font-medium">
            Mishisa Gift Card
          </h1>
          <p className="text-white font-medium mb-3">For someone you love .</p>
          <div className="bg-white lg:w-[500px] md:w-full w-full card1024 p-5 rounded-md">
            <div>
              <p className="font-medium text-[20px]">Amount</p>
              <button className="my-3 border-[1px] p-2 rounded-md hover:bg-vibrant hover:text-white text-[#465562]">
                Rs. 378888
              </button>
            </div>
            <div>
              <p className="font-medium text-[20px] mb-2">
                Who is this gift for ?
              </p>
              <div>
                <form action="/shopping">
                  <div className="border-[1px] p-3 rounded-md mb-2">
                    <div className="flex flex-col pb-2">
                      <label
                        htmlFor="name"
                        className="text-[#9BA5B0] font-medium"
                      >
                        Receiver Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Receiver Name"
                        className="border-2 outline-none px-2 text-sm h-11 rounded-md"
                      />
                    </div>
                    <div className="flex flex-col pb-2">
                      <label
                        htmlFor="name"
                        className="text-[#9BA5B0] font-medium"
                      >
                        Receiver Email
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Receiver Email"
                        className="border-2 outline-none px-2 text-sm h-11 rounded-md"
                      />
                    </div>
                    <div className="flex flex-col pb-2">
                      <label
                        htmlFor="name"
                        className="text-[#9BA5B0] font-medium"
                      >
                        Special Message
                      </label>
                      <textarea
                        className="border-2 outline-none px-2 text-sm  rounded-md"
                        placeholder="Special Message"
                        name="sentmail"
                        id="sentmail"
                        cols="20"
                        rows="5"
                      ></textarea>
                    </div>
                    <div className="flex flex-col pb-2">
                      <label
                        htmlFor="name"
                        className="text-[#9BA5B0] font-medium"
                      >
                        Sender Name / From
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Sender Name"
                        className="border-2 outline-none px-2 text-sm h-11 rounded-md"
                      />
                    </div>
                    <div className="flex flex-col pb-2">
                      <label
                        htmlFor="name"
                        className="text-[#9BA5B0] font-medium"
                      >
                        Sender Phone
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="RSender Phone"
                        className="border-2 outline-none px-2 text-sm h-11 rounded-md"
                      />
                    </div>
                    <div className="flex flex-col pb-2">
                      <label
                        htmlFor="name"
                        className="text-[#9BA5B0] font-medium"
                      >
                        Sender Email
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="Sender Email"
                        className="border-2 outline-none px-2 text-sm h-11 rounded-md"
                      />
                    </div>
                  </div>
                  <button className="bg-vibrant w-full py-3 text-white rounded-md">
                    PROCEED TO PAYMENT
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GiftCard;
