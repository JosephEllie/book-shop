import Dashboard from "../../Layout/Dashboard";

function ProductForm() {
    return (
        <Dashboard>
            <div className="max-w-md mx-auto">
                <form>
                    {/* Name Field */}
                    <div className="mb-4">

                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Product Name"
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                        />
                    </div>

                    {/* Price Field */}
                    <div className="mb-4">

                        <input
                            type="text"
                            id="price"
                            name="price"
                            placeholder="Product Price"
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                        />
                    </div>

                    {/* Description Field */}
                    <div className="mb-4">

                        <textarea
                            id="description"
                            name="description"
                            placeholder="Product Description"
                            className="w-full px-3 py-2 border rounded-lg resize-none h-32 focus:outline-none focus:ring focus:border-blue-300"
                        ></textarea>
                    </div>

                    {/* Image Field */}
                    <div className="mb-4">

                        <input
                            type="file"
                            id="image"
                            name="image"
                            accept="image/*"
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="text-center">
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:ring focus:border-blue-300"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </Dashboard>
    );
}

export default ProductForm;
