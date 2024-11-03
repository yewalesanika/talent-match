import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
import { Button } from './ui/button'

const category = [
    "fontend developer",
    "java developer",
    "full stack web developer",
    "tester",
    "backend developer",
    "data science",
    "ui ux developer"
]

function CategoryCarousel() {
    return (
        <>
            <div className="">
                <Carousel className="w-full max-w-xl mx-auto my-20">
                    <CarouselNext/>
                    <CarouselContent>
                        {
                            category.map((cat) =>(
                            <CarouselItem key={cat} className="md:basis-1/2 lg-basis-1/3">
                                <Button className="bg-[#10375C] text-[#F4F6FF] hover:bg-[#F4F6FF] hover:bg-[#10375C] rounded-full">{cat}</Button>
                            </CarouselItem>
                        ))
                        }
                    </CarouselContent>
                    <CarouselPrevious></CarouselPrevious>
                </Carousel>
            </div>
        </>
    )
}

export default CategoryCarousel