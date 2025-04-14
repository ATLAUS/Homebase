import { UserButton } from "@clerk/clerk-react"

export const Dashboard = () => {
  return (
    <div className="h-full bg-neutral-100">
      <div className=" flex p-5 justify-between bg-white">
        <h1>Dashboard</h1>
        <UserButton/>
      </div>
      <div className="h-full mx-9">
        <div className="flex justify-around px-7 py-7">
          <button className="bg-neutral-200 rounded-lg p-1 pl-2 pr-2">Previous Week </button>
          <p>January 13 - 19, 2025</p>
          <button className="bg-neutral-200 rounded-lg p-1 pl-2 pr-2">Next Week</button>
        </div>
        <div className="border border-neutral-200 bg-white">
          <div className="flex justify-between p-5">
            <p>Monday</p>
            <button className="bg-neutral-100 px-2 rounded-lg">+</button>
          </div>
          <div className="mx-9 my-5 flex flex-col">
            <p className="p-2 bg-neutral-100 m-2">Update Styling</p>
            <p className="p-2 bg-neutral-100 m-2">Move these sections to components</p>
          </div>
        </div>
      </div>
    </div>
  )
}
