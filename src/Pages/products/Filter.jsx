import { Fragment, useState } from "react";
// import { Disclosure } from "@headlessui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/20/solid";
import { Disclosure } from "@headlessui/react";
import { allproduct } from "../../data";
import { AiFillHeart } from "react-icons/ai";
const productsPerPage = 12;

export default function Example() {
  const [displayedProducts, setDisplayedProducts] = useState(productsPerPage);
  const [filterData, setFilterData] = useState(allproduct);
  const [selectedOption, setSelectedOption] = useState("allproduct");

  const filterByData = (category) => {
    const filter = allproduct.filter((item) => item.category === category);
    setFilterData(filter);
  };

  const handleViewMore = () => {
    setDisplayedProducts((prevCount) => prevCount + productsPerPage);
  };
  const filterByData1 = (label) => {
    const filter1 = allproduct.filter((item) => item.label === label);
    setFilterData(filter1);
  };
  const handleSelectChange1 = (e) => {
    const selectedValue1 = e.target.value;
    setSelectedOption(selectedValue1);

    switch (selectedValue1) {
      case "allproduct":
        setFilterData(allproduct);
        break;
      case "makeup":
        filterByData1("Make Up");
        break;
      case "skincare":
        filterByData1("Skin Care");
        break;
      case "haircare":
        filterByData1("Hair Care");
        break;
      case "tool":
        filterByData1("Tools");
        break;
      case "bath":
        filterByData1("Bath & Body");
        break;
      default:
        setFilterData(allproduct);
    }
  };

  const filterByData2 = (value) => {
    const filter2 = allproduct.filter((item) => item.value === value);
    setFilterData(filter2);
  };
  const handleSelectChange2 = (e) => {
    const selectedValue2 = e.target.value;
    setSelectedOption(selectedValue2);

    switch (selectedValue2) {
      case "allproduct":
        setFilterData(allproduct);
        break;
      case "bpc":
        filterByData2("BPerfect Cosmetics");
        break;
      case "brillare":
        filterByData2("Brillare");
        break;
      case "dlf":
        filterByData2("Daily Life Forever52");
        break;
      case "mus":
        filterByData2("Make Up Studio");
        break;
      case "sr":
        filterByData2("Skin Republic");
        break;
      case "pc":
        filterByData2("Pastel Cosmetics");
        break;

      case "ac":
        filterByData2("Australis Cosmetics");
        break;
      default:
        setFilterData(allproduct);
    }
  };
  const filterByData3 = (to) => {
    const filter3 = allproduct.filter((item) => item.to === to);
    setFilterData(filter3);
  };
  const handleSelectChange3 = (e) => {
    const selectedValue3 = e.target.value;
    setSelectedOption(selectedValue3);

    switch (selectedValue3) {
      case "allproduct":
        setFilterData(allproduct);
        break;
      case "kp1":
        filterByData3("0-3334");
        break;
      case "kp2":
        filterByData3("3335-6669");
        break;

      case "kp3":
        filterByData3("6670-10004");
        break;
      default:
        setFilterData(allproduct);
    }
  };

  const handleSelectChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedOption(selectedValue);

    switch (selectedValue) {
      case "allproduct":
        setFilterData(allproduct);
        break;
      case "newproduct":
        filterByData("New Product");
        break;
      case "lowtohigh":
        filterByData("Low To High");
        break;
      case "hightolow":
        filterByData("High To Low");
        break;
      case "Discount":
        filterByData("Discount");
        break;
      default:
        setFilterData(allproduct);
    }
  };
  return (
    <div className=" mt-10">
      <div>
        <main>
          <div className="flex flex-col lg:flex-row  justify-between ">
            <div className="flex items-end">
              <h1 className="text-[#061221] sm:text-4xl text-2xl font-medium">
                All Products
              </h1>
              <span className="px-1 mb-1 text-sm">(37 Products)</span>
            </div>
            <div>
              <label htmlFor="sort">Sort By:</label>

              <select
                name="select"
                id="select"
                onChange={handleSelectChange}
                value={selectedOption}
                className="py-3 px-2 mx-1 rounded-md shadow-sm border sm:w-auto w-56 sm:mt-auto mt-3  outline-none"
              >
                <option value="allproduct">All Products</option>
                <option value="newproduct">New Products</option>
                <option value="lowtohigh">Low To High</option>
                <option value="hightolow">High To Low</option>
                <option value="Discount">Discount</option>
              </select>
            </div>
          </div>

          <section
            aria-labelledby="products-heading"
            className="flex flex-col  lg:flex-row  pb-24 pt-6"
          >
            <form>
              <div className="lg:w-60  md:w-full w-full">
                <Disclosure defaultOpen>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex  items-center w-full px-4  text-sm font-medium text-left text-gray-800 bg-white py-3 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                        <span>
                          {open ? (
                            <MinusIcon className="h-5 w-5" aria-hidden="true" />
                          ) : (
                            <PlusIcon className="h-5 w-5" aria-hidden="true" />
                          )}
                        </span>
                        <span className="mx-2">Category</span>
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-700 bg-white">
                        <div
                          className="flex items-center justify-between p-1"
                          onChange={handleSelectChange1}
                          value={selectedOption}
                        >
                          <label htmlFor="a1"> Make Up</label>
                          <input
                            type="checkbox"
                            id="a1"
                            name="a1"
                            value="makeup"
                          />
                        </div>
                        <div
                          className="flex items-center justify-between p-1"
                          onChange={handleSelectChange1}
                          value={selectedOption}
                        >
                          <label htmlFor="a3">Skin Care</label>
                          <input
                            type="checkbox"
                            id="a3"
                            name="a3"
                            value="skincare"
                          />
                        </div>
                        <div
                          className="flex items-center justify-between p-1"
                          onChange={handleSelectChange1}
                          value={selectedOption}
                        >
                          <label htmlFor="a2">Hair Care</label>
                          <input
                            type="checkbox"
                            id="a2"
                            name="a2"
                            value="haircare"
                          />
                        </div>
                        <div
                          className="flex items-center justify-between p-1"
                          onChange={handleSelectChange1}
                          value={selectedOption}
                        >
                          <label htmlFor="a4">Tools</label>
                          <input
                            type="checkbox"
                            id="a4"
                            name="a4"
                            value="tool"
                          />
                        </div>
                        <div
                          className="flex items-center justify-between p-1"
                          onChange={handleSelectChange1}
                          value={selectedOption}
                        >
                          <label htmlFor="a5">Bath & Body</label>
                          <input
                            type="checkbox"
                            id="a5"
                            name="a5"
                            value="bath"
                          />
                        </div>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>

                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex  items-center w-full px-4  text-sm font-medium text-left text-gray-800 bg-white py-3 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                        <span>
                          {open ? (
                            <MinusIcon className="h-5 w-5" aria-hidden="true" />
                          ) : (
                            <PlusIcon className="h-5 w-5" aria-hidden="true" />
                          )}
                        </span>
                        <span className="mx-2">Brands</span>
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-700 bg-white">
                        <div
                          className="flex items-center justify-between p-1"
                          onChange={handleSelectChange2}
                          value={selectedOption}
                        >
                          <label htmlFor="b1"> BPerfect Cosmetics</label>
                          <input
                            type="checkbox"
                            id="b1"
                            name="b1"
                            value="bpc"
                          />
                        </div>
                        <div
                          className="flex items-center justify-between p-1"
                          onChange={handleSelectChange2}
                          value={selectedOption}
                        >
                          <label htmlFor="b3">Brillare</label>
                          <input
                            type="checkbox"
                            id="b3"
                            name="b3"
                            value="brillare"
                          />
                        </div>
                        <div
                          className="flex items-center justify-between p-1"
                          onChange={handleSelectChange2}
                          value={selectedOption}
                        >
                          <label htmlFor="c2">Daily Life Forever52</label>
                          <input
                            type="checkbox"
                            id="c2"
                            name="c2"
                            value="dlf"
                          />
                        </div>
                        <div
                          className="flex items-center justify-between p-1"
                          onChange={handleSelectChange2}
                          value={selectedOption}
                        >
                          <label htmlFor="c4">Make Up Studio</label>
                          <input
                            type="checkbox"
                            id="c4"
                            name="c4"
                            value="mus"
                          />
                        </div>
                        <div
                          className="flex items-center justify-between p-1"
                          onChange={handleSelectChange2}
                          value={selectedOption}
                        >
                          <label htmlFor="e5">Skin Republic</label>
                          <input type="checkbox" id="e5" name="e5" value="sr" />
                        </div>
                        <div
                          className="flex items-center justify-between p-1"
                          onChange={handleSelectChange2}
                          value={selectedOption}
                        >
                          <label htmlFor="c5">Pastel Cosmetics</label>
                          <input type="checkbox" id="c5" name="c5" value="pc" />
                        </div>
                        <div
                          className="flex items-center justify-between p-1"
                          onChange={handleSelectChange2}
                          value={selectedOption}
                        >
                          <label htmlFor="d5">Australis Cosmetics</label>
                          <input type="checkbox" id="d5" name="d5" value="ac" />
                        </div>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex  items-center w-full px-4  text-sm font-medium text-left text-gray-800 bg-white py-3 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                        <span>
                          {open ? (
                            <MinusIcon className="h-5 w-5" aria-hidden="true" />
                          ) : (
                            <PlusIcon className="h-5 w-5" aria-hidden="true" />
                          )}
                        </span>
                        <span className="mx-2">Price</span>
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-700 bg-white">
                        <div
                          className="flex items-center justify-between p-1"
                          onChange={handleSelectChange3}
                          value={selectedOption}
                        >
                          <label htmlFor="k1"> Rs. 0 - Rs. 3334</label>
                          <input
                            type="checkbox"
                            id="k1"
                            name="k1"
                            value="kp1"
                          />
                        </div>
                        <div
                          className="flex items-center justify-between p-1"
                          onChange={handleSelectChange3}
                          value={selectedOption}
                        >
                          <label htmlFor="k3">Rs. 3335 - Rs. 6669</label>
                          <input
                            type="checkbox"
                            id="k3"
                            name="k3"
                            value="kp2"
                          />
                        </div>
                        <div
                          className="flex items-center justify-between p-1"
                          onChange={handleSelectChange3}
                          value={selectedOption}
                        >
                          <label htmlFor="k2">Rs. 6670 - Rs. 10004</label>
                          <input
                            type="checkbox"
                            id="k2"
                            name="k2"
                            value="kp3"
                          />
                        </div>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </div>
            </form>

            <div>
              <div className="bg-[#FFF3F2]">
                <div className="mt-3 sm:mx-10 mx-0 w-full sm:w-auto">
                  <div className=" grid w-full grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                    {filterData.slice(0, displayedProducts).map((item) => {
                      return (
                        <div key={item.id}>
                          <div className="border rounded-lg border-gray-400 flex flex-col w-full  p-5 lg:min-h-[395px] min-h-[414px] sm:min-h-[414px] md:min-h-[414px] bg-white ">
                            <div className="flex justify-between items-center">
                              <span
                                className={
                                  item.discount
                                    ? "border border-gray-500 px-3 text-gray-500 font-normal rounded-2xl text-sm"
                                    : ""
                                }
                              >
                                {item.discount}
                              </span>
                              <AiFillHeart
                                className="text-gray-600"
                                size={20}
                              />
                            </div>
                            <div className="flex justify-center mt-5">
                              <img
                                src={item.image}
                                alt="make_Up_Products"
                                className="max-w-full h-auto w-48  object-contain"
                              />
                            </div>
                            <div className="sm:mt-5 mt-3 ">
                              <p className="text-sm  text-gray-500">
                                {item.title}
                              </p>
                              <p className="text-gray-500 text-[16.8px] hover:text-vibrant hover:underline   font-medium  ">
                                {item.text}
                              </p>
                            </div>
                            <div className="flex mt-auto">
                              <p className="font-medium text-xl text-gray-700">
                                {item.price}
                              </p>
                              <del className="ml-2 text-red-500 text-xl font-bold">
                                {item.delPrice}
                              </del>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                {selectedOption === "allproduct" &&
                  displayedProducts < allproduct.length && (
                    <button
                      onClick={handleViewMore}
                      className="m-auto px-8 py-2 rounded-md mt-12 flex justify-center bg-white"
                    >
                      View More
                    </button>
                  )}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
