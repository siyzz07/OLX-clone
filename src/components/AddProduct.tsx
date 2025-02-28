

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import {db,storage} from '../firebase/setup'
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { addDoc, collection } from "firebase/firestore";

interface Props {
  setLogin: (value: boolean) => void;
}

export const AddProduct = ({ setLogin }: Props) => {
  
  const validationSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    category: Yup.string().required("Category is required"),
    price: Yup.number()
      .typeError("Price must be a number")
      .required("Price is required"),
    image: Yup.mixed().required("Image is required"),
  });

 
  const initialValues = {
    title: "",
    category: "",
    price: "",
    image: null,
  };

 
  const handleSubmit = async(values: any,{resetForm}:any) => {

    try {
        if(!values.image){
            alert('please upload the image')
            return
        }
        const imageRef = ref(storage,`product_images/${values.image.name}`) 
        await uploadBytes(imageRef,values.image)  

        const imageUrl = await getDownloadURL(imageRef)

        await addDoc(collection(db,'products'),{
            title:values.title,
            category:values.category,
            price:values.price,
            imageUrl:imageUrl,
            createAt: new Date()
        })

        alert("Product Added Successfully!");
        console.log("Form Data:", values);
        resetForm()
    } catch (error) {
        console.log('Error adding product:',error)
        alert('Failed to add the product, Please try again')
    }
  };

  return (
    <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="fixed inset-0 bg-gray-500/75 transition-opacity" aria-hidden="true"></div>
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <h1 className="text-end text-3xl font-semibold cursor-pointer" onClick={() => setLogin(false)}>x</h1>
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left ">
                  <h1 className="text-center text-2xl font-bold">Post Your AD</h1>


                 
                  <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                  >
                    {({ setFieldValue }) => (
                      <Form>
                        <div className="mt-5">
                          <label className="block">Title</label>
                          <Field type="text" name="title" placeholder="Title" className="border rounded mt-1 w-full p-2" />
                          <ErrorMessage name="title" component="div" className="text-red-500 text-sm" />
                        </div>

                        <div className="mt-5">
                          <label className="block">Category</label>
                          <Field type="text" name="category" placeholder="Category" className="border rounded mt-1 w-full p-2" />
                          <ErrorMessage name="category" component="div" className="text-red-500 text-sm" />
                        </div>

                        <div className="mt-5">
                          <label className="block">Price</label>
                          <Field type="text" name="price" placeholder="Price" className="border rounded mt-1 w-full p-2" />
                          <ErrorMessage name="price" component="div" className="text-red-500 text-sm" />
                        </div>

                        <div className="mt-5">
                          <label className="block">Image Upload</label>
                          <input
                            type="file"
                            className="border rounded mt-1 w-full p-2"
                            onChange={(event) => {
                              if (event.currentTarget.files) {
                                setFieldValue("image", event.currentTarget.files[0]);
                              }
                            }}
                          />
                          <ErrorMessage name="image" component="div" className="text-red-500 text-sm" />
                        </div>

                        <div className="mt-4">
                          <button type="submit" className="rounded bg-blue-500 text-center p-2 text-white w-full">
                            Add Product
                          </button>
                        </div>
                      </Form>
                    )}
                  </Formik>
                 



                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
