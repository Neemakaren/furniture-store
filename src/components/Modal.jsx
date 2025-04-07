import {useContext} from 'react'
import { CartContext } from '../context/cartContext'
import {FaShoppingBag} from 'react-icons/fa'
import {AiOutlineClose } from 'react-icons/ai'



const Modal = () => {
  const {
    addToCart,
    modalData,
    setProductModal,
  } = useContext(CartContext);
 
  return (
    <section className="fixed inset-0 select-none flex-col flex items-center overflow-y-auto scroll-smooth bg-black bg-opacity-50">
      <div className="flex-col flex items-center z-50 container mx-auto border-2 rounded-md pt-14 bg-white  text-black dark:text-white font-normal uppercase text-sm">
        <div
          type="button"
          className="p-1 bg-black text-white absolute rounded-xl "
          onClick={() => setProductModal(false)}
        >
          <AiOutlineClose className="" />
        </div>
        <div className="flex flex-col sm:flex-col md:flex-row gap-9 py-10 pl-4">
          {/* details left */}
          <div className="h-full w-full object-cover">
            <img
              src={modalData.image_path}
              alt={modalData?.name}
              className=""
            />
          </div>
          {/* detials right */}
          <div className="flex flex-col space-y-8 px-6">
            <h3 className="font-bold text-2xl">{modalData?.name}</h3>
            <p className="leading-7 font-bold text-[1.2em]">{modalData?.description}</p>
            <div
              type=""
              className="flex flex-row space-x-3 items-center px-2"
              onClick={() => addToCart(modalData)}
            >
              <span className="text-2xl text-[#947458]">
                <FaShoppingBag />
              </span>
              <button className="bg-[#947458] px-8 py-2 text-white rounded-sm">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Modal