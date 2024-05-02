import before from '../../assets/before.jpg';
import after from '../../assets/after.jpg';

const Diff = () => {
    return (
        <div className='lg:w-3/4 mx-auto lg:px-0 px-5 my-20'>
            <div className='grid lg:grid-cols-2 gap-10'>
                <div className="diff aspect-[6/4]">
                    <div className="diff-item-1">
                        <div className="bg-primary text-primary-content text-9xl font-black grid place-content-center">
                            <img src={after} alt="" />
                        </div>
                    </div>
                    <div className="diff-item-2">
                        <div className="bg-base-200 text-9xl font-black grid place-content-center">
                            <img src={before} alt="" />
                        </div>
                    </div>
                    <div className="diff-resizer"></div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5'>
                    <div className='bg-base-200 rounded py-5'>
                        <i className="fa-regular fa-heart text-4xl flex justify-center text-green-600"></i>
                        <h1 className='text-3xl font-bold text-center'>870+</h1>
                        <p className='text-center font-medium'>Happy Customers</p>
                    </div>
                    <div className='bg-base-200 rounded py-5'>
                        <i className="fa-solid fa-broom text-4xl flex justify-center text-green-600"></i>
                        <h1 className='text-3xl font-bold text-center'>890+</h1>
                        <p className='text-center font-medium'>Projects Completed</p>
                    </div>
                    <div className='bg-base-200 rounded py-5'>
                        <i className="fa-solid fa-gift text-4xl flex justify-center text-green-600"></i>
                        <h1 className='text-3xl font-bold text-center'>483+</h1>
                        <p className='text-center font-medium'>Year established</p>
                    </div>
                    <div className='bg-base-200 rounded py-5'>
                        <i className="fa-solid fa-truck text-4xl flex justify-center text-green-600"></i>
                        <h1 className='text-3xl font-bold text-center'>678+</h1>
                        <p className='text-center font-medium'>Countries reached</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Diff;