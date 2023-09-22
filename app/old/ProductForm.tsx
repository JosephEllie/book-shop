"use client"
import { writeToLocalStorage } from "@/app/utils/local-db";
import Dashboard from "../../Layout/Dashboard";
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
const { log } = console;

function ProductForm() {
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [desc, setDesc] = useState("")
    const [img, setImg] = useState("")

    // log("name: ", name)
    // log("price: ", price)
    // log("desc: ", desc)
    // log("img: ", img)

    const HandleClick = () => {

        event?.preventDefault()
        const productPayLoad = {
            name,
            price,
            desc,
            img
        }
        // console.log(productPayLoad)
        writeToLocalStorage("", productPayLoad);
    }

    return (
        <Dashboard>
            <div className="max-w-md mx-auto">
                <form>
                    {/* Name Field */}
                    <div className="mb-4">

                        <input
                            type="text"
                            // id="name"
                            value={name}
                            onChange={({ target }) => { setName(target?.value) }}
                            placeholder="Product Name"
                            className="w-full text-black px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                        />
                    </div>

                    {/* Price Field */}
                    <div className="mb-4">

                        <input
                            type="text"
                            // id="price"
                            value={price}
                            onChange={({ target }) => { setPrice(target?.value) }}
                            placeholder="Product Price"
                            className="w-full text-black px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                        />
                    </div>

                    {/* Description Field */}
                    <div className="mb-4">

                        <textarea
                            // id="description"
                            value={desc}
                            onChange={({ target }) => { setDesc(target?.value) }}
                            placeholder="Product Description"
                            className="w-full text-black px-3 py-2 border rounded-lg resize-none h-32 focus:outline-none focus:ring focus:border-blue-300"
                        ></textarea>
                    </div>

                    {/* Image Field */}
                    <div className="mb-4">

                        <input
                            type="file"
                            // id="image"
                            value={img}
                            onChange={({ target }) => { setImg(target?.value) }}
                            accept="image/*"
                            className="w-full text-black px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="text-center">
                        <input
                            onClick={HandleClick}
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                        />


                    </div>
                </form>
            </div>
        </Dashboard>
    );
}

export default ProductForm;
