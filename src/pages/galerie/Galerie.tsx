import Xbutton from "../../assets/icons/Xbutton.webp"
import imageArrow from "../../assets/icons/imageArrow.webp"
import { useRef, useState, useEffect } from "react"
import { motion } from "motion/react"
import { client } from "../../sanity/sanityClient"

type GalleryImage = {
  _key: string;
  alt?: string | null;
  asset: {
    url: string;
  };
}

type GalleryData = {
  images: GalleryImage[] | null;
}


const galleryQuery = `
  *[_type == "gallery" && _id == "gallery"][0] {
    images[defined(asset->url)] {
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

        const data = await client.fetch<GalleryData | null>(galleryQuery);

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
    setImgIndex(prev => {
      if (prev === null || images.length === 0) return prev;
      return (prev + 1) % images.length;
    });
  }

  function showPrevImg() {
    setImgIndex(prev => {
      if (prev === null || images.length === 0) return prev;
      return (prev - 1 + images.length) % images.length;
    });
  }

  return (
    <div className={"px-5 md:px-20 xl:px-40 2xl:px-80 py-30 flex flex-col gap-10  bg-[#F5F0E6]"}>
      <div className="overflow-hidden">
        <motion.h1
          initial={{ opacity: 0, y: '100%' }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-5xl font-[Bree_serif] text-[#38271F]">
          Galerie
        </motion.h1>
      </div>

      {loading ? (
        <div className="flex flex-col items-center justify-center text-center py-25 gap-4 font-[Bree_serif] text-[#2B241F]">

          <div className="h-6 w-6  animate-spin rounded-full border-3 border-[#FFFDF8]/20 border-t-[#FFFDF8]" />
        </div>

      ) : error ? (
        <div className="flex flex-col items-center justify-center text-center py-25 gap-4 font-[Bree_serif] text-[#2B241F]">

          <h3 className="text-3xl text-[#38271F]">
            Galerii se nepodařilo načíst
          </h3>

          <p className="text-[#2B241F]/70 max-w-[300px] text-sm">
            Při načítání fotografií došlo k chybě. Zkuste to prosím znovu.
          </p>

        </div>

      ) : images.length === 0 ? (
        <div className="text-center py-25">
          <p className="text-[#2B241F]/70">
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
                  alt={image.alt ?? ""}
                  className="w-full rounded-2xl"
                />
              </motion.button>
            </div>
          ))}
        </motion.div>
      )}

      <dialog
        onClose={() => setImgIndex(null)}
        ref={dialogRef}
        aria-label="Galerie fotografií"
        className="fixed inset-0 m-0 h-dvh max-h-none w-dvw max-w-none overflow-hidden border-0 bg-transparent px-2 py-20 open:flex items-center justify-center backdrop:bg-black/80 sm:px-20"
      >

        <button type="button" onClick={closeDialog} className="absolute right-3 top-[max(0.75rem,env(safe-area-inset-top))] z-10 h-12 w-12 cursor-pointer" aria-label="Zavřít fotografii">
          <img src={Xbutton} alt="" className="h-full w-full object-contain" />
        </button>

        {dialogImage && (
          <div className="relative flex max-w-full items-center justify-center">
            <button type="button" className="absolute left-1 top-1/2 z-10 h-12 w-12 -translate-y-1/2 cursor-pointer rounded-full bg-black/50 sm:fixed sm:left-3 sm:bg-transparent" onClick={showPrevImg} aria-label="Předchozí fotografie">
              <img src={imageArrow} alt="" className="h-full w-full rotate-180 object-contain" />
            </button>

            <img src={dialogImage.asset.url} alt={dialogImage.alt ?? ""} className="block h-auto max-h-[calc(100dvh-10rem)] w-auto max-w-full object-contain" />

            <button type="button" className="absolute right-1 top-1/2 z-10 h-12 w-12 -translate-y-1/2 cursor-pointer rounded-full bg-black/50 sm:fixed sm:right-3 sm:bg-transparent" onClick={showNextImg} aria-label="Následující fotografie">
              <img src={imageArrow} alt="" className="h-full w-full object-contain" />
            </button>
          </div>
        )}

      </dialog>

    </div>
  )
}

export default Galerie;
