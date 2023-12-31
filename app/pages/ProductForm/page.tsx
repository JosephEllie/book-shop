"use client"
import { writeToLocalStorage } from "@/app/utils/local-db";
import Dashboard from "../../Layout/Dashboard";
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { addDoc, collection } from "firebase/firestore"
import { auth, db } from "@/firebase";
import { storage } from "@/firebase";
import { useAuthState } from "react-firebase-hooks/auth"
const { log } = console;


function ProductForm() {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [desc, setDesc] = useState("")
    const [img, setImg] = useState("")

    // log("name: ", name)
    // log("price: ", price)
    // log("desc: ", desc)
    // log("img: ", img)

    // const HandleClick = () => {

    //     event?.preventDefault()
    //     const productPayLoad = {
    //         title,
    //         price,
    //         desc,
    //         img
    //     }
    //     // console.log(productPayLoad)
    //     writeToLocalStorage("", productPayLoad);
    // }
    const [user] = useAuthState(auth)
    const schema = yup.object().shape({
        title: yup.string().required("Title is required."),
        price: yup.string().required("Add product price"),
        description: yup.string().required("Description is required."),
        image: yup.string().required("Upload file")
    });
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })
    const postsRef = collection(db, "products")

    const onUpload = async (data: any) => {
        await addDoc(postsRef, {
            // title: data.title,
            // price: data.price,
            // desc: data.description,
            // image: data.image
            ...data,
            username: user?.displayName,
            id: user?.uid

        })
    }
    return (
        <Dashboard>
            <div className="max-w-md mx-auto">
                <form onSubmit={handleSubmit(onUpload)}>
                    {/* Name Field */}
                    <div className="mb-4">

                        <input
                            type="text"
                            // id="name"

                            // value={title}
                            // onChange={({ target }) => { setTitle(target?.value) }}
                            placeholder="Product Title"
                            className="w-full text-black px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                            {...register("title")}
                        />
                        <p className="text-red-600">{errors.title?.message}</p>
                    </div>

                    {/* Price Field */}
                    <div className="mb-4">

                        <input
                            type="text"
                            // id="price"
                            // value={price}
                            // onChange={({ target }) => { setPrice(target?.value) }}
                            placeholder="Product Price"
                            className="w-full text-black px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                            {...register("price")}
                        />
                        <p className="text-red-600">{errors.price?.message}</p>
                    </div>

                    {/* Description Field */}
                    <div className="mb-4">

                        <textarea
                            // id="description"
                            // value={desc}
                            // onChange={({ target }) => { setDesc(target?.value) }}
                            placeholder="Product Description"
                            className="w-full text-black px-3 py-2 border rounded-lg resize-none h-32 focus:outline-none focus:ring focus:border-blue-300"
                            {...register("description")}
                        ></textarea>
                        <p className="text-red-600">{errors.description?.message}</p>
                    </div>

                    {/* Image Field */}
                    <div className="mb-4">

                        <input
                            type="file"
                            // id="image"
                            // value={img}
                            // onChange={({ target }) => { setImg(target?.value) }}
                            accept="image/*"
                            className="w-full text-black px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                            {...register("image")}
                        />
                        <p className="text-red-600">{errors.image?.message}</p>
                    </div>

                    {/* Submit Button */}
                    <div className="text-center">
                        <input
                            // onClick={HandleClick}
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
