import Xbutton from "../../assets/icons/Xbutton.webp"
import imageArrow from "../../assets/icons/imageArrow.webp"
import { useRef, useState, useEffect } from "react"
import { motion } from "motion/react"
import { client } from "../../sanity/sanityClient"

type GalleryImage = {
  _key: string;
  alt: string;
  asset: {
    url: string;
  };
}


const galleryQuery = `
  *[_type == "gallery" && _id == "gallery"][0] {
    images[] {
      _key,
      alt,
      asset->{
        url
      }
    }
  }
`;


function Galerie() {

  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function getGallery() {
      try {
        setLoading(true);
        setError(null);

        const data = await client.fetch(galleryQuery);

        setImages(data?.images ?? []);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    getGallery();
  }, []);

  const [imgIndex, setImgIndex] = useState<number | null>(null);

  const dialogRef = useRef<HTMLDialogElement>(null);


  function openDialog(imgIndex: number) {
    setImgIndex(imgIndex)
    dialogRef.current?.showModal();
  }

  function closeDialog() {
    dialogRef.current?.close();
    setImgIndex(null)
  }



  const dialogImage = imgIndex !== null ? images[imgIndex] : undefined;

  function showNextImg() {

    if (imgIndex === images.length - 1) {
      setImgIndex(-1)
    }

    setImgIndex((prev => {
      if (prev === null) return null;
      return prev + 1
    }))

  }

  function showPrevImg() {
    return imgIndex === 0 ? 0 : setImgIndex((prev => {
      if (prev === null) return null;
      return prev - 1
    }))
  }

  return (
    <div className={"px-5 md:px-20 xl:px-40 2xl:px-80 py-30 flex flex-col gap-10  bg-[#F5F0E6]"}>
      <div className="overflow-hidden">
        <motion.h1
          initial={{ opacity: 0, y: '100%' }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-5xl font-[Bree_serif] text-[#2B241F]">
          Galerie
        </motion.h1>
      </div>

      {loading ? (
        <div className="flex flex-col items-center justify-center text-center py-25 gap-4 font-[Bree_serif] text-[#2B241F]">

          <div className="h-6 w-6  animate-spin rounded-full border-3 border-[#FFFDF8]/20 border-t-[#FFFDF8]" />
        </div>

      ) : error ? (
        <div className="flex flex-col items-center justify-center text-center py-25 gap-4 font-[Bree_serif] text-[#2B241F]">

          <h3 className="text-3xl text-[#2B241F]">
            Galerii se nepodařilo načíst
          </h3>

          <p className="text-[#2B241F]/60 max-w-[300px] text-sm">
            Při načítání fotografií došlo k chybě. Zkuste to prosím znovu.
          </p>

        </div>

      ) : images.length === 0 ? (
        <div className="text-center py-25">
          <p className="text-[#2B241F]/60">
            V galerii zatím nejsou žádné fotografie.
          </p>
        </div>

      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="columns-1 md:columns-2 lg:columns-3 gap-6 rounded-2xl"
        >
          {images.map((image, index) => (
            <div
              className="overflow-hidden rounded-3xl mb-4 break-inside-avoid"
              key={image._key}
            >
              <motion.button
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                onClick={() => openDialog(index)}
                className="cursor-pointer"
              >
                <img
                  src={image.asset.url}
                  alt={image.alt}
                  className="w-full rounded-2xl"
                />
              </motion.button>
            </div>
          ))}
        </motion.div>
      )}

      <dialog onClose={() => setImgIndex(null)} ref={dialogRef} className="relative w-full h-full bg-transparent overflow-hidden open:flex flex-col items-center pt-20 z-80" >

        <button onClick={closeDialog} className="w-[45px]  self-end fixed cursor-pointer" aria-label="Předchozí fotka">
          <img src={Xbutton} alt="Zavřít fotografii" />
        </button>

        <button className="w-[45px] fixed self-start bottom-[50%] rotate-180 cursor-pointer" onClick={showPrevImg}>
          <img src={imageArrow} alt="Zobrait předchozí fotku" />
        </button>

        <img src={dialogImage?.asset.url} alt={dialogImage?.alt} className=" max-h-[80vh] max-w-[90vw]  w-auto h-auto fixed" />

        <button className="w-[45px] fixed self-end bottom-[50%] cursor-pointer" onClick={showNextImg} aria-label="Následujicí fotka">
          <img src={imageArrow} alt="Zobrait následujicí fotku" />
        </button>

      </dialog>

      {imgIndex !== null && <div className="bg-black/80 fixed inset-0"></div>}
    </div>
  )
}

export default Galerie;
