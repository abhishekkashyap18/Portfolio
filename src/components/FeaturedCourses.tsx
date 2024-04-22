'use client'
import CourseData from '../data/music_courses.json'
import Link from 'next/link';
import { BackgroundGradient } from './ui/background-gradient';


//defining custom datatype in typescript
interface Course{
        id: number,
        title: string,
        slug: string,
        description: string,
        price: number,
        instructor: string,
        isFeatured: boolean,
        
}


function FeaturedCourses() {
    const featuredCourses = CourseData.courses.filter((course:Course)=> course.isFeatured)
  return (
    <div className=' py-12 bg-gray-900 min-h-full'>
        <div>
            <div className="text-center">
                <h2 className='text-3xl text-white font-semibold tracking-wide uppercase'>Projects</h2>
                {/* <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl'>Learn with the best</p> */}
            </div>
        </div>
        <div className='mt-10 '>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 justify-center'>
                {
                    featuredCourses.map((course:Course) => (
                        <div className='flex justify-center' key={course.id}>
                            <BackgroundGradient
                            className='flex flex-col rounded-[12px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-md'
                            >
                                <div className="p-4 sm:p-3 flex flex-col items-center text-center flex-grow">
                                    <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{course.title}</p>
                                    <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">{course.description}</p>
                                    <p className=" py-3 text-sm dark:text-neutral-400 flex-grow">{course.instructor}</p>
                                    <Link href={`${course.slug}`} 
                                    type='_blank' 
                                    className=' mt-3 mb-3 px-4 py-2 rounded border border-neutral-600 text-white bg-teal-700 hover:bg-gray-100 transition duration-200'
                                    >
                                       Live Link
                                    </Link>
                                </div>
                                
                            </BackgroundGradient>
                        </div>
                    ))
                }
            </div>
        </div>
        {/* <div className='mt-20 text-center'>
            <Link href={"/courses"}
            className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
            >
                View All Courses
            </Link>
        </div> */}
    </div>
  );
}

export default FeaturedCourses;
