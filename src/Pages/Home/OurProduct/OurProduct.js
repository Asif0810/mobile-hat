
import { useQuery } from '@tanstack/react-query';
import OurcategoriesDetails from './OurcategoriesDetails';

const OurProduct = () => {
    const { data: phoneCategories = [] } = useQuery({
        queryKey: ['phone-categories'],
        queryFn: () => fetch('http://localhost:5000/phone-categories')
            .then(res => res.json())
    })
    return (
        <div className='mx-auto'>
            <h2 className=' text-4xl font-bold text-center mt-10'>You will get all three types of mobiles from us</h2>
            <div className='ml-12 gap-11  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    phoneCategories.map(cat => <OurcategoriesDetails key={cat._id} cat={cat}></OurcategoriesDetails>)
                }
            </div>
        </div>
    );
};

export default OurProduct;















