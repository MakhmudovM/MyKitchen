import React from "react";

function Create() {
  return (
    <div>
      <h1 className="text-3xl text-center font-bold mb-10">
        Create New Recipie
      </h1>

      <form className="flex items-center flex-col gap-5 ">
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Title</span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </label>

        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Cooking Time</span>
          </div>
          <input
            type="number"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Image URL:</span>
          </div>
          <input
            type="url"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Method</span>
          </div>
          <textarea
            className="textarea textarea-bordered h-24"
            placeholder="Bio"
          ></textarea>
        </label>

        <button className="btn btn-secondary w-full max-w-xs">Submit</button>
      </form>
    </div>
  );
}

export default Create;
