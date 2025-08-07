import React from "react";
import Calculate from "../../shared/Buttons/Calculate";

const BallisticCalculator = ({design}) => {
  return (
    <div className={`${design}`}>
      <h1 className="text-2xl font-klear-bold">BALLISTIC CALCULATOR</h1>
      <p>
        Easily calculate bullet trajectories for any rifle or handgun load — and
        save unlimited custom profiles for future use.
      </p>
      <form action="submit" className="flex flex-col gap-5 text-center">
        <div className="text-xl bg-[#e4f3e5] py-3">Units of Measure</div>
        <select name="" id="" className="p-3 border rounded">
          <option value="" disabled>
            Please Select
          </option>
          <option value="">Select 2</option>
          <option value="">Select 3</option>
          <option value="">Select 4</option>
          <option value="">Select 5</option>
        </select>
        <div className="text-xl bg-[#e4f3e5] py-3">Ammunition Inputs</div>
        <div className="flex flex-col ">
          <label htmlFor="load" className="text-left font-semibold">
            Load type
          </label>
          <select name="load" id="load" className="p-3 border rounded">
            <option value="" disabled>
              Please Select
            </option>
            <option value="">Select 2</option>
            <option value="">Select 3</option>
            <option value="">Select 4</option>
            <option value="">Select 5</option>
          </select>
        </div>
        <div className="flex gap-3 text-left flex-wrap ">
          <label className="flex flex-col" htmlFor="calibar">
            <h1 className="font-semibold">Calibar</h1>
            <div className="flex border gap-3 rounded p-2">
              <input
                className="focus:outline-0"
                type="text"
                name="calibar"
                id="calibar"
              />
              <span>inch</span>
            </div>
          </label>
          <label className="flex flex-col" htmlFor="weight">
            <h1 className="font-semibold">Weight</h1>
            <div className="flex border gap-3 rounded p-2">
              <input
                className="focus:outline-0"
                type="text"
                name="weight"
                id="weight"
              />
              <span>gm</span>
            </div>
          </label>
          <label className="flex flex-col" htmlFor="length">
            <h1 className="font-semibold">Length</h1>
            <div className="flex border gap-3 rounded p-2">
              <input
                className="focus:outline-0"
                type="text"
                name="length"
                id="length"
              />
              <span>inch</span>
            </div>
          </label>
          <label className="flex flex-col" htmlFor="velocity">
            <h1 className="font-semibold">Muzzle Velocity</h1>
            <div className="flex border gap-3 rounded p-2">
              <input
                className="focus:outline-0"
                type="text"
                name="velocity"
                id="velocity"
              />
              <span>fps</span>
            </div>
          </label>
          <label className="flex flex-col mx-auto text-center" htmlFor="coefficient">
            <h1 className="font-semibold">Ballistic Coefficient</h1>
            <div className="flex border gap-3 rounded p-2">
              <input
                className="focus:outline-0"
                type="text"
                name="velocity"
                id="velocity"
              />
            </div>
          </label>
        </div>
        <div className="flex flex-col">
          <label htmlFor="load" className="text-left font-semibold">
            Drug model
          </label>
          <select name="load" id="load" className="p-3 border rounded">
            <option value="" disabled>
              Please Select
            </option>
            <option value="">Select 2</option>
            <option value="">Select 3</option>
            <option value="">Select 4</option>
            <option value="">Select 5</option>
          </select>
        </div>
        <div className="text-xl bg-[#e4f3e5] py-3">Gun Inputs</div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col">
            <label htmlFor="load" className="text-left font-semibold">
              Rifle Type
            </label>
            <select name="load" id="load" className="p-3 border rounded">
              <option value="" disabled>
                Please Select
              </option>
              <option value="">Select 2</option>
              <option value="">Select 3</option>
              <option value="">Select 4</option>
              <option value="">Select 5</option>
            </select>
          </div>
          <div className="flex gap-3 text-left">
            <label className="flex flex-col" htmlFor="calibar">
              <h1 className="font-semibold">Barrel Length</h1>
              <div className="flex border gap-3 rounded p-2">
                <input
                  className="focus:outline-0"
                  type="text"
                  name="calibar"
                  id="calibar"
                />
                <span>inch</span>
              </div>
            </label>
            <label className="flex flex-col" htmlFor="weight">
              <h1 className="font-semibold">Sight Height</h1>
              <div className="flex border gap-3 rounded p-2">
                <input
                  className="focus:outline-0"
                  type="text"
                  name="weight"
                  id="weight"
                />
                <span>inch</span>
              </div>
            </label>
            <label className="flex flex-col" htmlFor="length">
              <h1 className="font-semibold">Twist Rate</h1>
              <div className="flex border gap-3 rounded p-2">
                <input
                  className="focus:outline-0"
                  type="text"
                  name="length"
                  id="length"
                />
                <span>yd</span>
              </div>
            </label>
            <label className="flex flex-col" htmlFor="velocity">
              <h1 className="font-semibold">Zero Range</h1>
              <div className="flex border gap-3 rounded p-2">
                <input
                  className="focus:outline-0"
                  type="text"
                  name="velocity"
                  id="velocity"
                />
                <span>inch</span>
              </div>
            </label>
          </div>
        </div>
        <div className="text-xl bg-[#e4f3e5] py-3 flex justify-between items-center px-5">
          <span></span> <span>Environmental Status</span>{" "}
          <input
            type="checkbox"
            defaultChecked
            className="toggle toggle-[#3d8c40] checked:border-[#3d8c40] checked:bg-[#3d8c40] checked:text-white"
          />
        </div>
        <div className="flex gap-3 text-left flex-wrap">
          <label className="flex flex-col" htmlFor="calibar">
            <h1 className="font-semibold">Tempurature</h1>
            <div className="flex border gap-3 rounded p-2">
              <input
                className="focus:outline-0"
                type="text"
                name="calibar"
                id="calibar"
              />
              <span><sup>0</sup>C</span>
            </div>
          </label>
          <label className="flex flex-col" htmlFor="weight">
            <h1 className="font-semibold">Altitute</h1>
            <div className="flex border gap-3 rounded p-2">
              <input
                className="focus:outline-0"
                type="text"
                name="weight"
                id="weight"
              />
              <span>km</span>
            </div>
          </label>
          <label className="flex flex-col" htmlFor="length">
            <h1 className="font-semibold">Humidity</h1>
            <div className="flex border gap-3 rounded p-2">
              <input
                className="focus:outline-0"
                type="text"
                name="length"
                id="length"
              />
              <span>%</span>
            </div>
          </label>
          <label className="flex flex-col" htmlFor="velocity">
            <h1 className="font-semibold">Pressure</h1>
            <div className="flex border gap-3 rounded p-2">
              <input
                className="focus:outline-0"
                type="text"
                name="velocity"
                id="velocity"
              />
              <span>pa</span>
            </div>
          </label>
          <label className="flex flex-col text-center mx-auto" htmlFor="coefficient">
            <h1 className="font-semibold">Wind Speed</h1>
            <div className="flex border gap-3 rounded p-2">
              <input
                className="focus:outline-0"
                type="text"
                name="velocity"
                id="velocity"
              />
              <span>km/h</span>
            </div>
          </label>
        </div>
        <div className="flex justify-between">
          <Calculate design="w-2xs py-2" />
          <button className="btn btn-outline btn-[#3d8c40] w-2xs py-2">
            Save Info
          </button>
        </div>
      </form>
    </div>
  );
};

export default BallisticCalculator;
