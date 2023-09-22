import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/20/solid'
import Dashboard from '../../Layout/Dashboard'

export default function Card() {
    return (<Dashboard >

        <div className='flex-col flex justify-evenly sm:flex-row space-y-4'>
            <div className='bg-white p-6 rounded-lg'>
                <div className='mx-auto'>
                    <span className='text-gray-900 font-bold'>count goes here</span>
                    <h1 className='text-gray-600'>Total Books</h1>
                </div>
            </div>
            <div className='bg-white p-6 rounded-lg'>
                <div className='mx-auto'>
                    <span className='text-gray-900 font-bold'>count goes here</span>
                    <h1 className='text-gray-600'>Total Books</h1>
                </div>
            </div>
            <div className='bg-white p-6 rounded-lg'>
                <div className='mx-auto'>
                    <span className='text-gray-900 font-bold'>count goes here</span>
                    <h1 className='text-gray-600'>Total Books</h1>
                </div>
            </div>
            <div className='bg-white p-6 rounded-lg'>
                <div className='mx-auto'>
                    <span className='text-gray-900 font-bold'>count goes here</span>
                    <h1 className='text-gray-600'>Total Books</h1>
                </div>
            </div>
        </div>
    </Dashboard>
    )
}
