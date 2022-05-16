import { FC, useState } from "react";
import { AccordionHeader, AccordionInfo, AccordionInfoText, AccordionTitle } from "./accordionStyle"
import { Practic } from "./practic";

interface AccordionProps {
    title: string

}


export const Accordion: FC<AccordionProps> = ({ title }) => {

    const [isOpen, setIsOpen] = useState<boolean>(false)
    return (
        <>
            <Practic color='green'>
                Animation
            </Practic>
            <AccordionHeader onClick={() => setIsOpen(prev => !prev)}>
                <AccordionTitle>
                    {title}
                </AccordionTitle>
                <AccordionInfo isOpen={isOpen}>
                    <AccordionInfoText>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis minima repudiandae blanditiis hic commodi, nobis porro nihil delectus at. Nemo tenetur natus culpa explicabo pariatur cum ducimus temporibus? Tempore, deleniti?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis minima repudiandae blanditiis hic commodi, nobis porro nihil delectus at. Nemo tenetur natus culpa explicabo pariatur cum ducimus temporibus? Tempore, deleniti?
                    </AccordionInfoText>
                </AccordionInfo>
            </AccordionHeader>
        </>
    )
}
