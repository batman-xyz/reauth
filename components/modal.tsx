"use client";

function Select() {
  const allData = ["Any", "PII", "Email", "Address", "Payment details", "Geolocation", "Video", "Images", "Content (blogs)"];
  return (
    <div className="flex flex-wrap rounded-md bg-opacity-20 bg-gray-400">
      {allData.map((val: string, ind: number) => {
        return (
          <div
            className="m-1 flex w-fit items-center rounded-xl bg-gray-500 px-3 py-1 font-medium text-gray-900"
            key={ind}
          >
            {val}
          </div>
        );
      })}
    </div>
  );
}

export default function Modal() {
  return (
    <div
      id="requestAccessModal"
      className="fixed left-0 top-0 z-10 hidden h-full w-full overflow-auto bg-black bg-opacity-40"
    >
      <div className="m-auto mt-[20%] flex w-1/3 flex-col rounded-lg border-[0.1rem] border-solid border-gray-900 bg-black p-5">
        <h2 className="text-center text-2xl font-bold text-gray-200">
          Request Access
        </h2>
        <p className="my-4 text-center text-sm text-gray-300">
          Get on the list now. We are completing POCs. Once they are completed
          we will reach out soon!
        </p>
        <form className="flex flex-col">
          <label htmlFor="emailAddress" className="mb-1 mt-3">
            Email address
          </label>
          <input
            name="emailAddress"
            className="h-10 rounded-md px-2 font-medium text-black"
          />
          <label htmlFor="requestedData" className="mb-1 mt-3">
            Current data requested from users
          </label>
          <Select />
          <input
            className="mt-8 rounded-md bg-slate-900 p-2 text-lg font-bold text-gray-400"
            type="submit"
            name="Request Access"
          />
        </form>
      </div>
    </div>
  );
}
