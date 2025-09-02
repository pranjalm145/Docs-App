import React, { useRef, useState } from 'react'
import Card from './Card'
import { TfiAgenda } from 'react-icons/tfi'


const Foreground = () => {

    const ref = useRef(null)
    // desc, filesize, close/download, tagdetails
    const data = [
        {
            desc: "This is the background color of the card that is displayed.", 
            filesize: ".9mb", 
            close: true, 
            tag: {
                isOpen: true, 
                tagTitle: "Upload", 
                tagColor: "blue"
            }
        },
        {
            desc: "This is the background color of the card that is displayed.", 
            filesize: ".9mb", 
            close: true, 
            tag: {
                isOpen: true, 
                tagTitle: "Download Now", 
                tagColor: "green"
            }
        },
        {
            desc: "This is the background color of the card that is displayed.", 
            filesize: ".9mb", 
            close: true, 
            tag: {
                isOpen: false, 
                tagTitle: "Download Now", 
                tagColor: "green"
            }
        }
    ]
  return (
    <div ref={ref}  className='fixed z-[3] top-0 left-0 w-full h-full flex gap-10 flex-wrap p-5'>
        {data.map((item,index)=>(
            <Card data = {item} reference = {ref}/>
        ))}
    </div>
  )
}

export default Foreground