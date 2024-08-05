import { PiBookOpenTextLight } from 'react-icons/pi';
import { AiOutlineClose } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";

const BookModal = ({ book, onClose }) => {
    return (
        <div className='fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center'
            onClick={onClose}>
            <div
                onClick={(event) => event.stopPropagation()}
                className='w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative'
            >
                <AiOutlineClose
                    className='absolute right-6 top-6 text-3xl text-red-600 cursor-pointer'
                    onClick={onClose} />

                <h2 className='max-w-fit px-4 py-1 bg-red-300 rounded-lg'>
                    {book.publishYear}
                </h2>
                <h4 className='my-2 text-gray-500 text-sm'><strong>ID:</strong> {book._id}</h4>
                <div className='flex justify-start items-center gap-x-2'>
                    <PiBookOpenTextLight className='text-red-300 text-2xl' />
                    <h2 className='my-1'>{book.title}</h2>
                </div>
                <div className='flex justify-start items-center gap-x-2'>
                    <BiUserCircle className='text-red-300 text-2xl' />
                    <h2 className='my-1'>{book.author}</h2>
                </div>
                <p className='mt-4'>Anything that we want to show</p>
                <p className='my-2'>
                    An hour and a few lines had passed, the wind picked up.
                     I noticed the roll of dark clouds ahead and decided to 
                     pack up before I get caught in what looked like a heavy 
                     downpour. As I grabbed my guitar, I spotted a man, sitting 
                     a few meters away from me. I could have ignored him, but the 
                     smile on his face while his eyes were closed felt creepy.
                </p>
            </div>
        </div>
    )
}

export default BookModal
