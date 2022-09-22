import { Section } from "./Section";
import { SectionHeader } from "./SectionHeader";
import Image from "next/image";
import { useCallback, useState } from "react";
import ImageViewer from 'react-simple-image-viewer';
const Fade = require('react-reveal/Fade');

export type DogGalleryProps = {
    gallery: string[]
}


const DogGallery = ({ gallery }: DogGalleryProps) => {
    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);

    const openImageViewer = useCallback((index: any) => {
        setCurrentImage(index);
        setIsViewerOpen(true);
    }, []);
    const closeImageViewer = () => {
        setCurrentImage(0);
        setIsViewerOpen(false);
    };
    return (
        <Section>

            <SectionHeader title="Photo Gallery" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-10">

                {
                    gallery.length ?
                        gallery.map((img, index) => {
                            return <div key={index} className="overflow-hidden p-2 ">
                                <Fade left>
                                    <div key={index} className=" p-5 mark aspect-video relative w-full rounded-3xl overflow-hidden border border-black shadow-custom hover:shadow-none transition duration-300" onClick={() => openImageViewer(index)}>
                                        <Image src={img} alt="" layout="fill" objectFit="cover"></Image>
                                    </div>
                                </Fade>
                            </div>

                        }) : null
                }

            </div>

            {isViewerOpen && (
                <ImageViewer
                    src={gallery}
                    currentIndex={currentImage}
                    disableScroll={false}
                    closeOnClickOutside={true}
                    onClose={closeImageViewer}
                />
            )}
        </Section>
    )
}

export default DogGallery;