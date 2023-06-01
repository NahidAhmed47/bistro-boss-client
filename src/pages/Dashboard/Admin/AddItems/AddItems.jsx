import React from "react";
import { useForm } from "react-hook-form";
import SectionTitle from "../../../../components/SectionTitle";

const AddItems = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="w-full  md:px-10 ">
      <SectionTitle subtitle="Whats's New?" title="Add an item"></SectionTitle>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-8 p-4 bg-slate-100 rounded-md"
      >
        <div>
          <p className="text-base font-semibold mb-1">Recipe Name*</p>
          <input
            {...register("name", { required: true })}
            className="w-full h-10 px-3 bg-white text-black outline-none rounded-md"
            placeholder="Recipe name..."
            type="text"
          />
        </div>
        <div className="grid md:grid-cols-2 my-3 gap-10">
          <div>
            <p className="text-base font-semibold mb-1">Category*</p>
            <select
              {...register("category", { required: true })}
              className="w-full h-10 px-3 bg-white text-black outline-none rounded-md"
            >
                <option disabled selected value='choose option'>Choose option</option>
              <option value="pizza">Pizza</option>
              <option value="dessert">Dessert</option>
              <option value="salad">Salad</option>
              <option value="soup">Soup</option>
              <option value="drinks">Drinks</option>
            </select>
          </div>
          <div>
            <p className="text-base font-semibold mb-1">Price*</p>
            <input
              {...register("price", { required: true })}
              className="w-full h-10 px-3 bg-white text-black outline-none rounded-md"
              placeholder="Price"
              type="number"
            />
          </div>
        </div>
        <div>
          <p className="text-base font-semibold mb-1">Recipe Details*</p>
          <textarea
          {...register("recipe", { required: true })}
            cols="30"
            rows="10"
            className="w-full p-3 bg-white text-black outline-none rounded-md"
            placeholder="Details..."
          ></textarea>
        </div>
        <div className="form-control w-full max-w-xs">
        <p className="text-base font-semibold mb-1">Image*</p>
          <input
          {...register("image")}
            type="file"
            className="file-input file-input-bordered w-full max-w-xs outline-none"
          />
        </div>
        <input type="submit" value="Add Items" className="my-btn py-2 mt-8 w-full"/>
        {/* <button className="my-btn py-2 mt-8 w-full" type="submit">Add Items</button> */}
      </form>
    </div>
  );
};

export default AddItems;
