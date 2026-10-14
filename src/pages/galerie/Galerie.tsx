import klobasa from "../../assets/galerie/klobasa-chleba.png"
import kure from "../../assets/galerie/kure-chleba.png"
import pivo from "../../assets/galerie/pivo.png"
import pohar from "../../assets/galerie/pohar se slehackou.png"
import udirna from "../../assets/galerie/udirna.png"
import udirnaRadek from "../../assets/galerie/udirna-radek.png"
import tomahawk from "../../assets/galerie/tomahawk-steak.png"
import strudlSoutez from "../../assets/galerie/strudl-soutez.png"
import masoUdilna from "../../assets/galerie/maso-udirna.png"
import udirnaRyby from "../../assets/galerie/udirna-ryby.png"
import roma from "../../assets/galerie/Roma.png"
import Xbutton from "../../assets/icons/Xbutton.png"
import imageArrow from "../../assets/icons/imageArrow.png"
import { useRef, useState } from "react"

function Galerie() {

  const [imgIndex, setImgIndex] = useState<number | null>(null);

  const dialogRef = useRef<HTMLDialogElement>(null);

  const images = [pivo, klobasa, udirnaRadek, pohar, kure, roma, udirna, tomahawk, strudlSoutez, masoUdilna, udirnaRyby]

  function openDialog(imgIndex: number) {
    setImgIndex(imgIndex)
    dialogRef.current?.showModal();
  }

  function closeDialog() {
    dialogRef.current?.close();
    setImgIndex(null)
  }

  const dialogImage = images[imgIndex ?? 0]

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
      <h2 className="text-5xl font-[Bree_serif] text-[#2B241F]">Galerie</h2>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
        {images.map((image, index) => {
          return (
            <button key={image} onClick={() => openDialog(index)} className="cursor-pointer">
              <img src={image} className="w-full  mb-4 rounded-2xl break-inside-avoid" />
            </button>
          )
        })}
      </div>

      <dialog ref={dialogRef} className="relative w-full h-full bg-transparent overflow-hidden open:flex flex-col items-center pt-20 z-80" >

        <button onClick={closeDialog} className="w-[45px]  self-end fixed cursor-pointer" >
          <img src={Xbutton} alt="Zavřít fotografii" />
        </button>

        <button className="w-[45px] fixed self-start bottom-[50%] rotate-180 cursor-pointer" onClick={showPrevImg}>
          <img src={imageArrow} alt="" />
        </button>

        <img src={dialogImage} alt="" className=" max-h-[80vh] max-w-[90vw]  w-auto h-auto fixed" />

        <button className="w-[45px] fixed self-end bottom-[50%] cursor-pointer" onClick={showNextImg}>
          <img src={imageArrow} alt="" />
        </button>

      </dialog>

      {imgIndex !== null && <div className="bg-black/80 fixed inset-0"></div>}
    </div>
  )
}

export default Galerie;