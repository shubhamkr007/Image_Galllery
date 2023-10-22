import React, {useState} from 'react'
import useStorage from '../hooks/useStorage'

const Uploadform = () => {

  const [seletFile, setSelectFile] =useState<File | null>(null)
  const { startUpload, progress } = useStorage();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
    if(e.target.files && e.target.files[0]){
      setSelectFile(e.target.files[0]);
    }
  }

  const handleFileSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();

    if(seletFile){
      //start upload image
      startUpload(seletFile)
      console.log(seletFile)
    }
    setSelectFile(null);
  }

  return (
    <div className="text-center mt-10">
      <form  onSubmit={handleFileSubmit}
      className="flex items-center flex-col gap-8">
      <input type="file"
        onChange={handleFileChange}
       className="file-input file-input-bordered w-full max-w-xs" />
      <button type='submit' className={`btn btn-neutral ${Boolean(progress) && 'loading'}`} 
      disabled={!seletFile}>Upload 🚀</button>
      </form>
    </div>
  )
}

export default Uploadform